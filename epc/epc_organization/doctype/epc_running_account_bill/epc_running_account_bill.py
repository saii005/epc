# Copyright (c) 2026, saiguru and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class EPCRunningAccountBill(Document):
    def validate(self):
        self.calculate_financials()
        self.validate_percentages()
        self.validate_against_contract_value()

    def calculate_financials(self):
        # 1. Sum amount = claimed_qty * rate
        if self.items:
            for item in self.items:
                qty = float(item.claimed_qty or 1.0)
                rate = float(item.rate or 0.0)
                item.amount = round(qty * rate, 2)
            self.gross_amount = sum(float(item.amount or 0) for item in self.items)
        
        gross = float(self.gross_amount or 0)
        retention_pct = float(self.retention_percent or 0)
        tax_pct = float(self.tax_percent or 0)
        advance_recovery = float(getattr(self, "advance_recovery", 0) or 0)

        # 2. Retention Deduction = Gross * (Retention % / 100)
        self.retention_amount = round(gross * (retention_pct / 100.0), 2)

        # 3. Taxable Base = Gross - Retention - Advance Recovery
        taxable_base = max(0.0, gross - self.retention_amount - advance_recovery)
        self.tax_amount = round(taxable_base * (tax_pct / 100.0), 2)

        # 4. Final Net Payable = Taxable Base + Tax
        self.net_payable = round(taxable_base + self.tax_amount, 2)

    def validate_percentages(self):
        if (self.retention_percent or 0) < 0 or (self.retention_percent or 0) > 100:
            frappe.throw("Retention Percentage must be between 0 and 100.")
        if (self.tax_percent or 0) < 0 or (self.tax_percent or 0) > 100:
            frappe.throw("Tax Percentage must be between 0 and 100.")

    def validate_against_contract_value(self):
        """
        Safety Check: Cumulative billed amount must not exceed Project Contract Value
        """
        if not self.project:
            return

        contract_value = frappe.db.get_value("EPC Project", self.project, "contract_value") or 0.0
        if contract_value > 0:
            # Sum of all previously submitted bills
            prev_billed = frappe.db.sql("""
                SELECT SUM(net_payable) FROM `tabEPC Running Account Bill`
                WHERE project=%s AND docstatus=1 AND name != %s
            """, (self.project, self.name or ""))[0][0] or 0.0

            total_cumulative = prev_billed + float(self.net_payable or 0)
            if total_cumulative > contract_value:
                frappe.msgprint(
                    f"⚠️ <b>Budget Warning:</b> Cumulative billed amount (₹{total_cumulative:,.2f}) exceeds Contract Value (₹{contract_value:,.2f})!",
                    indicator="orange"
                )

    def on_submit(self):
        """
        Triggered when Bill is approved and submitted
        """
        if self.project:
            frappe.msgprint(
                f"✅ <b>RA Bill Approved:</b> {self.name} submitted for Project {self.project}. Net Payable: ₹{self.net_payable:,.2f}",
                indicator="green"
            )