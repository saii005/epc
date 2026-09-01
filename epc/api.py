import frappe

@frappe.whitelist(allow_guest=True)
def get_client_portal_data():
    """
    Client Portal Vue component-kaga real-time data return pannum API
    """
    try:
        # 1. Counts
        active_projects = frappe.db.count("Project", filters={"status": "Open"})
        pending_bills = frappe.db.count("EPC Running Account Bill")
        
        # 2. Lists (Oru vela table display panna theva patta)
        projects_list = frappe.get_all(
            "Project",
            fields=["name", "project_name", "status", "expected_end_date"],
            filters={"status": "Open"},
            order_by="creation desc",
            limit_page_length=5
        )

        bills_list = frappe.get_all(
            "EPC Running Account Bill",
            fields=["name", "project", "bill_title", "posting_date", "net_payable"],
            order_by="creation desc",
            limit_page_length=5
        )

        return {
            "active_projects": active_projects,
            "pending_bills": pending_bills,
            "projects_list": projects_list,
            "bills_list": bills_list
        }
        
    except Exception as e:
        frappe.log_error(title="Client Portal API Error", message=frappe.get_traceback())
        return {
            "error": str(e),
            "active_projects": 0,
            "pending_bills": 0,
            "projects_list": [],
            "bills_list": []
        }