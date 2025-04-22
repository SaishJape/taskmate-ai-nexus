import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useUser } from "@/context/UserContext";
import { TaskCreateModal } from "@/components/task/TaskCreateModal";

export default function Tasks() {
  const [viewMode, setViewMode] = useState<"kanban" | "list">("kanban");
  const { role } = useUser();
  const [showModal, setShowModal] = useState(false);

  const [tasks, setTasks] = useState<any[]>([]);

  function handleCreateTask(newTask: { title: string; priority: string; due: string }) {
    setTasks((prev) => [
      {
        ...newTask,
        id: Math.random().toString(36).slice(2),
        status: "todo",
        assignee: "John Doe",
        avatar: "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
      },
      ...prev,
    ]);
  }

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-primary font-sans">Task Management</h1>
        <p className="text-muted-foreground mt-1 text-lg">
          {role === "manager"
            ? "Create, assign, and track tasks efficiently"
            : "View and complete your assigned tasks"}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("kanban")}
            className={`px-3 py-2 text-base rounded-xl font-semibold transition-colors ${
              viewMode === "kanban"
                ? "bg-primary text-white shadow"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            Kanban View
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-3 py-2 text-base rounded-xl font-semibold transition-colors ${
              viewMode === "list"
                ? "bg-primary text-white shadow"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            List View
          </button>
        </div>
        {role === "manager" && (
          <>
            <button
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 font-bold text-white rounded-xl transition-all shadow flex items-center gap-2 text-lg"
              onClick={() => setShowModal(true)}
            >
              <span className="text-xl">+</span> Create New Task
            </button>
            <TaskCreateModal
              open={showModal}
              onOpenChange={setShowModal}
              onCreate={handleCreateTask}
            />
          </>
        )}
      </div>
      {viewMode === "kanban" ? <KanbanView /> : <ListView />}
    </DashboardLayout>
  );
}

function KanbanView() {
  const { role } = useUser();
  const columns = [
    { id: "todo", title: "To Do", count: 5 },
    { id: "inprogress", title: "In Progress", count: 3 },
    { id: "review", title: "Review", count: 2 },
    { id: "done", title: "Done", count: 8 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {columns.map((column) => (
        <div key={column.id} className="flex flex-col">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-medium">
              {column.title}{" "}
              <span className="text-sm text-muted-foreground ml-1">
                ({column.count})
              </span>
            </h3>
            {role === "manager" && column.id === "todo" && (
              <button className="text-xs text-primary">+ Add</button>
            )}
          </div>

          <div className="space-y-3">
            {column.id === "todo" && (
              <>
                <Card className="p-4 hover-scale card-shadow">
                  <div className="flex justify-between mb-2">
                    <span className="status-badge-red">High</span>
                    <span className="text-xs text-muted-foreground">Today</span>
                  </div>
                  <h4 className="font-medium">Complete quarterly report</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    All financial and operational metrics
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex -space-x-2">
                      <img
                        src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
                        alt="Assignee"
                        className="h-6 w-6 rounded-full border-2 border-white"
                      />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      3
                    </div>
                  </div>
                </Card>
                <Card className="p-4 hover-scale card-shadow">
                  <div className="flex justify-between mb-2">
                    <span className="status-badge-red">High</span>
                    <span className="text-xs text-muted-foreground">Today</span>
                  </div>
                  <h4 className="font-medium">Review client proposal</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Check all contract terms and pricing
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex -space-x-2">
                      <img
                        src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
                        alt="Assignee"
                        className="h-6 w-6 rounded-full border-2 border-white"
                      />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      1
                    </div>
                  </div>
                </Card>
              </>
            )}

            {column.id === "inprogress" && (
              <>
                <Card className="p-4 hover-scale card-shadow">
                  <div className="flex justify-between mb-2">
                    <span className="status-badge-yellow">Medium</span>
                    <span className="text-xs text-muted-foreground">Tomorrow</span>
                  </div>
                  <h4 className="font-medium">Update marketing materials</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Refresh brand guidelines and assets
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex -space-x-2">
                      <img
                        src="https://ui-avatars.com/api/?name=Jane+Smith&background=5C54BA&color=fff"
                        alt="Assignee"
                        className="h-6 w-6 rounded-full border-2 border-white"
                      />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      5
                    </div>
                  </div>
                </Card>
              </>
            )}

            {column.id === "review" && (
              <>
                <Card className="p-4 hover-scale card-shadow">
                  <div className="flex justify-between mb-2">
                    <span className="status-badge-green">Low</span>
                    <span className="text-xs text-muted-foreground">Tomorrow</span>
                  </div>
                  <h4 className="font-medium">Team meeting preparation</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Prepare agenda and supporting docs
                  </p>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex -space-x-2">
                      <img
                        src="https://ui-avatars.com/api/?name=Alex+Wong&background=E17A54&color=fff"
                        alt="Assignee"
                        className="h-6 w-6 rounded-full border-2 border-white"
                      />
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      2
                    </div>
                  </div>
                </Card>
              </>
            )}

            {role === "manager" && (
              <div className="border border-dashed rounded-md p-4 flex items-center justify-center">
                <button className="text-sm text-muted-foreground flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8" />
                    <path d="M8 12h8" />
                  </svg>
                  Add Task
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function ListView() {
  return (
    <Card className="card-shadow">
      <div className="p-4 border-b">
        <div className="grid grid-cols-10 gap-4 text-sm font-medium text-muted-foreground">
          <div className="col-span-4">Task</div>
          <div className="col-span-1">Priority</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-2">Due Date</div>
          <div className="col-span-1">Assigned To</div>
          <div className="col-span-1">Actions</div>
        </div>
      </div>
      <div className="divide-y">
        <div className="p-4 hover:bg-gray-50">
          <div className="grid grid-cols-10 gap-4 items-center">
            <div className="col-span-4">
              <h4 className="font-medium">Complete quarterly report</h4>
              <p className="text-sm text-muted-foreground">All financial and operational metrics</p>
            </div>
            <div className="col-span-1">
              <span className="status-badge-red">High</span>
            </div>
            <div className="col-span-1">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">To Do</span>
            </div>
            <div className="col-span-2">
              <span className="text-sm">Today, 5:00 PM</span>
            </div>
            <div className="col-span-1">
              <img
                src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
                alt="Assignee"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <div className="col-span-1 flex gap-2 justify-end">
              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 hover:bg-gray-50">
          <div className="grid grid-cols-10 gap-4 items-center">
            <div className="col-span-4">
              <h4 className="font-medium">Review client proposal</h4>
              <p className="text-sm text-muted-foreground">Check all contract terms and pricing</p>
            </div>
            <div className="col-span-1">
              <span className="status-badge-red">High</span>
            </div>
            <div className="col-span-1">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">To Do</span>
            </div>
            <div className="col-span-2">
              <span className="text-sm">Today, 3:00 PM</span>
            </div>
            <div className="col-span-1">
              <img
                src="https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
                alt="Assignee"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <div className="col-span-1 flex gap-2 justify-end">
              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 hover:bg-gray-50">
          <div className="grid grid-cols-10 gap-4 items-center">
            <div className="col-span-4">
              <h4 className="font-medium">Update marketing materials</h4>
              <p className="text-sm text-muted-foreground">Refresh brand guidelines and assets</p>
            </div>
            <div className="col-span-1">
              <span className="status-badge-yellow">Medium</span>
            </div>
            <div className="col-span-1">
              <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">In Progress</span>
            </div>
            <div className="col-span-2">
              <span className="text-sm">Tomorrow, 12:00 PM</span>
            </div>
            <div className="col-span-1">
              <img
                src="https://ui-avatars.com/api/?name=Jane+Smith&background=5C54BA&color=fff"
                alt="Assignee"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <div className="col-span-1 flex gap-2 justify-end">
              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 hover:bg-gray-50">
          <div className="grid grid-cols-10 gap-4 items-center">
            <div className="col-span-4">
              <h4 className="font-medium">Team meeting preparation</h4>
              <p className="text-sm text-muted-foreground">Prepare agenda and supporting docs</p>
            </div>
            <div className="col-span-1">
              <span className="status-badge-green">Low</span>
            </div>
            <div className="col-span-1">
              <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs">Review</span>
            </div>
            <div className="col-span-2">
              <span className="text-sm">Tomorrow, 9:00 AM</span>
            </div>
            <div className="col-span-1">
              <img
                src="https://ui-avatars.com/api/?name=Alex+Wong&background=E17A54&color=fff"
                alt="Assignee"
                className="h-8 w-8 rounded-full"
              />
            </div>
            <div className="col-span-1 flex gap-2 justify-end">
              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              </button>
              <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
