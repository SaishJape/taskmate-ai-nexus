
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card } from "@/components/ui/card";
import { useUser } from "@/context/UserContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export default function EODReports() {
  const { role } = useUser();
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="font-extrabold text-4xl tracking-wide text-[#1EAEDB] font-sans mb-1" style={{ letterSpacing: "-0.02em" }}>
          EOD Reports
        </h1>
        <p className="text-gray-600 mt-1 text-[1.15rem] font-medium">
          Daily status updates and task completion tracking
        </p>
      </div>

      {role === "manager" ? <ManagerEODView currentDate={currentDate} setCurrentDate={setCurrentDate} /> : <EmployeeEODView />}
    </DashboardLayout>
  );
}

function ManagerEODView({ currentDate, setCurrentDate }: { currentDate: string; setCurrentDate: (date: string) => void }) {
  const [sentReminder, setSentReminder] = useState<string[]>([]);
  
  const handleReminder = (employeeId: string) => {
    setSentReminder(prev => [...prev, employeeId]);
    toast({
      title: "Reminder sent",
      description: "The team member has been notified to submit their EOD report."
    });
  };
  
  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentDate(e.target.value);
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 card-shadow">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-[#1EAEDB]">Today's EOD Submissions</h3>
          <select 
            className="text-base border rounded-md p-2 bg-white focus:ring-2 focus:ring-[#1EAEDB] focus:border-[#1EAEDB]"
            value={currentDate}
            onChange={handleDateChange}
          >
            <option value="2025-04-22">Apr 22, 2025</option>
            <option value="2025-04-21">Apr 21, 2025</option>
            <option value="2025-04-20">Apr 20, 2025</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b text-left text-[#1EAEDB]">
                <th className="py-3 px-4 font-bold">Team Member</th>
                <th className="py-3 px-4 font-bold">Status</th>
                <th className="py-3 px-4 font-bold">Tasks Completed</th>
                <th className="py-3 px-4 font-bold">Sentiment</th>
                <th className="py-3 px-4 font-bold">Submitted At</th>
                <th className="py-3 px-4 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
                      alt="John Doe"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-base">John Doe</p>
                      <p className="text-sm text-gray-500">
                        Frontend Developer
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-bold rounded-full">Submitted</span>
                </td>
                <td className="py-3 px-4 text-base">4/5</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-1">
                    <span className="text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                    </span>
                    <span className="text-base">Positive</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-base">5:32 PM</td>
                <td className="py-3 px-4">
                  <Button className="text-[#1EAEDB] text-base hover:underline bg-transparent hover:bg-blue-50">
                    View Details
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://ui-avatars.com/api/?name=Jane+Smith&background=5C54BA&color=fff"
                      alt="Jane Smith"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-base">Jane Smith</p>
                      <p className="text-sm text-gray-500">
                        UI/UX Designer
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-bold rounded-full">Missing</span>
                </td>
                <td className="py-3 px-4 text-base">-</td>
                <td className="py-3 px-4 text-base">-</td>
                <td className="py-3 px-4 text-base">-</td>
                <td className="py-3 px-4">
                  <Button 
                    className={`text-base ${sentReminder.includes('jane') 
                      ? 'text-gray-400 hover:bg-transparent cursor-default' 
                      : 'text-[#1EAEDB] hover:underline hover:bg-blue-50'} bg-transparent`}
                    onClick={() => handleReminder('jane')}
                    disabled={sentReminder.includes('jane')}
                  >
                    {sentReminder.includes('jane') ? 'Reminder Sent' : 'Send Reminder'}
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://ui-avatars.com/api/?name=Alex+Wong&background=E17A54&color=fff"
                      alt="Alex Wong"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-base">Alex Wong</p>
                      <p className="text-sm text-gray-500">
                        Project Manager
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-bold rounded-full">Submitted</span>
                </td>
                <td className="py-3 px-4 text-base">3/3</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-1">
                    <span className="text-amber-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="8" x2="16" y1="12" y2="12"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
                    </span>
                    <span className="text-base">Neutral</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-base">4:48 PM</td>
                <td className="py-3 px-4">
                  <Button className="text-[#1EAEDB] text-base hover:underline bg-transparent hover:bg-blue-50">
                    View Details
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <Card className="p-6 card-shadow">
          <h3 className="text-xl font-bold text-[#1EAEDB] mb-4">Team Sentiment Analysis</h3>
          <div className="h-48 bg-[#F1F0FB] rounded-md mb-4 flex items-center justify-center">
            <p className="text-gray-600 text-base">Sentiment chart visualization will appear here</p>
          </div>
          <div className="flex justify-between">
            <div className="text-center p-2">
              <div className="text-green-500 font-medium text-xl">65%</div>
              <div className="text-sm text-gray-600">Positive</div>
            </div>
            <div className="text-center p-2">
              <div className="text-amber-500 font-medium text-xl">25%</div>
              <div className="text-sm text-gray-600">Neutral</div>
            </div>
            <div className="text-center p-2">
              <div className="text-red-500 font-medium text-xl">10%</div>
              <div className="text-sm text-gray-600">Negative</div>
            </div>
          </div>
        </Card>

        <Card className="p-6 card-shadow">
          <h3 className="text-xl font-bold text-[#1EAEDB] mb-4">Submission Rate</h3>
          <div className="h-48 bg-[#F1F0FB] rounded-md mb-4 flex items-center justify-center">
            <p className="text-gray-600 text-base">Submission trend visualization will appear here</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-base font-medium">Today</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-3">
                <div className="bg-[#1EAEDB] h-3 rounded-full" style={{ width: "85%" }}></div>
              </div>
              <span className="text-base font-medium">85%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base font-medium">This Week</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-3">
                <div className="bg-[#1EAEDB] h-3 rounded-full" style={{ width: "92%" }}></div>
              </div>
              <span className="text-base font-medium">92%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base font-medium">This Month</span>
              <div className="w-2/3 bg-gray-200 rounded-full h-3">
                <div className="bg-[#1EAEDB] h-3 rounded-full" style={{ width: "89%" }}></div>
              </div>
              <span className="text-base font-medium">89%</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

function EmployeeEODView() {
  const [submitting, setSubmitting] = useState(false);
  const [taskStatus, setTaskStatus] = useState({
    task1: false,
    task2: false,
    task3: false,
    task4: false
  });
  const [summary, setSummary] = useState('');
  const [challenges, setChallenges] = useState('');
  const [plans, setPlans] = useState('');
  const [mood, setMood] = useState<'negative' | 'neutral' | 'positive' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "EOD Report Submitted",
        description: "Your daily report has been successfully submitted."
      });
      setSubmitting(false);
    }, 1500);
  };

  const handleSaveDraft = () => {
    toast({
      title: "Draft Saved",
      description: "Your EOD report draft has been saved."
    });
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 card-shadow">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-[#1EAEDB]">Today's EOD Report</h3>
          <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-bold rounded-full">Not Submitted</span>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-base font-medium mb-2 text-gray-700">
              Tasks Completed Today
            </label>
            <div className="space-y-3 bg-white p-4 rounded-md border">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="task1"
                  className="mr-3 h-5 w-5 rounded accent-[#1EAEDB]" 
                  checked={taskStatus.task1}
                  onChange={() => setTaskStatus(prev => ({ ...prev, task1: !prev.task1 }))}
                />
                <label htmlFor="task1" className="text-base">Complete quarterly report</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="task2"
                  className="mr-3 h-5 w-5 rounded accent-[#1EAEDB]" 
                  checked={taskStatus.task2}
                  onChange={() => setTaskStatus(prev => ({ ...prev, task2: !prev.task2 }))}
                />
                <label htmlFor="task2" className="text-base">Review client proposal</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="task3"
                  className="mr-3 h-5 w-5 rounded accent-[#1EAEDB]" 
                  checked={taskStatus.task3}
                  onChange={() => setTaskStatus(prev => ({ ...prev, task3: !prev.task3 }))}
                />
                <label htmlFor="task3" className="text-base">Update marketing materials</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="task4"
                  className="mr-3 h-5 w-5 rounded accent-[#1EAEDB]" 
                  checked={taskStatus.task4}
                  onChange={() => setTaskStatus(prev => ({ ...prev, task4: !prev.task4 }))}
                />
                <label htmlFor="task4" className="text-base">Team meeting preparation</label>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-base font-medium mb-2 text-gray-700">
              Summary
            </label>
            <div className="relative">
              <textarea
                className="w-full min-h-[140px] rounded-md border p-4 text-base focus:ring-2 focus:ring-[#1EAEDB] focus:border-[#1EAEDB]"
                placeholder="Provide a summary of your day..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              ></textarea>
              <div className="absolute right-2 bottom-2 flex gap-2">
                <button 
                  type="button"
                  className="p-2 rounded-md bg-[#F1F0FB] text-[#1EAEDB] hover:bg-[#e0dff5] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                </button>
                <button 
                  type="button"
                  className="p-2 rounded-md bg-[#F1F0FB] text-[#1EAEDB] hover:bg-[#e0dff5] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/></svg>
                </button>
                <button 
                  type="button"
                  className="p-2 rounded-md bg-[#F1F0FB] text-[#1EAEDB] hover:bg-[#e0dff5] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-3l-2.5-3z"/><circle cx="12" cy="11" r="3"/></svg>
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-base font-medium mb-2 text-gray-700">
              Challenges Faced
            </label>
            <textarea
              className="w-full min-h-[100px] rounded-md border p-4 text-base focus:ring-2 focus:ring-[#1EAEDB] focus:border-[#1EAEDB]"
              placeholder="Any roadblocks or challenges..."
              value={challenges}
              onChange={(e) => setChallenges(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label className="block text-base font-medium mb-2 text-gray-700">
              Plans for Tomorrow
            </label>
            <textarea
              className="w-full min-h-[100px] rounded-md border p-4 text-base focus:ring-2 focus:ring-[#1EAEDB] focus:border-[#1EAEDB]"
              placeholder="Key tasks you plan to work on tomorrow..."
              value={plans}
              onChange={(e) => setPlans(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label className="block text-base font-medium mb-2 text-gray-700">
              Mood Rating
            </label>
            <div className="flex gap-4">
              <button 
                type="button"
                className={`p-2 rounded-full ${mood === 'negative' ? 'bg-red-100' : 'hover:bg-gray-100'}`}
                onClick={() => setMood('negative')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
              </button>
              <button 
                type="button"
                className={`p-2 rounded-full ${mood === 'neutral' ? 'bg-amber-100' : 'hover:bg-gray-100'}`}
                onClick={() => setMood('neutral')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><circle cx="12" cy="12" r="10"/><line x1="8" x2="16" y1="12" y2="12"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
              </button>
              <button 
                type="button"
                className={`p-2 rounded-full ${mood === 'positive' ? 'bg-green-100' : 'hover:bg-gray-100'}`}
                onClick={() => setMood('positive')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></svg>
              </button>
            </div>
          </div>

          <div className="border-t pt-4 flex gap-3 justify-end">
            <button 
              type="button" 
              className="px-4 py-2 border rounded-md hover:bg-gray-50 text-base"
              onClick={handleSaveDraft}
            >
              Save Draft
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-[#1EAEDB] text-white rounded-md hover:bg-[#0FA0CE] text-base font-semibold disabled:opacity-70"
              disabled={submitting}
            >
              {submitting ? 'Submitting...' : 'Submit EOD'}
            </button>
          </div>
        </form>
      </Card>

      <Card className="p-6 card-shadow">
        <h3 className="text-xl font-bold text-[#1EAEDB] mb-4">AI Suggestions</h3>
        <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-base text-gray-700">Based on your activities today, consider mentioning the progress on the client proposal review, highlighting the sections that require further attention.</p>
        </div>
        <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-base text-gray-700">Your quarterly report seems to be behind schedule. Consider prioritizing it tomorrow and request assistance if needed.</p>
        </div>
        <button className="text-[#1EAEDB] text-base hover:underline flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
          Generate More Insights
        </button>
      </Card>

      <Card className="p-6 card-shadow">
        <h3 className="text-xl font-bold text-[#1EAEDB] mb-4">Previous Submissions</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-blue-50 transition-colors">
            <div>
              <h4 className="font-medium text-lg">April 21, 2025</h4>
              <p className="text-base text-gray-600">5 tasks completed</p>
            </div>
            <button className="text-[#1EAEDB] text-base hover:underline">
              View Report
            </button>
          </div>
          <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-blue-50 transition-colors">
            <div>
              <h4 className="font-medium text-lg">April 20, 2025</h4>
              <p className="text-base text-gray-600">4 tasks completed</p>
            </div>
            <button className="text-[#1EAEDB] text-base hover:underline">
              View Report
            </button>
          </div>
          <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-blue-50 transition-colors">
            <div>
              <h4 className="font-medium text-lg">April 19, 2025</h4>
              <p className="text-base text-gray-600">6 tasks completed</p>
            </div>
            <button className="text-[#1EAEDB] text-base hover:underline">
              View Report
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
