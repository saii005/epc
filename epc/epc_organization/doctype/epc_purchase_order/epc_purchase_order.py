# Copyright (c) 2026, saiguru and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class EPCPurchaseOrder(Document):
    def validate(self):
        self.calculate_totals()

    def calculate_totals(self):
        items = getattr(self, "items", None) or []
        total = 0.0
        for item in items:
            qty = float(getattr(item, "qty", 0) or 0)
            rate = float(getattr(item, "rate", 0) or 0)
            item.amount = round(qty * rate, 2)
            total += item.amount
        
        self.total_amount = total


@frappe.whitelist()
def make_grn(source_name, target_doc=None):
    """
    Auto-Generate EPC Goods Receipt Note (GRN) from Purchase Order
    """
    po = frappe.get_doc("EPC Purchase Order", source_name)
    
    grn = frappe.new_doc("EPC Goods Receipt Note")
    grn.project = po.project
    grn.purchase_order = po.name
    grn.vendor = getattr(po, "vendor", None)
    grn.items = []

    po_items = getattr(po, "items", None) or []
    for item in po_items:
        grn.append("items", {
            "item_name": getattr(item, "item_name", None) or getattr(item, "description", "Material Item"),
            "ordered_qty": getattr(item, "qty", 0),
            "received_qty": getattr(item, "qty", 0),
            "uom": getattr(item, "uom", "Nos")
        })

    return grn