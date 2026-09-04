# Copyright (c) 2026, saiguru and contributors
# For license information, please see license.txt

import frappe
from frappe.utils import nowdate

def daily_epc_site_audit():
    """
    Cron Job: Runs Daily to audit missing DPRs and overdue NCRs
    """
    today = nowdate()
    
    # 1. Missing DPR Detection
    active_projects = frappe.get_all(
        "EPC Project",
        filters={"status": ["in", ["Planning", "In Progress"]]},
        fields=["name", "project_name"]
    )
    
    for project in active_projects:
        dpr_count = frappe.db.count("EPC Daily Progress Report", filters={
            "project": project.name,
            "report_date": today
        })
        
        if dpr_count == 0:
            frappe.log_error(
                title=f"⚠️ Missing DPR: {project.project_name}",
                message=f"No Daily Progress Report submitted for Project '{project.project_name}' ({project.name}) on {today}."
            )

    # 2. Overdue NCR Detection
    overdue_ncrs = frappe.get_all(
        "EPC Non Conformance Report",
        filters={
            "select": ["not in", ["Closed", "Resolved"]],
            "target_closure_date": ["<", today]
        },
        fields=["name", "project", "severity", "target_closure_date"]
    )

    for ncr in overdue_ncrs:
        frappe.log_error(
            title=f"🚨 Overdue NCR: {ncr.name} ({ncr.severity})",
            message=f"NCR {ncr.name} for Project {ncr.project} is OVERDUE! Target Date was {ncr.target_closure_date}."
        )