# Copyright (c) 2026, saiguru and contributors
# For license information, please see license.txt

import frappe
from frappe.utils import getdate, nowdate
from frappe.model.document import Document

class EPCNonConformanceReport(Document):
    def validate(self):
        self.validate_closure()
        self.validate_dates()

    def validate_closure(self):
        """
        Ensure Root Cause and Corrective Action are entered before closing an NCR
        """
        if self.select in ["Closed", "Resolved"]:
            if not self.corrective_action:
                frappe.throw("Cannot close NCR without providing 'Corrective Action' details.")
            if not self.closure_date:
                self.closure_date = nowdate()
            if not self.closed_by:
                self.closed_by = frappe.session.user

    def validate_dates(self):
        if self.raised_date and self.target_closure_date:
            if getdate(self.target_closure_date) < getdate(self.raised_date):
                frappe.throw("Target Closure Date cannot be earlier than Raised Date.")

    def on_submit(self):
        if self.severity in ["Critical", "Major", "MinorMajorCritical"]:
            frappe.msgprint(
                f"🚨 <b>Quality Alert:</b> {self.severity} Non-Conformance Report ({self.name}) submitted for Project {self.project}.",
                indicator="orange"
            )