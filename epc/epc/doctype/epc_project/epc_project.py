# Copyright (c) 2026, saiguru and contributors
# For license information, please see license.txt

import frappe
from frappe.utils import getdate, nowdate, date_diff
from frappe.model.document import Document

class EPCProject(Document):
    def validate(self):
        self.validate_dates()

    def validate_dates(self):
        if self.start_date and self.expected_end_date:
            if getdate(self.start_date) > getdate(self.expected_end_date):
                frappe.throw("Start Date cannot be after Expected End Date.")

    def get_evm_analytics(self):
        """
        Calculates EVM (Earned Value Management) S-Curve KPIs
        """
        bac = float(self.contract_value or 0)
        
        # 1. Overall Progress % from WBS
        wbs_items = frappe.get_all(
            "EPC WBS Element",
            fields=["progress_percent", "weightage"],
            filters={"project": self.name}
        )
        total_weight = sum(item.weightage or 1.0 for item in wbs_items)
        if total_weight > 0:
            weighted_progress = sum((item.progress_percent or 0) * (item.weightage or 1.0) for item in wbs_items)
            progress_pct = round(weighted_progress / total_weight, 2)
        else:
            progress_pct = 0.0

        # 2. Earned Value (EV) = BAC * (Progress % / 100)
        ev = round(bac * (progress_pct / 100.0), 2)

        # 3. Actual Cost (AC) = Sum of Submitted RA Bills
        ac = frappe.db.sql("""
            SELECT SUM(net_payable) FROM `tabEPC Running Account Bill`
            WHERE project=%s AND docstatus=1
        """, (self.name,))[0][0] or 0.0
        ac = round(float(ac), 2)

        # 4. Planned Value (PV) = BAC * (Days Elapsed / Total Duration)
        pv = 0.0
        today = getdate(nowdate())
        if self.start_date and self.expected_end_date:
            start = getdate(self.start_date)
            end = getdate(self.expected_end_date)
            total_days = max(1, date_diff(end, start))
            days_elapsed = min(total_days, max(0, date_diff(today, start)))
            pv = round(bac * (days_elapsed / float(total_days)), 2)

        # 5. CPI & SPI Indexes
        cpi = round(ev / ac, 2) if ac > 0 else 1.0
        spi = round(ev / pv, 2) if pv > 0 else 1.0

        # 6. Variances
        cost_variance = round(ev - ac, 2)
        schedule_variance = round(ev - pv, 2)

        return {
            "bac_budget": bac,
            "earned_value_ev": ev,
            "actual_cost_ac": ac,
            "planned_value_pv": pv,
            "cpi": cpi,
            "spi": spi,
            "cost_variance": cost_variance,
            "schedule_variance": schedule_variance,
            "progress_percent": progress_pct,
            "cost_health": "Under Budget (Good)" if cpi >= 1.0 else "Cost Overrun (Alert)",
            "schedule_health": "Ahead of Schedule" if spi >= 1.0 else "Behind Schedule (Delay)"
        }