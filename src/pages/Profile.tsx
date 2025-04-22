
import { useState } from "react";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card } from "@/components/ui/card";
import { useUser } from "@/context/UserContext";
import { RoleToggle } from "@/components/ui/RoleToggle";

export default function Profile() {
  const { name, avatarUrl, role } = useUser();
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Profile Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your account preferences and settings
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="md:col-span-1 p-6 card-shadow">
          <div className="flex flex-col items-center mb-6">
            <img
              src={avatarUrl}
              alt={name}
              className="h-24 w-24 rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground">
              {role === "manager" ? "Manager" : "Employee"}
            </p>
          </div>

          <div className="space-y-1">
            <button
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeTab === "profile"
                  ? "bg-primary text-white"
                  : "hover:bg-secondary"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              Personal Info
            </button>
            <button
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeTab === "preferences"
                  ? "bg-primary text-white"
                  : "hover:bg-secondary"
              }`}
              onClick={() => setActiveTab("preferences")}
            >
              Preferences
            </button>
            <button
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeTab === "notifications"
                  ? "bg-primary text-white"
                  : "hover:bg-secondary"
              }`}
              onClick={() => setActiveTab("notifications")}
            >
              Notification Settings
            </button>
            <button
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeTab === "ai"
                  ? "bg-primary text-white"
                  : "hover:bg-secondary"
              }`}
              onClick={() => setActiveTab("ai")}
            >
              AI Personalization
            </button>
            <button
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                activeTab === "account"
                  ? "bg-primary text-white"
                  : "hover:bg-secondary"
              }`}
              onClick={() => setActiveTab("account")}
            >
              Account Settings
            </button>
          </div>

          <div className="mt-6 pt-4 border-t flex justify-center">
            <RoleToggle />
          </div>
        </Card>

        <div className="md:col-span-3">
          {activeTab === "profile" && (
            <Card className="p-6 card-shadow">
              <h2 className="text-xl font-medium mb-6">Personal Information</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Job Title
                  </label>
                  <input
                    type="text"
                    defaultValue="Frontend Developer"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Department
                  </label>
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option>Engineering</option>
                    <option>Design</option>
                    <option>Marketing</option>
                    <option>Sales</option>
                    <option>Customer Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Bio
                  </label>
                  <textarea
                    className="w-full px-3 py-2 border rounded-md min-h-[100px]"
                    defaultValue="Frontend developer with 5 years of experience specializing in React and TypeScript."
                  ></textarea>
                </div>

                <div className="border-t pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </Card>
          )}

          {activeTab === "preferences" && (
            <Card className="p-6 card-shadow">
              <h2 className="text-xl font-medium mb-6">Preferences</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Language Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Interface Language
                      </label>
                      <select className="w-full px-3 py-2 border rounded-md">
                        <option>English (US)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                        <option>Japanese</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Date Format
                      </label>
                      <select className="w-full px-3 py-2 border rounded-md">
                        <option>MM/DD/YYYY</option>
                        <option>DD/MM/YYYY</option>
                        <option>YYYY-MM-DD</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Time Format
                      </label>
                      <select className="w-full px-3 py-2 border rounded-md">
                        <option>12-hour (AM/PM)</option>
                        <option>24-hour</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-medium mb-3">Theme Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Theme
                      </label>
                      <div className="flex gap-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="light"
                            name="theme"
                            className="mr-2"
                            defaultChecked
                          />
                          <label htmlFor="light">Light</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="dark"
                            name="theme"
                            className="mr-2"
                          />
                          <label htmlFor="dark">Dark</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="system"
                            name="theme"
                            className="mr-2"
                          />
                          <label htmlFor="system">System</label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Task View
                      </label>
                      <div className="flex gap-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="kanban"
                            name="taskView"
                            className="mr-2"
                            defaultChecked
                          />
                          <label htmlFor="kanban">Kanban</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="list"
                            name="taskView"
                            className="mr-2"
                          />
                          <label htmlFor="list">List</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-medium mb-3">Work Hours</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Start Time
                      </label>
                      <input
                        type="time"
                        defaultValue="09:00"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        End Time
                      </label>
                      <input
                        type="time"
                        defaultValue="17:00"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">
                      Working Days
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="monday"
                          className="mr-1"
                          defaultChecked
                        />
                        <label htmlFor="monday" className="text-sm">
                          Mon
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="tuesday"
                          className="mr-1"
                          defaultChecked
                        />
                        <label htmlFor="tuesday" className="text-sm">
                          Tue
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="wednesday"
                          className="mr-1"
                          defaultChecked
                        />
                        <label htmlFor="wednesday" className="text-sm">
                          Wed
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="thursday"
                          className="mr-1"
                          defaultChecked
                        />
                        <label htmlFor="thursday" className="text-sm">
                          Thu
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="friday"
                          className="mr-1"
                          defaultChecked
                        />
                        <label htmlFor="friday" className="text-sm">
                          Fri
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="saturday" className="mr-1" />
                        <label htmlFor="saturday" className="text-sm">
                          Sat
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="sunday" className="mr-1" />
                        <label htmlFor="sunday" className="text-sm">
                          Sun
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 flex justify-end">
                  <button
                    type="button"
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </Card>
          )}

          {activeTab === "notifications" && (
            <Card className="p-6 card-shadow">
              <h2 className="text-xl font-medium mb-6">Notification Settings</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Email Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Task Assignments</p>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when you're assigned a new task
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Task Updates</p>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when tasks are updated
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">EOD Reminders</p>
                        <p className="text-sm text-muted-foreground">
                          Receive reminders to submit your EOD report
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Team Updates</p>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications about team activities
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-medium mb-3">In-App Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Task Deadlines</p>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications for upcoming task deadlines
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">AI Suggestions</p>
                        <p className="text-sm text-muted-foreground">
                          Receive AI-generated productivity insights
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Mentions</p>
                        <p className="text-sm text-muted-foreground">
                          Receive notifications when you're mentioned in comments
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-medium mb-3">Notification Frequency</h3>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Send Notifications
                    </label>
                    <select className="w-full px-3 py-2 border rounded-md">
                      <option>Immediately</option>
                      <option>Once per hour</option>
                      <option>Once per day</option>
                      <option>Weekly digest</option>
                    </select>
                  </div>
                </div>

                <div className="border-t pt-4 flex justify-end">
                  <button
                    type="button"
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                  >
                    Save Notification Settings
                  </button>
                </div>
              </div>
            </Card>
          )}

          {activeTab === "ai" && (
            <Card className="p-6 card-shadow">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-medium">AI Personalization</h2>
                <span className="ai-badge">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                  AI Powered
                </span>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">AI Assistant</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">AI Assistant</p>
                        <p className="text-sm text-muted-foreground">
                          Enable AI assistant for task management and productivity insights
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Assistant Personality
                      </label>
                      <select className="w-full px-3 py-2 border rounded-md">
                        <option>Professional</option>
                        <option>Friendly</option>
                        <option>Concise</option>
                        <option>Detailed</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-medium mb-3">Task Suggestions</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Task Prioritization</p>
                        <p className="text-sm text-muted-foreground">
                          Let AI suggest which tasks to prioritize based on your work patterns
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Time Blocking</p>
                        <p className="text-sm text-muted-foreground">
                          Let AI suggest optimal time blocks for focused work
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-medium mb-3">EOD Report Generation</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Auto-Generate EOD</p>
                        <p className="text-sm text-muted-foreground">
                          Let AI draft your EOD reports based on completed tasks
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        EOD Detail Level
                      </label>
                      <select className="w-full px-3 py-2 border rounded-md">
                        <option>Detailed</option>
                        <option>Concise</option>
                        <option>Bullet Points</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-medium mb-3">Data Usage</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Learning from Your Data</p>
                        <p className="text-sm text-muted-foreground">
                          Allow AI to learn from your work patterns to improve suggestions
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Data Anonymization</p>
                        <p className="text-sm text-muted-foreground">
                          Anonymize your data when processing with AI
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 flex justify-end">
                  <button
                    type="button"
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                  >
                    Save AI Settings
                  </button>
                </div>
              </div>
            </Card>
          )}

          {activeTab === "account" && (
            <Card className="p-6 card-shadow">
              <h2 className="text-xl font-medium mb-6">Account Settings</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Change Password</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                      >
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-medium mb-3">Two-Factor Authentication</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Enable 2FA</p>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="text-lg font-medium mb-3">Delete Account</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                  <button
                    type="button"
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
