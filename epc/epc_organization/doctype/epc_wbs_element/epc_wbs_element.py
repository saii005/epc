# Copyright (c) 2026, saiguru and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class EPCWBSElement(Document):
    def validate(self):
        self.validate_progress()
        self.auto_update_status()

    def validate_progress(self):
        if (self.progress_percent or 0) < 0 or (self.progress_percent or 0) > 100:
            frappe.throw("Progress Percent must be between 0% and 100%.")
        if (self.weightage or 0) < 0:
            frappe.throw("Weightage cannot be negative.")

    def auto_update_status(self):
        prog = float(self.progress_percent or 0)
        if prog == 100.0:
            self.status = "Completed"
        elif prog > 0.0:
            self.status = "In Progress"
        elif prog == 0.0 and self.status == "Completed":
            self.status = "Pending"

    def on_update(self):
        """
        Whenever WBS Element progress changes, recalculate Parent EPC Project Progress
        """
        self.recalculate_project_progress()

    def recalculate_project_progress(self):
        if not self.project:
            return

        wbs_items = frappe.get_all(
            "EPC WBS Element",
            fields=["progress_percent", "weightage"],
            filters={"project": self.project}
        )

        total_weight = sum(item.weightage or 1.0 for item in wbs_items)
        if total_weight > 0:
            weighted_progress = sum((item.progress_percent or 0) * (item.weightage or 1.0) for item in wbs_items)
            overall_pct = round(weighted_progress / total_weight, 2)
        else:
            overall_pct = 0.0

        # Update Parent EPC Project
        if frappe.db.exists("EPC Project", self.project):
            project_doc = frappe.get_doc("EPC Project", self.project)
            if hasattr(project_doc, "overall_progress"):
                project_doc.overall_progress = overall_pct
            if overall_pct >= 100.0 and project_doc.status != "Completed":
                project_doc.status = "Completed"
            elif overall_pct > 0.0 and project_doc.status == "Planning":
                project_doc.status = "In Progress"
            project_doc.save(ignore_permissions=True)