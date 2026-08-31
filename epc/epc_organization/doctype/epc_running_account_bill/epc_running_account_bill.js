// Copyright (c) 2026, saii and contributors
// For license information, please see license.txt

// frappe.ui.form.on("EPC Running Account Bill", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('EPC Running Account Bill', {
    retention_percent(frm) {
        calculate_bill_totals(frm);
    },
    tax_percent(frm) {
        calculate_bill_totals(frm);
    }
});

frappe.ui.form.on('EPC Billing Item', {
    claimed_qty(frm, cdt, cdn) {
        calculate_row_amount(frm, cdt, cdn);
    },
    rate(frm, cdt, cdn) {
        calculate_row_amount(frm, cdt, cdn);
    },
    items_remove(frm) {
        calculate_bill_totals(frm);
    }
});

function calculate_row_amount(frm, cdt, cdn) {
    let row = locals[cdt][cdn];
    let amount = (flt(row.claimed_qty) * flt(row.rate)) || 0;
    frappe.model.set_value(cdt, cdn, 'amount', amount);
    calculate_bill_totals(frm);
}

function calculate_bill_totals(frm) {
    let gross = 0;
    (frm.doc.items || []).forEach(item => {
        gross += flt(item.amount);
    });

    let retention_rate = flt(frm.doc.retention_percent) || 0;
    let retention_amt = (gross * retention_rate) / 100;
    let taxable_amount = gross - retention_amt;

    let tax_rate = flt(frm.doc.tax_percent) || 0;
    let tax_amt = (taxable_amount * tax_rate) / 100;
    let net = taxable_amount + tax_amt;

    frm.set_value('gross_amount', gross);
    frm.set_value('retention_amount', retention_amt);
    frm.set_value('tax_amount', tax_amt);
    frm.set_value('net_payable', net);
}