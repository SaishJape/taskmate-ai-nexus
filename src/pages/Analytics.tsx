
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card } from "@/components/ui/card";

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground mt-1">
          Performance metrics and productivity insights
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-4 hover-scale card-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Tasks Completed (Week)
                </p>
                <h3 className="text-2xl font-bold mt-1">27/35</h3>
              </div>
              <span className="bg-blue-100 text-primary p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              </span>
            </div>
            <div className="mt-3 flex items-center gap-1">
              <span className="text-green-600 text-xs font-medium">77%</span>
              <span className="text-xs text-muted-foreground">completion rate</span>
            </div>
          </Card>

          <Card className="p-4 hover-scale card-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Avg. Task Time
                </p>
                <h3 className="text-2xl font-bold mt-1">2.4 hrs</h3>
              </div>
              <span className="bg-amber-100 text-amber-600 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </span>
            </div>
            <div className="mt-3 flex items-center gap-1">
              <span className="text-green-600 text-xs font-medium">-15%</span>
              <span className="text-xs text-muted-foreground">from last month</span>
            </div>
          </Card>

          <Card className="p-4 hover-scale card-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  EOD Submission Rate
                </p>
                <h3 className="text-2xl font-bold mt-1">91%</h3>
              </div>
              <span className="bg-green-100 text-green-600 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
              </span>
            </div>
            <div className="mt-3 flex items-center gap-1">
              <span className="text-green-600 text-xs font-medium">+4%</span>
              <span className="text-xs text-muted-foreground">from last month</span>
            </div>
          </Card>

          <Card className="p-4 hover-scale card-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Productivity Score
                </p>
                <h3 className="text-2xl font-bold mt-1">83/100</h3>
              </div>
              <span className="bg-purple-100 text-purple-600 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>
              </span>
            </div>
            <div className="mt-3 flex items-center gap-1">
              <span className="text-green-600 text-xs font-medium">+7%</span>
              <span className="text-xs text-muted-foreground">above team average</span>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 card-shadow">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">Task Completion Trend</h3>
              <select className="text-sm border rounded-md p-1.5">
                <option>Last 30 Days</option>
                <option>Last Quarter</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-64 bg-secondary rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Task completion trend chart will appear here</p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="font-medium">127</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">In Progress</p>
                <p className="font-medium">24</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Overdue</p>
                <p className="font-medium">9</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 card-shadow">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">Sentiment Analysis</h3>
              <select className="text-sm border rounded-md p-1.5">
                <option>Last 30 Days</option>
                <option>Last Quarter</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-64 bg-secondary rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Sentiment analysis chart will appear here</p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-muted-foreground">Positive</p>
                <p className="font-medium text-green-600">67%</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Neutral</p>
                <p className="font-medium text-amber-600">24%</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Negative</p>
                <p className="font-medium text-red-600">9%</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="p-6 card-shadow">
            <h3 className="text-lg font-medium mb-4">Team Performance</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Engineering</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Design</span>
                  <span className="text-sm font-medium">87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "87%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Marketing</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Sales</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Customer Support</span>
                  <span className="text-sm font-medium">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 card-shadow">
            <h3 className="text-lg font-medium mb-4">Task Distribution</h3>
            <div className="h-64 bg-secondary rounded-md flex items-center justify-center mb-4">
              <p className="text-muted-foreground">Task distribution chart will appear here</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>High Priority (32%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span>Medium Priority (45%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span>Low Priority (23%)</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 card-shadow">
            <h3 className="text-lg font-medium mb-4">Consistency Score</h3>
            <div className="h-64 bg-secondary rounded-md flex items-center justify-center mb-4">
              <p className="text-muted-foreground">Consistency trend chart will appear here</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">89%</div>
                <div className="text-sm text-muted-foreground">Overall Score</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-sm">Task Timing: 92%</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span className="text-sm">EOD Submissions: 95%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <span className="text-sm">Work Hours: 81%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 card-shadow">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium">Employee Scorecard</h3>
            <select className="text-sm border rounded-md p-1.5">
              <option>All Departments</option>
              <option>Engineering</option>
              <option>Design</option>
              <option>Marketing</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="py-3 px-4 font-medium">Employee</th>
                  <th className="py-3 px-4 font-medium">Task Completion</th>
                  <th className="py-3 px-4 font-medium">EOD Streak</th>
                  <th className="py-3 px-4 font-medium">Focus Score</th>
                  <th className="py-3 px-4 font-medium">Efficiency</th>
                  <th className="py-3 px-4 font-medium">Overall</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
                        alt="John Doe"
                        className="h-8 w-8 rounded-full"
                      />
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-xs text-muted-foreground">
                          Frontend Developer
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                      <span className="text-sm">92%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">15 days</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "88%" }}
                        ></div>
                      </div>
                      <span className="text-sm">88%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                      <span className="text-sm">95%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-bold text-green-600">A+</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://ui-avatars.com/api/?name=Jane+Smith&background=5C54BA&color=fff"
                        alt="Jane Smith"
                        className="h-8 w-8 rounded-full"
                      />
                      <div>
                        <p className="font-medium">Jane Smith</p>
                        <p className="text-xs text-muted-foreground">
                          UI/UX Designer
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                      <span className="text-sm">85%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">7 days</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "93%" }}
                        ></div>
                      </div>
                      <span className="text-sm">93%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: "87%" }}
                        ></div>
                      </div>
                      <span className="text-sm">87%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-bold text-green-600">A</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://ui-avatars.com/api/?name=Alex+Wong&background=E17A54&color=fff"
                        alt="Alex Wong"
                        className="h-8 w-8 rounded-full"
                      />
                      <div>
                        <p className="font-medium">Alex Wong</p>
                        <p className="text-xs text-muted-foreground">
                          Project Manager
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-amber-500 h-2 rounded-full"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                      <span className="text-sm">78%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">10 days</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-amber-500 h-2 rounded-full"
                          style={{ width: "76%" }}
                        ></div>
                      </div>
                      <span className="text-sm">76%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-amber-500 h-2 rounded-full"
                          style={{ width: "79%" }}
                        ></div>
                      </div>
                      <span className="text-sm">79%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="font-bold text-amber-600">B</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
