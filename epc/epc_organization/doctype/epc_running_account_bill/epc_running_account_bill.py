# Copyright (c) 2026, saii and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import flt

class EPCRunningAccountBill(Document):
    def validate(self):
        self.calculate_totals()

    def calculate_totals(self):
        gross = 0.0
        for item in self.items:
            item.amount = flt(item.claimed_qty) * flt(item.rate)
            gross += flt(item.amount)

        retention_rate = flt(self.retention_percent) or 0.0
        retention_amt = (gross * retention_rate) / 100.0
        taxable_amount = gross - retention_amt

        tax_rate = flt(self.tax_percent) or 0.0
        tax_amt = (taxable_amount * tax_rate) / 100.0
        net = taxable_amount + tax_amt

        self.gross_amount = gross
        self.retention_amount = retention_amt
        self.tax_amount = tax_amt
        self.net_payable = net