
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card } from "@/components/ui/card";
import { useUser } from "@/context/UserContext";

export default function EODReports() {
  const { role } = useUser();

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">EOD Reports</h1>
        <p className="text-muted-foreground mt-1">
          Daily status updates and task completion tracking
        </p>
      </div>

      {role === "manager" ? <ManagerEODView /> : <EmployeeEODView />}
    </DashboardLayout>
  );
}

function ManagerEODView() {
  return (
    <div className="space-y-6">
      <Card className="p-6 card-shadow">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Today's EOD Submissions</h3>
          <select className="text-sm border rounded-md p-1.5">
            <option>Apr 22, 2025</option>
            <option>Apr 21, 2025</option>
            <option>Apr 20, 2025</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-muted-foreground">
                <th className="py-3 px-4 font-medium">Team Member</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium">Tasks Completed</th>
                <th className="py-3 px-4 font-medium">Sentiment</th>
                <th className="py-3 px-4 font-medium">Submitted At</th>
                <th className="py-3 px-4 font-medium">Actions</th>
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
                  <span className="status-badge-green">Submitted</span>
                </td>
                <td className="py-3 px-4">4/5</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-1">
                    <span className="text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                    </span>
                    <span className="text-sm">Positive</span>
                  </div>
                </td>
                <td className="py-3 px-4">5:32 PM</td>
                <td className="py-3 px-4">
                  <button className="text-primary text-sm hover:underline">
                    View Details
                  </button>
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
                  <span className="status-badge-red">Missing</span>
                </td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">-</td>
                <td className="py-3 px-4">
                  <button className="text-primary text-sm hover:underline">
                    Send Reminder
                  </button>
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
                  <span className="status-badge-green">Submitted</span>
                </td>
                <td className="py-3 px-4">3/3</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-1">
                    <span className="text-amber-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" x2="16" y1="12" y2="12"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                    </span>
                    <span className="text-sm">Neutral</span>
                  </div>
                </td>
                <td className="py-3 px-4">4:48 PM</td>
                <td className="py-3 px-4">
                  <button className="text-primary text-sm hover:underline">
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <Card className="p-6 card-shadow">
          <h3 className="text-lg font-medium mb-4">Team Sentiment Analysis</h3>
          <div className="h-48 bg-secondary rounded-md mb-4 flex items-center justify-center">
            <p className="text-muted-foreground">Sentiment chart visualization will appear here</p>
          </div>
          <div className="flex justify-between">
            <div className="text-center p-2">
              <div className="text-green-500 font-medium">65%</div>
              <div className="text-xs text-muted-foreground">Positive</div>
            </div>
            <div className="text-center p-2">
              <div className="text-amber-500 font-medium">25%</div>
              <div className="text-xs text-muted-foreground">Neutral</div>
            </div>
            <div className="text-center p-2">
              <div className="text-red-500 font-medium">10%</div>
              <div className="text-xs text-muted-foreground">Negative</div>
            </div>
          </div>
        </Card>

        <Card className="p-6 card-shadow">
          <h3 className="text-lg font-medium mb-4">Submission Rate</h3>
          <div className="h-48 bg-secondary rounded-md mb-4 flex items-center justify-center">
            <p className="text-muted-foreground">Submission trend visualization will appear here</p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Today</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
              <span className="text-sm font-medium">85%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">This Week</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: "92%" }}></div>
              </div>
              <span className="text-sm font-medium">92%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">This Month</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: "89%" }}></div>
              </div>
              <span className="text-sm font-medium">89%</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function EmployeeEODView() {
  return (
    <div className="space-y-6">
      <Card className="p-6 card-shadow">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Today's EOD Report</h3>
          <span className="status-badge-red">Not Submitted</span>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Tasks Completed Today
            </label>
            <div className="space-y-3">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 h-4 w-4 rounded" />
                <span>Complete quarterly report</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 h-4 w-4 rounded" />
                <span>Review client proposal</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 h-4 w-4 rounded" />
                <span>Update marketing materials</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2 h-4 w-4 rounded" />
                <span>Team meeting preparation</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Summary
            </label>
            <div className="relative">
              <textarea
                className="w-full min-h-[120px] rounded-md border border-input p-4"
                placeholder="Provide a summary of your day..."
              ></textarea>
              <div className="absolute right-2 bottom-2 flex gap-2">
                <button className="p-1.5 rounded-md bg-secondary text-muted-foreground hover:bg-secondary/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                </button>
                <button className="p-1.5 rounded-md bg-secondary text-muted-foreground hover:bg-secondary/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/></svg>
                </button>
                <button className="p-1.5 rounded-md bg-secondary text-muted-foreground hover:bg-secondary/80 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-3l-2.5-3z"/><circle cx="12" cy="11" r="3"/></svg>
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Challenges Faced
            </label>
            <textarea
              className="w-full min-h-[80px] rounded-md border border-input p-4"
              placeholder="Any roadblocks or challenges..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Plans for Tomorrow
            </label>
            <textarea
              className="w-full min-h-[80px] rounded-md border border-input p-4"
              placeholder="Key tasks you plan to work on tomorrow..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Mood Rating
            </label>
            <div className="flex gap-4">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><circle cx="12" cy="12" r="10"/><line x1="8" x2="16" y1="12" y2="12"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
              </button>
            </div>
          </div>

          <div className="border-t pt-4 flex gap-3 justify-end">
            <button type="button" className="px-4 py-2 border rounded-md hover:bg-gray-50">
              Save Draft
            </button>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
              Submit EOD
            </button>
          </div>
        </form>
      </Card>

      <Card className="p-6 card-shadow">
        <h3 className="text-lg font-medium mb-4">AI Suggestions</h3>
        <div className="mb-4 ai-suggestion p-4">
          <p className="text-sm">Based on your activities today, consider mentioning the progress on the client proposal review, highlighting the sections that require further attention.</p>
        </div>
        <div className="mb-4 ai-suggestion p-4">
          <p className="text-sm">Your quarterly report seems to be behind schedule. Consider prioritizing it tomorrow and request assistance if needed.</p>
        </div>
        <button className="text-primary text-sm hover:underline flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
          Generate More Insights
        </button>
      </Card>

      <Card className="p-6 card-shadow">
        <h3 className="text-lg font-medium mb-4">Previous Submissions</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50">
            <div>
              <h4 className="font-medium">April 21, 2025</h4>
              <p className="text-sm text-muted-foreground">5 tasks completed</p>
            </div>
            <button className="text-primary text-sm hover:underline">
              View Report
            </button>
          </div>
          <div className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50">
            <div>
              <h4 className="font-medium">April 20, 2025</h4>
              <p className="text-sm text-muted-foreground">4 tasks completed</p>
            </div>
            <button className="text-primary text-sm hover:underline">
              View Report
            </button>
          </div>
          <div className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50">
            <div>
              <h4 className="font-medium">April 19, 2025</h4>
              <p className="text-sm text-muted-foreground">6 tasks completed</p>
            </div>
            <button className="text-primary text-sm hover:underline">
              View Report
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
