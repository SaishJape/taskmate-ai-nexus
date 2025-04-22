
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card } from "@/components/ui/card";

export default function Team() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Team Overview</h1>
        <p className="text-muted-foreground mt-1">
          Monitor team performance and workload distribution
        </p>
      </div>

      <div className="space-y-6">
        <Card className="card-shadow">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Team Members</h3>
              <div className="flex gap-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search members..."
                    className="pl-8 pr-4 py-1.5 text-sm border rounded-md w-64"
                  />
                  <span className="absolute left-2.5 top-2 text-muted-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </span>
                </div>
                <select className="text-sm border rounded-md px-3 py-1.5">
                  <option>All Departments</option>
                  <option>Engineering</option>
                  <option>Design</option>
                  <option>Marketing</option>
                </select>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-muted-foreground border-b bg-muted/50">
                  <th className="py-3 px-6 font-medium">Name</th>
                  <th className="py-3 px-6 font-medium">Role</th>
                  <th className="py-3 px-6 font-medium">Department</th>
                  <th className="py-3 px-6 font-medium">Current Tasks</th>
                  <th className="py-3 px-6 font-medium">Completion Rate</th>
                  <th className="py-3 px-6 font-medium">Workload Status</th>
                  <th className="py-3 px-6 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/20">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
                        alt="John Doe"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-xs text-muted-foreground">john.doe@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">Frontend Developer</td>
                  <td className="py-4 px-6">Engineering</td>
                  <td className="py-4 px-6">5</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-green-500 h-2.5 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                      <span className="text-sm">92%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="status-badge-green">Optimal</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                      </button>
                      <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/20">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://ui-avatars.com/api/?name=Jane+Smith&background=5C54BA&color=fff"
                        alt="Jane Smith"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">Jane Smith</p>
                        <p className="text-xs text-muted-foreground">jane.smith@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">UI/UX Designer</td>
                  <td className="py-4 px-6">Design</td>
                  <td className="py-4 px-6">3</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-green-500 h-2.5 rounded-full"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                      <span className="text-sm">88%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="status-badge-green">Optimal</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                      </button>
                      <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/20">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://ui-avatars.com/api/?name=Alex+Wong&background=E17A54&color=fff"
                        alt="Alex Wong"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">Alex Wong</p>
                        <p className="text-xs text-muted-foreground">alex.wong@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">Project Manager</td>
                  <td className="py-4 px-6">Management</td>
                  <td className="py-4 px-6">8</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-yellow-500 h-2.5 rounded-full"
                          style={{ width: "76%" }}
                        ></div>
                      </div>
                      <span className="text-sm">76%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="status-badge-yellow">High Load</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                      </button>
                      <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/20">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://ui-avatars.com/api/?name=Sarah+Johnson&background=4C956C&color=fff"
                        alt="Sarah Johnson"
                        className="h-10 w-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-xs text-muted-foreground">sarah.johnson@example.com</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">Backend Developer</td>
                  <td className="py-4 px-6">Engineering</td>
                  <td className="py-4 px-6">7</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-red-500 h-2.5 rounded-full"
                          style={{ width: "65%" }}
                        ></div>
                      </div>
                      <span className="text-sm">65%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="status-badge-red">Overloaded</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex gap-2">
                      <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                      </button>
                      <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 flex justify-center">
            <div className="flex gap-1">
              <button className="px-3 py-1 rounded-md border hover:bg-muted/20">Previous</button>
              <button className="px-3 py-1 rounded-md bg-primary text-white">1</button>
              <button className="px-3 py-1 rounded-md border hover:bg-muted/20">2</button>
              <button className="px-3 py-1 rounded-md border hover:bg-muted/20">3</button>
              <button className="px-3 py-1 rounded-md border hover:bg-muted/20">Next</button>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <Card className="p-6 card-shadow">
            <h3 className="text-lg font-medium mb-4">Department Workload</h3>
            <div className="h-64 bg-secondary rounded-md mb-4 flex items-center justify-center">
              <p className="text-muted-foreground">Workload distribution chart will appear here</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border rounded-md">
                <div className="text-sm text-muted-foreground">Engineering</div>
                <div className="font-medium text-lg">12 tasks</div>
                <div className="mt-1 flex items-center gap-1 text-xs">
                  <span className="text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </span>
                  <span>2 tasks since yesterday</span>
                </div>
              </div>
              <div className="p-3 border rounded-md">
                <div className="text-sm text-muted-foreground">Design</div>
                <div className="font-medium text-lg">8 tasks</div>
                <div className="mt-1 flex items-center gap-1 text-xs">
                  <span className="text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m18 15-6-6-6 6"/>
                    </svg>
                  </span>
                  <span>1 task since yesterday</span>
                </div>
              </div>
              <div className="p-3 border rounded-md">
                <div className="text-sm text-muted-foreground">Marketing</div>
                <div className="font-medium text-lg">5 tasks</div>
                <div className="mt-1 flex items-center gap-1 text-xs">
                  <span className="text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </span>
                  <span>3 tasks since yesterday</span>
                </div>
              </div>
              <div className="p-3 border rounded-md">
                <div className="text-sm text-muted-foreground">Management</div>
                <div className="font-medium text-lg">9 tasks</div>
                <div className="mt-1 flex items-center gap-1 text-xs">
                  <span className="text-amber-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12H2"/>
                    </svg>
                  </span>
                  <span>No change</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 card-shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Team Health</h3>
              <span className="ai-badge">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                AI Powered
              </span>
            </div>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">Burnout Risk</h4>
                  <span className="status-badge-red">High</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  1 team member is showing signs of potential burnout based on workload and recent activity patterns.
                </p>
                <div className="flex items-center gap-2 bg-red-50 p-2 rounded-md">
                  <img
                    src="https://ui-avatars.com/api/?name=Sarah+Johnson&background=4C956C&color=fff"
                    alt="Sarah Johnson"
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="text-sm text-red-700">Sarah Johnson</span>
                </div>
                <button className="mt-2 text-primary text-sm">View Details</button>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">Team Morale</h4>
                  <span className="status-badge-green">Good</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Overall team sentiment is positive based on EOD reports and communication patterns.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">Recommended Actions</h4>
                </div>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                    <span>Redistribute 2 tasks from Sarah Johnson</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                    <span>Schedule 1:1 check-in with Alex Wong</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 text-primary">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                    <span>Acknowledge John Doe's high performance</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
