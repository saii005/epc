// Copyright (c) 2026, saii and contributors
// For license information, please see license.txt

// frappe.ui.form.on("EPC Daily Progress Report", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('EPC Daily Progress Report', {
    skilled_labor(frm) {
        calculate_total_staff(frm);
    },
    unskilled_labor(frm) {
        calculate_total_staff(frm);
    },
    subcon_labor(frm) {
        calculate_total_staff(frm);
    }
});

function calculate_total_staff(frm) {
    let total = (cint(frm.doc.skilled_labor) || 0) + 
                (cint(frm.doc.unskilled_labor) || 0) + 
                (cint(frm.doc.subcon_labor) || 0);
    frm.set_value('total_staff', total);
}