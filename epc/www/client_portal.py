import frappe

no_cache = 1

def get_context(context):
    # 1. Counts
    context.active_projects_count = frappe.db.count("Project", filters={"status": "Open"})
    context.pending_bills_count = frappe.db.count("EPC Running Account Bill")

    # 2. Projects List
    context.projects_list = frappe.get_all(
        "Project",
        fields=["name", "project_name", "status", "expected_end_date"],
        filters={"status": "Open"},
        order_by="creation desc"
    )

    # 3. Running Account Bills List (Without docstatus restriction)
    context.bills_list = frappe.get_all(
        "EPC Running Account Bill",
        fields=["name", "project", "bill_title", "posting_date", "net_payable"],
        order_by="creation desc"
    )

    return context