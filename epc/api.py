import frappe
from frappe.auth import LoginManager

@frappe.whitelist(allow_guest=True)
def get_current_user_info():
    """
    Check Current Logged-in User Session
    """
    user = frappe.session.user
    if user == "Guest":
        return {
            "logged_in": False,
            "user": "Guest",
            "full_name": "Guest User"
        }
    
    return {
        "logged_in": True,
        "user": user,
        "full_name": frappe.utils.get_fullname(user),
        "roles": frappe.get_roles(user)
    }


@frappe.whitelist(allow_guest=True)
def client_login(usr, pwd):
    """
    Authenticate User Credentials & Start Session
    """
    try:
        login_manager = LoginManager()
        login_manager.authenticate(user=usr, pwd=pwd)
        login_manager.post_login()
        
        return {
            "success": True,
            "user": frappe.session.user,
            "full_name": frappe.utils.get_fullname(frappe.session.user)
        }
    except frappe.AuthenticationError:
        return {"success": False, "error": "Invalid Email or Password"}
    except Exception as e:
        return {"success": False, "error": str(e)}


@frappe.whitelist(allow_guest=True)
def client_logout():
    """
    End User Session
    """
    try:
        frappe.local.login_manager.logout()
        return {"success": True}
    except Exception as e:
        return {"success": False, "error": str(e)}


@frappe.whitelist(allow_guest=True)
def get_client_portal_data():
    """
    Overview Data - EPC Projects & Bills
    """
    try:
        # 1. Project Count
        active_projects = frappe.db.count("EPC Project")
        pending_bills = frappe.db.count("EPC Running Account Bill")
        
        # 2. EPC Projects List
        projects_list = frappe.get_all(
            "EPC Project",
            fields=[
                "name", 
                "project_name", 
                "business_unit", 
                "status", 
                "contract_value", 
                "site_location", 
                "start_date", 
                "expected_end_date"
            ],
            order_by="creation desc",
            limit_page_length=10
        )

        # 3. Running Account Bills List
        bills_list = frappe.get_all(
            "EPC Running Account Bill",
            fields=["name", "project", "bill_title", "posting_date", "net_payable", "docstatus"],
            order_by="creation desc",
            limit_page_length=10
        )

        return {
            "active_projects": active_projects,
            "pending_bills": pending_bills,
            "projects_list": projects_list,
            "bills_list": bills_list
        }
    except Exception as e:
        frappe.log_error(title="Client Portal API Error", message=frappe.get_traceback())
        return {"error": str(e), "active_projects": 0, "pending_bills": 0, "projects_list": [], "bills_list": []}


@frappe.whitelist(allow_guest=True)
def get_bill_details(bill_name):
    """Specific Bill Breakdown"""
    try:
        if not bill_name:
            return {"error": "Bill Name is required"}
        doc = frappe.get_doc("EPC Running Account Bill", bill_name)
        return {"success": True, "bill": doc.as_dict()}
    except Exception as e:
        return {"success": False, "error": str(e)}


@frappe.whitelist(allow_guest=True)
def get_project_details(project_name):
    """
    Project 360 View: EPC Project Info + DPR + WBS + BOQ + NCR
    """
    try:
        if not project_name:
            return {"error": "Project Name is required"}
            
        project_doc = frappe.get_doc("EPC Project", project_name).as_dict()

        dpr_list = frappe.get_all(
            "EPC Daily Progress Report",
            fields=["name", "report_date", "weather", "prepared_by", "total_staff", "skilled_labor", "unskilled_labor", "safety_incident"],
            filters={"project": project_name},
            order_by="report_date desc",
            limit_page_length=10
        )

        wbs_list = frappe.get_all(
            "EPC WBS Element",
            fields=["name", "wbs_code", "activity_name", "discipline", "status", "progress_percent", "start_date", "end_date"],
            filters={"project": project_name},
            order_by="creation asc"
        )

        boq_list = frappe.get_all(
            "EPC BOQ",
            fields=["name", "boq_title", "total_amount", "revision_no"],
            filters={"project": project_name}
        )

        ncr_list = frappe.get_all(
            "EPC Non Conformance Report",
            fields=["name", "wbs_element", "severity", "select", "raised_date", "target_closure_date"],
            filters={"project": project_name}
        )

        return {
            "success": True,
            "project": project_doc,
            "dpr_list": dpr_list,
            "wbs_list": wbs_list,
            "boq_list": boq_list,
            "ncr_list": ncr_list
        }
    except Exception as e:
        frappe.log_error(title="Get Project Details Error", message=frappe.get_traceback())
        return {"success": False, "error": str(e)}


@frappe.whitelist(allow_guest=True)
def get_project_evm_analytics(project_name):
    """
    🌟 S-Curve and EVM (Earned Value Management) Health Analytics API
    """
    try:
        if not project_name:
            return {"error": "Project Name is required"}
            
        doc = frappe.get_doc("EPC Project", project_name)
        return {
            "success": True,
            "metrics": doc.get_evm_analytics()
        }
    except Exception as e:
        frappe.log_error(title="EVM Analytics Error", message=frappe.get_traceback())
        return {"success": False, "error": str(e)}