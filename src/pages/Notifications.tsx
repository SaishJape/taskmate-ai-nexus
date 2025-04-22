
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card } from "@/components/ui/card";

const notifications = [
  {
    id: 1,
    type: "task",
    title: "Task Deadline Approaching",
    description: "Complete quarterly report is due in 4 hours",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 2,
    type: "mention",
    title: "You were mentioned in a comment",
    description: "Jane Smith mentioned you in 'Marketing materials update'",
    time: "3 hours ago",
    read: false,
  },
  {
    id: 3,
    type: "ai",
    title: "AI Task Suggestion",
    description: "Based on your calendar, consider rescheduling the client meeting",
    time: "5 hours ago",
    read: true,
  },
  {
    id: 4,
    type: "eod",
    title: "EOD Reminder",
    description: "Don't forget to submit your EOD report today",
    time: "6 hours ago",
    read: true,
  },
  {
    id: 5,
    type: "assignment",
    title: "New Task Assigned",
    description: "Alex Wong assigned you 'Prepare presentation for client meeting'",
    time: "Yesterday",
    read: true,
  },
  {
    id: 6,
    type: "system",
    title: "System Update",
    description: "TaskMate AI has been updated to version 2.1",
    time: "2 days ago",
    read: true,
  },
];

export default function Notifications() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
        <p className="text-muted-foreground mt-1">
          Stay updated with the latest alerts and activity
        </p>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <div className="flex gap-2">
          <button className="px-3 py-1.5 bg-primary text-white text-sm rounded-md">
            All
          </button>
          <button className="px-3 py-1.5 bg-secondary text-sm rounded-md hover:bg-secondary/80">
            Unread
          </button>
          <button className="px-3 py-1.5 bg-secondary text-sm rounded-md hover:bg-secondary/80">
            Tasks
          </button>
          <button className="px-3 py-1.5 bg-secondary text-sm rounded-md hover:bg-secondary/80">
            Mentions
          </button>
        </div>
        <button className="text-sm text-primary hover:underline">
          Mark all as read
        </button>
      </div>

      <Card className="card-shadow divide-y">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 hover:bg-muted/20 ${
              !notification.read ? "bg-muted/10" : ""
            }`}
          >
            <div className="flex gap-4">
              {notification.type === "task" && (
                <div className="mt-1 p-2 bg-blue-100 text-blue-700 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>
                </div>
              )}
              {notification.type === "mention" && (
                <div className="mt-1 p-2 bg-purple-100 text-purple-700 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/></svg>
                </div>
              )}
              {notification.type === "ai" && (
                <div className="mt-1 p-2 bg-green-100 text-green-700 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                </div>
              )}
              {notification.type === "eod" && (
                <div className="mt-1 p-2 bg-amber-100 text-amber-700 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                </div>
              )}
              {notification.type === "assignment" && (
                <div className="mt-1 p-2 bg-indigo-100 text-indigo-700 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
              )}
              {notification.type === "system" && (
                <div className="mt-1 p-2 bg-gray-100 text-gray-700 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                </div>
              )}
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-medium">{notification.title}</h4>
                  <span className="text-xs text-muted-foreground">
                    {notification.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {notification.description}
                </p>
                <div className="mt-2 flex gap-2">
                  {notification.type === "task" && (
                    <button className="text-xs text-primary hover:underline">
                      View Task
                    </button>
                  )}
                  {notification.type === "mention" && (
                    <button className="text-xs text-primary hover:underline">
                      Go to Comment
                    </button>
                  )}
                  {notification.type === "ai" && (
                    <button className="text-xs text-primary hover:underline">
                      View Suggestion
                    </button>
                  )}
                  {notification.type === "eod" && (
                    <button className="text-xs text-primary hover:underline">
                      Submit EOD
                    </button>
                  )}
                  {notification.type === "assignment" && (
                    <button className="text-xs text-primary hover:underline">
                      View Task
                    </button>
                  )}
                  {notification.type === "system" && (
                    <button className="text-xs text-primary hover:underline">
                      View Updates
                    </button>
                  )}
                  <button className="text-xs text-muted-foreground hover:underline">
                    Dismiss
                  </button>
                </div>
              </div>
              {!notification.read && (
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
              )}
            </div>
          </div>
        ))}
      </Card>

      <div className="mt-6 flex justify-center">
        <button className="text-primary hover:underline flex items-center gap-1">
          <span>Load More</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>
      </div>
    </DashboardLayout>
  );
}
