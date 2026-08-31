# Copyright (c) 2026, saii and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import cint

class EPCDailyProgressReport(Document):
    def validate(self):
        self.calculate_total_staff()

    def calculate_total_staff(self):
        self.total_staff = (
            cint(self.skilled_labor) + 
            cint(self.unskilled_labor) + 
            cint(self.subcon_labor)
        )