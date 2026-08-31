// Copyright (c) 2026, saii and contributors
// For license information, please see license.txt

// frappe.ui.form.on("EPC BOQ", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('EPC BOQ', {
    refresh(frm) {
        // Triggered when form loads
    }
});

// Triggers for Child Table: EPC BOQ Item
frappe.ui.form.on('EPC BOQ Item', {
    qty(frm, cdt, cdn) {
        calculate_row_amount(frm, cdt, cdn);
    },
    rate(frm, cdt, cdn) {
        calculate_row_amount(frm, cdt, cdn);
    },
    items_remove(frm) {
        calculate_total(frm);
    }
});

function calculate_row_amount(frm, cdt, cdn) {
    let row = locals[cdt][cdn];
    let amount = (flt(row.qty) * flt(row.rate)) || 0;
    frappe.model.set_value(cdt, cdn, 'amount', amount);
    calculate_total(frm);
}

function calculate_total(frm) {
    let total = 0;
    (frm.doc.items || []).forEach(item => {
        total += flt(item.amount);
    });
    frm.set_value('total_amount', total);
}