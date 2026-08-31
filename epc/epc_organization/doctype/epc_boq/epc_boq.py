# Copyright (c) 2026, saii and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import flt

class EPCBOQ(Document):
    def validate(self):
        self.calculate_totals()

    def calculate_totals(self):
        total = 0.0
        for item in self.items:
            # Calculate item amount
            item.amount = flt(item.qty) * flt(item.rate)
            total += flt(item.amount)
        
        self.total_amount = total