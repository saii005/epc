# Copyright (c) 2026, saiguru and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class EPCMaterialRequisition(Document):
    def validate(self):
        self.validate_items()

    def validate_items(self):
        items = getattr(self, "items", None) or []
        if not items:
            frappe.throw("Material Requisition must contain at least one item.")


@frappe.whitelist()
def make_purchase_order(source_name, target_doc=None):
    """
    Auto-Generate EPC Purchase Order from Material Requisition
    """
    mr = frappe.get_doc("EPC Material Requisition", source_name)
    
    po = frappe.new_doc("EPC Purchase Order")
    po.project = mr.project
    po.material_requisition = mr.name
    po.items = []

    mr_items = getattr(mr, "items", None) or []
    for item in mr_items:
        po.append("items", {
            "item_name": getattr(item, "item_name", None) or getattr(item, "description", "Material Item"),
            "qty": getattr(item, "qty", 1),
            "uom": getattr(item, "uom", "Nos"),
            "rate": getattr(item, "rate", 0),
            "amount": float(getattr(item, "qty", 1)) * float(getattr(item, "rate", 0))
        })

    return po