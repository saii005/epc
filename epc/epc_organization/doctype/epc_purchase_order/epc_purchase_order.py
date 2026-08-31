# Copyright (c) 2026, saii and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import flt

class EPCPurchaseOrder(Document):
    def validate(self):
        self.calculate_all_totals()

    def calculate_all_totals(self):
        net = 0.0
        for item in self.items:
            item.amount = flt(item.qty) * flt(item.rate)
            net += flt(item.amount)

        tax_rate = flt(self.tax_percent) or 0.0
        tax_amt = (net * tax_rate) / 100.0
        grand = net + tax_amt

        self.net_amount = net
        self.tax_amount = tax_amt
        self.grand_total = grand