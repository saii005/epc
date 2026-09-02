<script setup>
import { ref, onMounted } from 'vue'
import { call } from 'frappe-ui'

// User & Auth State
const currentUser = ref({ logged_in: false, full_name: 'Guest User', user: 'Guest' })
const isLoginModalOpen = ref(false)
const loginEmail = ref('')
const loginPassword = ref('')
const loginError = ref('')
const loginLoading = ref(false)

// Overview States
const activeProjectsCount = ref(0)
const pendingBillsCount = ref(0)
const projectsList = ref([])
const billsList = ref([])
const loading = ref(true)

// Bill Modal States
const isBillModalOpen = ref(false)
const selectedBill = ref(null)
const billModalLoading = ref(false)

// Project Modal States
const isProjectModalOpen = ref(false)
const selectedProject = ref(null)
const projectDprList = ref([])
const projectWbsList = ref([])
const projectBoqList = ref([])
const projectNcrList = ref([])
const activeTab = ref('dpr')
const projectModalLoading = ref(false)

// Initialize Session & Data
onMounted(async () => {
  await checkUserSession()
  await loadPortalData()
})

async function checkUserSession() {
  try {
    let user = await call('frappe.auth.get_logged_user')
    if (user && user !== 'Guest') {
      currentUser.value = {
        logged_in: true,
        user: user,
        full_name: user === 'Administrator' ? 'Administrator' : user
      }
    } else {
      currentUser.value = { logged_in: false, full_name: 'Guest User', user: 'Guest' }
    }
  } catch (e) {
    console.error('Session check error:', e)
    currentUser.value = { logged_in: false, full_name: 'Guest User', user: 'Guest' }
  }
}

async function loadPortalData() {
  loading.value = true
  try {
    let response = await call('epc.api.get_client_portal_data')
    if (response) {
      activeProjectsCount.value = response.active_projects || 0
      pendingBillsCount.value = response.pending_bills || 0
      projectsList.value = response.projects_list || []
      billsList.value = response.bills_list || []
    }
  } catch (error) {
    console.error('Failed to fetch client portal data:', error)
  } finally {
    loading.value = false
  }
}

// 🔐 Standard Frappe Login Handler
async function handleLogin() {
  loginError.value = ''
  loginLoading.value = true

  try {
    let res = await call('login', {
      usr: loginEmail.value,
      pwd: loginPassword.value
    })

    if (res) {
      isLoginModalOpen.value = false
      loginEmail.value = ''
      loginPassword.value = ''
      await checkUserSession()
      await loadPortalData()
    }
  } catch (e) {
    console.error('Login error:', e)
    loginError.value = 'Invalid Email or Password. Please try again.'
  } finally {
    loginLoading.value = false
  }
}

// 🚪 Standard Frappe Logout Handler
async function handleLogout() {
  try {
    await call('logout')
    currentUser.value = { logged_in: false, full_name: 'Guest User', user: 'Guest' }
    await checkUserSession()
    await loadPortalData()
  } catch (e) {
    console.error('Logout error:', e)
  }
}

// Bill Details Handler
async function viewBillDetails(billName) {
  isBillModalOpen.value = true
  billModalLoading.value = true
  selectedBill.value = null

  try {
    let response = await call('epc.api.get_bill_details', { bill_name: billName })
    if (response && response.success) {
      selectedBill.value = response.bill
    }
  } catch (error) {
    console.error('Failed to fetch bill details:', error)
  } finally {
    billModalLoading.value = false
  }
}

// Project Details Handler
async function viewProjectDetails(projectName) {
  isProjectModalOpen.value = true
  projectModalLoading.value = true
  selectedProject.value = null
  activeTab.value = 'dpr'

  try {
    let response = await call('epc.api.get_project_details', { project_name: projectName })
    if (response && response.success) {
      selectedProject.value = response.project
      projectDprList.value = response.dpr_list || []
      projectWbsList.value = response.wbs_list || []
      projectBoqList.value = response.boq_list || []
      projectNcrList.value = response.ncr_list || []
    }
  } catch (error) {
    console.error('Failed to fetch project details:', error)
  } finally {
    projectModalLoading.value = false
  }
}

function closeBillModal() {
  isBillModalOpen.value = false
  selectedBill.value = null
}

