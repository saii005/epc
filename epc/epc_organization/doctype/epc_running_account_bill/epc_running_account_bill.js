// Copyright (c) 2026, saiguru and contributors
// For license information, please see license.txt

frappe.ui.form.on('EPC Running Account Bill', {
    retention_percent: function(frm) {
        calculate_bill_totals(frm);
    },
    tax_percent: function(frm) {
        calculate_bill_totals(frm);
    },
    gross_amount: function(frm) {
        calculate_bill_totals(frm);
    }
});

// 🌟 Child Table Row Calculations (claimed_qty * rate = amount)
frappe.ui.form.on('EPC Billing Item', {
    claimed_qty: function(frm, cdt, cdn) {
        calculate_row_amount(frm, cdt, cdn);
    },
    rate: function(frm, cdt, cdn) {
        calculate_row_amount(frm, cdt, cdn);
    },
    amount: function(frm) {
        calculate_bill_totals(frm);
    },
    items_remove: function(frm) {
        calculate_bill_totals(frm);
    }
});

function calculate_row_amount(frm, cdt, cdn) {
    let row = locals[cdt][cdn];
    let qty = flt(row.claimed_qty || 0);
    let rate = flt(row.rate || 0);
    
    // Amount = Qty * Rate (if Qty is 0 but Rate exists, default to 1 qty)
    if (qty === 0 && rate > 0) {
        qty = 1;
        frappe.model.set_value(cdt, cdn, 'claimed_qty', 1);
    }
    
    let amount = qty * rate;
    frappe.model.set_value(cdt, cdn, 'amount', amount);
    calculate_bill_totals(frm);
}

function calculate_bill_totals(frm) {
    let gross = 0;
    (frm.doc.items || []).forEach(item => {
        gross += flt(item.amount || 0);
    });

    frm.set_value('gross_amount', gross);

    let retention_pct = flt(frm.doc.retention_percent || 0);
    let tax_pct = flt(frm.doc.tax_percent || 0);

    // Retention Amount = Gross * (Retention % / 100)
    let retention_amt = Math.round(gross * (retention_pct / 100.0) * 100) / 100;
    frm.set_value('retention_amount', retention_amt);

    // Tax Amount = (Gross - Retention) * (Tax % / 100)
    let taxable_base = gross - retention_amt;
    let tax_amt = Math.round(taxable_base * (tax_pct / 100.0) * 100) / 100;
    frm.set_value('tax_amount', tax_amt);

    // Net Payable = (Gross - Retention) + Tax
    let net = Math.round((taxable_base + tax_amt) * 100) / 100;
    frm.set_value('net_payable', net);
}