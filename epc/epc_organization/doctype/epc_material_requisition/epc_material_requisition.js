frappe.ui.form.on('EPC Material Requisition', {
    refresh: function(frm) {
        if (frm.doc.docstatus === 1) {
            frm.add_custom_button(__('Create Purchase Order'), function() {
                frappe.model.open_mapped_doc({
                    method: "epc.epc_organization.doctype.epc_material_requisition.epc_material_requisition.make_purchase_order",
                    frm: frm
                });
            }, __('Create'));
        }
    }
});