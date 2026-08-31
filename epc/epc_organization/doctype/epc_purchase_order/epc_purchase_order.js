// Copyright (c) 2026, saii and contributors
// For license information, please see license.txt

// frappe.ui.form.on("EPC Purchase Order", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('EPC Purchase Order', {
    tax_percent(frm) {
        calculate_totals(frm);
    }
});

// Triggers for Child Table: EPC Purchase Order Item
frappe.ui.form.on('EPC Purchase Order Item', {
    qty(frm, cdt, cdn) {
        calculate_row(frm, cdt, cdn);
    },
    rate(frm, cdt, cdn) {
        calculate_row(frm, cdt, cdn);
    },
    items_remove(frm) {
        calculate_totals(frm);
    }
});

function calculate_row(frm, cdt, cdn) {
    let row = locals[cdt][cdn];
    let amount = (flt(row.qty) * flt(row.rate)) || 0;
    frappe.model.set_value(cdt, cdn, 'amount', amount);
    calculate_totals(frm);
}

function calculate_totals(frm) {
    let net = 0;
    (frm.doc.items || []).forEach(item => {
        net += flt(item.amount);
    });
    
    let tax_rate = flt(frm.doc.tax_percent) || 0;
    let tax_amt = (net * tax_rate) / 100;
    let grand = net + tax_amt;

    frm.set_value('net_amount', net);
    frm.set_value('tax_amount', tax_amt);
    frm.set_value('grand_total', grand);
}