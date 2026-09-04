# Copyright (c) 2026, saiguru and contributors
# For license information, please see license.txt

import frappe
from frappe.utils import getdate, nowdate
from frappe.model.document import Document

class EPCDailyProgressReport(Document):
    def validate(self):
        self.calculate_manpower()
        self.validate_report_date()

    def calculate_manpower(self):
        """
        Auto sum skilled, unskilled, and subcontractor manpower
        """
        skilled = int(self.skilled_labor or 0)
        unskilled = int(self.unskilled_labor or 0)
        subcon = int(self.subcon_labor or 0)
        self.total_staff = skilled + unskilled + subcon

    def validate_report_date(self):
        """
        Prevent creating DPR with a future date
        """
        if self.report_date and getdate(self.report_date) > getdate(nowdate()):
            frappe.throw("DPR Report Date cannot be in the future.")

    def on_submit(self):
        """
        When DPR is approved and submitted, check safety alerts
        """
        if self.safety_incident:
            frappe.msgprint(
                f"⚠️ <b>Safety Alert Logged:</b> Incident reported in DPR {self.name} on {self.report_date} for Project {self.project}.",
                indicator="red"
            )