function closeProjectModal() {
  isProjectModalOpen.value = false
  selectedProject.value = null
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 pb-12">
    <!-- 🌟 TOP NAVBAR -->
    <nav class="bg-gray-900 text-white shadow-md">
      <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <span class="text-2xl">⚡</span>
          <span class="font-bold text-lg tracking-wide">EPC Client Portal</span>
        </div>
        
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2 text-sm bg-gray-800 px-3 py-1.5 rounded-full">
            <span class="w-2.5 h-2.5 rounded-full" :class="currentUser.logged_in ? 'bg-green-400' : 'bg-amber-400'"></span>
            <span class="font-medium text-gray-200">{{ currentUser.full_name }}</span>
          </div>

          <button 
            v-if="!currentUser.logged_in"
            @click="isLoginModalOpen = true"
            class="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md shadow transition-colors"
          >
            Login
          </button>
          <button 
            v-else
            @click="handleLogout"
            class="px-3 py-1.5 bg-gray-800 hover:bg-red-600 text-gray-300 hover:text-white text-xs font-semibold rounded-md transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>

    <!-- Main Container -->
    <div class="p-6 max-w-7xl mx-auto space-y-6 mt-2">
      <!-- Header -->
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Project Overview</h1>
        <p class="text-sm text-gray-600">Real-time progress, daily reports, and financial status of your engineering projects.</p>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="text-sm text-gray-500">
        Loading live data from backend...
      </div>

      <!-- Summary Cards & Tables -->
      <div v-else class="space-y-6">
        <!-- 3 Summary Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 bg-white border rounded-lg shadow-sm">
            <h3 class="text-sm font-medium text-gray-500">Active Projects</h3>
            <p class="text-3xl font-bold text-blue-600 mt-2">{{ activeProjectsCount }}</p>
          </div>
          <div class="p-4 bg-white border rounded-lg shadow-sm">
            <h3 class="text-sm font-medium text-gray-500">Pending Bills (RA)</h3>
            <p class="text-3xl font-bold text-amber-600 mt-2">{{ pendingBillsCount }}</p>
          </div>
          <div class="p-4 bg-white border rounded-lg shadow-sm">
            <h3 class="text-sm font-medium text-gray-500">Site DPR Status</h3>
            <p class="text-xl font-bold text-green-600 mt-2">Updated Today</p>
          </div>
        </div>

        <!-- 1. Running Account Bills Table -->
        <div class="bg-white border rounded-lg shadow-sm overflow-hidden">
          <div class="px-6 py-4 border-b bg-gray-50 flex justify-between items-center">
            <h3 class="text-lg font-medium text-gray-900">Running Account Bills</h3>
            <span class="text-xs text-gray-500">Click row for breakdown</span>
          </div>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bill ID</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posting Date</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Payable</th>
                <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr 
                v-for="bill in billsList" 
                :key="bill.name"
                @click="viewBillDetails(bill.name)"
                class="hover:bg-blue-50 cursor-pointer transition-colors"
              >
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{{ bill.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ bill.project }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ bill.posting_date }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">₹{{ (bill.net_payable || 0).toLocaleString() }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <button 
                    @click.stop="viewBillDetails(bill.name)"
                    class="px-3 py-1 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-md text-xs font-semibold"
                  >
                    View Details
                  </button>
                </td>
              </tr>
              <tr v-if="billsList.length === 0">
                <td colspan="5" class="px-6 py-4 text-center text-sm text-gray-500">No running account bills found.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 2. Recent Active Projects Table -->
        <div class="bg-white border rounded-lg shadow-sm overflow-hidden">
          <div class="px-6 py-4 border-b bg-gray-50 flex justify-between items-center">
            <h3 class="text-lg font-medium text-gray-900">Recent Active Projects</h3>
            <span class="text-xs text-gray-500">Click row for DPR, WBS & Quality</span>
          </div>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project ID</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr 
                v-for="project in projectsList" 
                :key="project.name"
                @click="viewProjectDetails(project.name)"
                class="hover:bg-blue-50 cursor-pointer transition-colors"
              >
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-700">{{ project.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ project.project_name || project.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span class="px-2.5 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {{ project.status || 'Active' }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
                  <button 
                    @click.stop="viewProjectDetails(project.name)"
                    class="px-3 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-md text-xs font-semibold"
                  >
                    View Details
                  </button>
                </td>
              </tr>
              <tr v-if="projectsList.length === 0">
                <td colspan="4" class="px-6 py-4 text-center text-sm text-gray-500">No projects found.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- 🌟 LOGIN MODAL (FIXED BUTTON VISIBILITY) -->
    <div 
      v-if="isLoginModalOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      @click.self="isLoginModalOpen = false"
    >
      <div class="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden p-6 animate-in fade-in zoom-in-95 duration-200">
        <div class="text-center mb-6">
          <span class="text-3xl">🔒</span>
          <h3 class="text-xl font-bold text-gray-900 mt-2">Client Portal Login</h3>
          <p class="text-xs text-gray-500 mt-1">Enter your Frappe credentials to access your EPC projects.</p>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <div>
            <label class="block text-xs font-medium text-gray-700 mb-1">Email / Username</label>
            <input 
              v-model="loginEmail"
              type="text" 
              required
              placeholder="e.g. Administrator"
              class="w-full px-3 py-2 border rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label class="block text-xs font-medium text-gray-700 mb-1">Password</label>
            <input 
              v-model="loginPassword"
              type="password" 
              required
              placeholder="••••••••"
              class="w-full px-3 py-2 border rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div v-if="loginError" class="p-2.5 bg-red-50 border border-red-200 rounded text-xs text-red-600">
            {{ loginError }}
          </div>

          <!-- 👈 High-contrast Bold Button -->
          <button 
            type="submit"
            :disabled="loginLoading"
            class="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-md shadow transition-colors flex justify-center items-center cursor-pointer"
          >
            <span v-if="loginLoading">Signing in...</span>
            <span v-else>Sign In</span>
          </button>
        </form>

        <div class="mt-4 text-center">
          <button @click="isLoginModalOpen = false" class="text-xs text-gray-500 hover:text-gray-800">Cancel</button>
        </div>
      </div>
    </div>

    <!-- 🌟 MODAL 1: BILL BREAKDOWN -->
    <div 
      v-if="isBillModalOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      @click.self="closeBillModal"
    >
      <div class="bg-white rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div class="px-6 py-4 bg-gray-900 text-white flex justify-between items-center">
          <div>
            <h3 class="text-lg font-bold">Bill Breakdown: {{ selectedBill ? selectedBill.name : 'Loading...' }}</h3>
            <p class="text-xs text-gray-300">Project: {{ selectedBill ? selectedBill.project : '' }}</p>
          </div>
          <button @click="closeBillModal" class="text-gray-400 hover:text-white text-2xl font-bold">&times;</button>
        </div>
        <div class="p-6">
          <div v-if="billModalLoading" class="text-center py-8 text-gray-500">Fetching bill details...</div>
          <div v-else-if="selectedBill" class="space-y-6">
            <div class="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg border text-sm">
              <div>
                <span class="text-gray-500">Bill Title:</span>
                <p class="font-semibold text-gray-900">{{ selectedBill.bill_title || 'N/A' }}</p>
              </div>
              <div>
                <span class="text-gray-500">Posting Date:</span>
                <p class="font-semibold text-gray-900">{{ selectedBill.posting_date || 'N/A' }}</p>
              </div>
            </div>
            <div>
              <h4 class="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Financial Summary</h4>
              <div class="border rounded-lg overflow-hidden divide-y divide-gray-200 text-sm">
                <div class="flex justify-between p-3 bg-white">
                  <span class="text-gray-600">Gross Amount</span>
                  <span class="font-medium text-gray-900">₹{{ (selectedBill.gross_amount || 0).toLocaleString() }}</span>
                </div>
                <div class="flex justify-between p-3 bg-white">
                  <span class="text-gray-600">Retention ({{ selectedBill.retention_percent || 0 }}%)</span>
                  <span class="text-red-500 font-medium">- ₹{{ (selectedBill.retention_amount || 0).toLocaleString() }}</span>
                </div>
                <div class="flex justify-between p-3 bg-white">
                  <span class="text-gray-600">Tax / GST ({{ selectedBill.tax_percent || 0 }}%)</span>
                  <span class="text-blue-600 font-medium">+ ₹{{ (selectedBill.tax_amount || 0).toLocaleString() }}</span>
                </div>
                <div class="flex justify-between p-4 bg-gray-100 font-bold text-base">
                  <span class="text-gray-900">Net Payable Amount</span>
                  <span class="text-green-700">₹{{ (selectedBill.net_payable || 0).toLocaleString() }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="px-6 py-3 bg-gray-50 border-t flex justify-end">
          <button @click="closeBillModal" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">Close</button>
        </div>
      </div>
    </div>

    <!-- 🌟 MODAL 2: EPC PROJECT 360 DASHBOARD -->
    <div 
      v-if="isProjectModalOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      @click.self="closeProjectModal"
    >
      <div class="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div class="px-6 py-4 bg-gray-900 text-white flex justify-between items-center flex-shrink-0">
          <div>
            <h3 class="text-xl font-bold">{{ selectedProject ? (selectedProject.project_name || selectedProject.name) : 'Loading...' }}</h3>
            <p class="text-xs text-gray-300">Project ID: {{ selectedProject ? selectedProject.name : '' }}</p>
          </div>
          <button @click="closeProjectModal" class="text-gray-400 hover:text-white text-2xl font-bold">&times;</button>
        </div>

        <div class="flex border-b bg-gray-50 px-6 gap-6 text-sm font-semibold flex-shrink-0">
          <button 
            @click="activeTab = 'dpr'" 
            :class="activeTab === 'dpr' ? 'border-b-2 border-blue-600 text-blue-700 py-3' : 'text-gray-500 hover:text-gray-900 py-3'"
          >
            📋 Site DPR ({{ projectDprList.length }})
          </button>
          <button 
            @click="activeTab = 'wbs'" 
            :class="activeTab === 'wbs' ? 'border-b-2 border-blue-600 text-blue-700 py-3' : 'text-gray-500 hover:text-gray-900 py-3'"
          >
            🧱 WBS Milestones ({{ projectWbsList.length }})
          </button>
          <button 
            @click="activeTab = 'boq'" 
            :class="activeTab === 'boq' ? 'border-b-2 border-blue-600 text-blue-700 py-3' : 'text-gray-500 hover:text-gray-900 py-3'"
          >
            📑 BOQ Estimates ({{ projectBoqList.length }})
          </button>
          <button 
            @click="activeTab = 'ncr'" 
            :class="activeTab === 'ncr' ? 'border-b-2 border-blue-600 text-blue-700 py-3' : 'text-gray-500 hover:text-gray-900 py-3'"
          >
            ⚠️ Quality & NCR ({{ projectNcrList.length }})
          </button>
        </div>

        <div class="p-6 overflow-y-auto flex-1">
          <div v-if="projectModalLoading" class="text-center py-12 text-gray-500">
            Fetching project details...
          </div>

          <div v-else-if="selectedProject" class="space-y-6">
            <!-- TAB 1: DPR -->
            <div v-if="activeTab === 'dpr'" class="space-y-4">
              <div v-if="projectDprList.length > 0" class="space-y-3">
                <div 
                  v-for="dpr in projectDprList" 
                  :key="dpr.name"
                  class="p-4 border rounded-lg bg-blue-50/40 border-blue-100 shadow-sm"
                >
                  <div class="flex justify-between items-center mb-3">
                    <span class="font-bold text-gray-900 text-base">{{ dpr.name }}</span>
                    <span class="text-xs bg-blue-100 text-blue-900 font-semibold px-2.5 py-1 rounded-full">{{ dpr.report_date }}</span>
                  </div>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs bg-white p-3 rounded-md border">
                    <div>
                      <span class="text-gray-500">Weather:</span>
                      <p class="font-semibold text-gray-800">{{ dpr.weather || 'Normal' }}</p>
                    </div>
                    <div>
                      <span class="text-gray-500">Total Manpower:</span>
                      <p class="font-bold text-blue-700 text-sm">{{ dpr.total_staff || 0 }} Persons</p>
                    </div>
                    <div>
                      <span class="text-gray-500">Skilled / Unskilled:</span>
                      <p class="font-semibold text-gray-800">{{ dpr.skilled_labor || 0 }} / {{ dpr.unskilled_labor || 0 }}</p>
                    </div>
                    <div>
                      <span class="text-gray-500">Safety Incident:</span>
                      <p class="font-semibold" :class="dpr.safety_incident ? 'text-red-600' : 'text-green-600'">
                        {{ dpr.safety_incident ? '⚠️ Yes' : '✅ None' }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="text-center py-8 text-gray-500 border-2 border-dashed rounded-lg">
                No Daily Progress Reports recorded for this project yet.
              </div>
            </div>

            <!-- TAB 2: WBS -->
            <div v-if="activeTab === 'wbs'" class="space-y-4">
              <div v-if="projectWbsList.length > 0" class="space-y-3">
                <div 
                  v-for="wbs in projectWbsList" 
                  :key="wbs.name"
                  class="p-4 border rounded-lg bg-white shadow-sm"
                >
                  <div class="flex justify-between items-start mb-2">
                    <div>
                      <span class="text-xs font-bold text-blue-600 uppercase">{{ wbs.discipline || 'General' }} ({{ wbs.wbs_code }})</span>
                      <h4 class="font-bold text-gray-900 text-base">{{ wbs.activity_name }}</h4>
                    </div>
                    <span class="px-2 py-1 text-xs font-semibold rounded bg-blue-100 text-blue-800">{{ wbs.status }}</span>
                  </div>
                  <div class="mt-3">
                    <div class="flex justify-between text-xs text-gray-600 mb-1">
                      <span>Progress</span>
                      <span class="font-bold text-gray-900">{{ wbs.progress_percent || 0 }}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                      <div class="bg-blue-600 h-2.5 rounded-full" :style="{ width: (wbs.progress_percent || 0) + '%' }"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else class="text-center py-8 text-gray-500 border-2 border-dashed rounded-lg">
                No WBS elements configured for this project.
              </div>
            </div>

            <!-- TAB 3: BOQ -->
            <div v-if="activeTab === 'boq'" class="space-y-4">
              <div v-if="projectBoqList.length > 0" class="space-y-3">
                <div 
                  v-for="boq in projectBoqList" 
                  :key="boq.name"
                  class="p-4 border rounded-lg bg-white shadow-sm flex justify-between items-center"
                >
                  <div>
                    <h4 class="font-bold text-gray-900 text-base">{{ boq.boq_title }}</h4>
                    <p class="text-xs text-gray-500">{{ boq.name }} | Rev: {{ boq.revision_no }}</p>
                  </div>
                  <div class="text-right">
                    <span class="text-xs text-gray-500 block">Total Estimate</span>
                    <span class="text-lg font-bold text-blue-700">₹{{ (boq.total_amount || 0).toLocaleString() }}</span>
                  </div>
                </div>
              </div>
              <div v-else class="text-center py-8 text-gray-500 border-2 border-dashed rounded-lg">
                No BOQ estimates available.
              </div>
            </div>

            <!-- TAB 4: NCR -->
            <div v-if="activeTab === 'ncr'" class="space-y-4">
              <div v-if="projectNcrList.length > 0" class="space-y-3">
                <div 
                  v-for="ncr in projectNcrList" 
                  :key="ncr.name"
                  class="p-4 border border-red-200 rounded-lg bg-red-50/40 shadow-sm"
                >
                  <div class="flex justify-between items-start">
                    <div>
                      <span class="text-xs font-bold text-red-600 uppercase">{{ ncr.severity || 'NCR' }}</span>
                      <h4 class="font-bold text-gray-900 text-base">{{ ncr.name }}</h4>
                      <p class="text-xs text-gray-600 mt-1">Target Closure: {{ ncr.target_closure_date || 'Pending' }}</p>
                    </div>
                    <span class="px-2 py-1 text-xs font-semibold rounded bg-amber-100 text-amber-800">{{ ncr.select || 'Active' }}</span>
                  </div>
                </div>
              </div>
              <div v-else class="text-center py-8 text-gray-500 border-2 border-dashed rounded-lg">
                No active Non-Conformance Reports. Site quality standards are met! 🎉
              </div>
            </div>

          </div>
        </div>

        <div class="px-6 py-3 bg-gray-50 border-t flex justify-end flex-shrink-0">
          <button @click="closeProjectModal" class="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">Close</button>
        </div>
      </div>
    </div>

  </div>
</template>