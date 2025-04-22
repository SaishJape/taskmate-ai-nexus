
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { RoleToggle } from "@/components/ui/RoleToggle";
import { useUser } from "@/context/UserContext";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  const { role } = useUser();

  return (
    <DashboardLayout>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome to TaskMate AI - Your AI-powered productivity platform
          </p>
        </div>
        <RoleToggle />
      </div>

      {role === "manager" ? <ManagerDashboard /> : <EmployeeDashboard />}
    </DashboardLayout>
  );
}

function ManagerDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="p-4 hover-scale card-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Tasks Assigned Today</p>
              <h3 className="text-2xl font-bold mt-1">24</h3>
            </div>
            <span className="bg-blue-100 text-primary p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
            </span>
          </div>
          <div className="mt-3 flex items-center gap-1">
            <span className="text-green-600 text-xs font-medium">+12%</span>
            <span className="text-xs text-muted-foreground">from yesterday</span>
          </div>
        </Card>

        <Card className="p-4 hover-scale card-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">EOD Submission Rate</p>
              <h3 className="text-2xl font-bold mt-1">86%</h3>
            </div>
            <span className="bg-green-100 text-green-600 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
            </span>
          </div>
          <div className="mt-3 text-xs text-muted-foreground">
            <span className="inline-block bg-yellow-100 text-yellow-700 rounded-full px-2 py-0.5 text-xs">3 pending</span>
          </div>
        </Card>

        <Card className="p-4 hover-scale card-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Team Sentiment</p>
              <h3 className="text-2xl font-bold mt-1">Positive</h3>
            </div>
            <span className="bg-purple-100 text-purple-600 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
            </span>
          </div>
          <div className="mt-3 flex items-center gap-1">
            <span className="ai-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
              AI Analysis
            </span>
          </div>
        </Card>

        <Card className="p-4 hover-scale card-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Burnout Risk</p>
              <h3 className="text-2xl font-bold mt-1">Low</h3>
            </div>
            <span className="bg-red-100 text-red-600 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg>
            </span>
          </div>
          <div className="mt-3 flex items-center">
            <div className="text-xs text-muted-foreground">
              <span className="inline-block bg-red-100 text-red-700 rounded-full px-2 py-0.5 text-xs mr-1">1 at risk</span>
              team member
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        <Card className="col-span-2 p-6 card-shadow">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium">Team Performance Heatmap</h3>
            <div className="flex items-center gap-2">
              <select className="text-xs border rounded-md px-2 py-1">
                <option>This Week</option>
                <option>This Month</option>
                <option>This Quarter</option>
              </select>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center bg-secondary rounded-md">
            <p className="text-muted-foreground">Heatmap visualization will appear here</p>
          </div>
        </Card>

        <Card className="p-6 card-shadow">
          <h3 className="text-lg font-medium mb-4">Alerts</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-md">
              <span className="mt-0.5 text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>
              </span>
              <div>
                <h4 className="text-sm font-medium">Task Deadline Approaching</h4>
                <p className="text-xs text-muted-foreground mt-1">3 tasks due in the next 24 hours</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-md">
              <span className="mt-0.5 text-yellow-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </span>
              <div>
                <h4 className="text-sm font-medium">Potential Resource Conflict</h4>
                <p className="text-xs text-muted-foreground mt-1">Marketing team has overlapping deadlines</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-md">
              <span className="mt-0.5 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>
              </span>
              <div>
                <h4 className="text-sm font-medium">New Feature Available</h4>
                <p className="text-xs text-muted-foreground mt-1">AI Task Prioritization is now available</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function EmployeeDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="p-4 hover-scale card-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Today's Tasks</p>
              <h3 className="text-2xl font-bold mt-1">5</h3>
            </div>
            <span className="bg-blue-100 text-primary p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
            </span>
          </div>
          <div className="mt-3 text-xs text-muted-foreground">
            <span className="inline-block bg-red-100 text-red-700 rounded-full px-2 py-0.5 text-xs">2 high priority</span>
          </div>
        </Card>

        <Card className="p-4 hover-scale card-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">EOD Submission</p>
              <h3 className="text-2xl font-bold mt-1">Pending</h3>
            </div>
            <span className="bg-yellow-100 text-yellow-600 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
            </span>
          </div>
          <div className="mt-3 flex items-center">
            <button className="text-xs text-primary underline">Submit now</button>
          </div>
        </Card>

        <Card className="p-4 hover-scale card-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Productivity Index</p>
              <h3 className="text-2xl font-bold mt-1">85%</h3>
            </div>
            <span className="bg-green-100 text-green-600 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
            </span>
          </div>
          <div className="mt-3 flex items-center gap-1">
            <span className="text-green-600 text-xs font-medium">+5%</span>
            <span className="text-xs text-muted-foreground">from last week</span>
          </div>
        </Card>
      </div>

      <Card className="p-6 card-shadow">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Today's Tasks</h3>
          <button className="px-3 py-1 text-sm bg-primary text-white rounded-md hover:bg-primary/90">+ Add Task</button>
        </div>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="status-badge-red">High</span>
              <div>
                <h4 className="font-medium">Complete quarterly report</h4>
                <p className="text-sm text-muted-foreground">Due today at 5:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              </button>
            </div>
          </div>
          <div className="p-4 border rounded-lg flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="status-badge-red">High</span>
              <div>
                <h4 className="font-medium">Review client proposal</h4>
                <p className="text-sm text-muted-foreground">Due today at 3:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              </button>
            </div>
          </div>
          <div className="p-4 border rounded-lg flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="status-badge-yellow">Medium</span>
              <div>
                <h4 className="font-medium">Update marketing materials</h4>
                <p className="text-sm text-muted-foreground">Due tomorrow at 12:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              </button>
            </div>
          </div>
          <div className="p-4 border rounded-lg flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="status-badge-green">Low</span>
              <div>
                <h4 className="font-medium">Team meeting preparation</h4>
                <p className="text-sm text-muted-foreground">Due tomorrow at 9:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              </button>
            </div>
          </div>
          <div className="p-4 border border-dashed rounded-lg flex items-center justify-center">
            <button className="flex items-center gap-1 text-sm text-muted-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
              Add New Task
            </button>
          </div>
        </div>
      </Card>

      <Card className="p-6 card-shadow">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">AI-Generated Task Insights</h3>
          <span className="ai-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
            AI Powered
          </span>
        </div>
        <div className="ai-suggestion p-4 mb-4">
          Based on your current workload and past performance, consider completing the quarterly report first, as it's high priority and requires focused attention.
        </div>
        <div className="ai-suggestion p-4">
          Your productivity tends to peak between 10 AM and 12 PM. Consider scheduling the client proposal review during this time window for optimal efficiency.
        </div>
      </Card>
    </div>
  );
}
