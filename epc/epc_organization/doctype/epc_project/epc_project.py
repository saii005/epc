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
                frappe.throw('Start Date cannot be after Expected End Date.')

    def get_evm_analytics(self):
        bac = float(self.contract_value or 0)
        
        wbs_items = frappe.get_all(
            'EPC WBS Element',
            fields=['progress_percent', 'weightage'],
            filters={'project': self.name}
        )
        total_weight = sum(item.weightage or 1.0 for item in wbs_items)
        if total_weight > 0:
            weighted_progress = sum((item.progress_percent or 0) * (item.weightage or 1.0) for item in wbs_items)
            progress_pct = round(weighted_progress / total_weight, 2)
        else:
            progress_pct = 0.0

        ev = round(bac * (progress_pct / 100.0), 2)

        bills = frappe.get_all('EPC Running Account Bill', filters={'project': self.name, 'docstatus': 1}, fields=['net_payable'])
        ac = round(sum(float(b.net_payable or 0) for b in bills), 2)

        pv = 0.0
        today = getdate(nowdate())
        if self.start_date and self.expected_end_date:
            start = getdate(self.start_date)
            end = getdate(self.expected_end_date)
            total_days = max(1, date_diff(end, start))
            days_elapsed = min(total_days, max(0, date_diff(today, start)))
            pv = round(bac * (days_elapsed / float(total_days)), 2)

        cpi = round(ev / ac, 2) if ac > 0 else 1.0
        spi = round(ev / pv, 2) if pv > 0 else 1.0

        return {
            'bac_budget': bac,
            'earned_value_ev': ev,
            'actual_cost_ac': ac,
            'planned_value_pv': pv,
            'cpi': cpi,
            'spi': spi,
            'cost_variance': round(ev - ac, 2),
            'schedule_variance': round(ev - pv, 2),
            'progress_percent': progress_pct,
            'cost_health': 'Under Budget (Good)' if cpi >= 1.0 else 'Cost Overrun (Alert)',
            'schedule_health': 'Ahead of Schedule' if spi >= 1.0 else 'Behind Schedule (Delay)'
        }
