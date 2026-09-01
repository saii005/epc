<script setup>
import { ref, onMounted } from 'vue'
import { call } from 'frappe-ui'

const activeProjectsCount = ref(0)
const pendingBillsCount = ref(0)
const projectsList = ref([])
const billsList = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    let response = await call('epc.api.get_client_portal_data')
    console.log('Backend Data:', response) // Debugging-kaga browser console-la print aagum
    
    if (response) {
      activeProjectsCount.value = response.active_projects || 0
      pendingBillsCount.value = response.pending_bills || 0
      
      // 👇 Python key: projects_list and bills_list
      projectsList.value = response.projects_list || []
      billsList.value = response.bills_list || []
    }
  } catch (error) {
    console.error('Failed to fetch client portal data:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="p-6 max-w-7xl mx-auto space-y-6">
    <!-- Header -->
    <div>
      <h1 class="text-2xl font-bold text-gray-900">Project Overview</h1>
      <p class="text-sm text-gray-600">Here is the real-time progress and summary of your engineering and construction projects.</p>
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
        <div class="px-6 py-4 border-b bg-gray-50">
          <h3 class="text-lg font-medium text-gray-900">Running Account Bills</h3>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bill ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posting Date</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Payable</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="bill in billsList" :key="bill.name">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ bill.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ bill.project }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ bill.posting_date }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">₹{{ bill.net_payable }}</td>
            </tr>
            <tr v-if="billsList.length === 0">
              <td colspan="4" class="px-6 py-4 text-center text-sm text-gray-500">No running account bills found.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 2. Recent Active Projects Table -->
      <div class="bg-white border rounded-lg shadow-sm overflow-hidden">
        <div class="px-6 py-4 border-b bg-gray-50">
          <h3 class="text-lg font-medium text-gray-900">Recent Active Projects</h3>
        </div>
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Name</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="project in projectsList" :key="project.name">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ project.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ project.project_name || '-' }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{ project.status }}
                </span>
              </td>
            </tr>
            <tr v-if="projectsList.length === 0">
              <td colspan="3" class="px-6 py-4 text-center text-sm text-gray-500">No projects found.</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>