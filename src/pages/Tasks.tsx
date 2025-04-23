
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { useUser } from "@/context/UserContext";
import { TaskCreateModal } from "@/components/task/TaskCreateModal";

const STATUS_LABELS = {
  todo: { label: "To Do", color: "bg-blue-100 text-blue-800" },
  inprogress: { label: "In Progress", color: "bg-purple-100 text-purple-800" },
  review: { label: "Review", color: "bg-orange-100 text-orange-800" },
  done: { label: "Done", color: "bg-emerald-100 text-emerald-800" },
};

const PRIORITY_COLORS = {
  High: "status-badge-red bg-pink-600 text-white",
  Medium: "status-badge-yellow bg-yellow-400 text-gray-900",
  Low: "status-badge-green bg-green-500 text-white",
};

export default function Tasks() {
  const [viewMode, setViewMode] = useState<"kanban" | "list">("kanban");
  const { role } = useUser();
  const [showModal, setShowModal] = useState(false);

  const [tasks, setTasks] = useState<any[]>([
    {
      id: "1",
      title: "Complete quarterly report",
      priority: "High",
      due: "2024-05-08T17:00",
      status: "todo",
      assignee: "John Doe",
      avatar: "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff",
      description: "All financial and operational metrics",
      comments: 3,
    },
    {
      id: "2",
      title: "Review client proposal",
      priority: "High",
      due: "2024-05-08T15:00",
      status: "todo",
      assignee: "John Doe",
      avatar: "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff",
      description: "Check all contract terms and pricing",
      comments: 1,
    },
    {
      id: "3",
      title: "Update marketing materials",
      priority: "Medium",
      due: "2024-05-09T12:00",
      status: "inprogress",
      assignee: "Jane Smith",
      avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=5C54BA&color=fff",
      description: "Refresh brand guidelines and assets",
      comments: 5,
    },
    {
      id: "4",
      title: "Team meeting preparation",
      priority: "Low",
      due: "2024-05-09T09:00",
      status: "review",
      assignee: "Alex Wong",
      avatar: "https://ui-avatars.com/api/?name=Alex+Wong&background=E17A54&color=fff",
      description: "Prepare agenda and supporting docs",
      comments: 2,
    }
  ]);

  function handleCreateTask(newTask: { title: string; priority: string; due: string }) {
    setTasks((prev) => [
      {
        ...newTask,
        id: Math.random().toString(36).slice(2),
        status: "todo",
        assignee: "John Doe",
        avatar: "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff",
        description: "",
        comments: 0
      },
      ...prev,
    ]);
  }

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="font-extrabold text-4xl tracking-wide text-[#1EAEDB] font-sans mb-1" style={{ letterSpacing: "-0.02em" }}>
          Task Management
        </h1>
        <p className="text-gray-500 mt-1 text-[1.15rem] font-medium">
          {role === "manager"
            ? "Create, assign, and track tasks efficiently"
            : "View and complete your assigned tasks"}
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("kanban")}
            className={`px-4 py-2 rounded-xl font-bold transition-colors text-lg shadow ${
              viewMode === "kanban"
                ? "bg-[#1EAEDB] text-white"
                : "bg-[#F1F0FB] text-[#1EAEDB] border border-[#1EAEDB] hover:bg-[#e2f7fa]"
            }`}
          >
            Kanban View
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`px-4 py-2 rounded-xl font-bold transition-colors text-lg shadow ${
              viewMode === "list"
                ? "bg-[#1EAEDB] text-white"
                : "bg-[#F1F0FB] text-[#1EAEDB] border border-[#1EAEDB] hover:bg-[#e2f7fa]"
            }`}
          >
            List View
          </button>
        </div>
        {role === "manager" && (
          <>
            <button
              className="px-5 py-2 bg-[#1EAEDB] hover:bg-[#0FA0CE] font-bold text-white rounded-xl transition-all shadow flex items-center gap-2 text-xl"
              onClick={() => setShowModal(true)}
            >
              <span className="text-2xl">+</span> Create New Task
            </button>
            <TaskCreateModal
              open={showModal}
              onOpenChange={setShowModal}
              onCreate={handleCreateTask}
            />
          </>
        )}
      </div>
      {viewMode === "kanban" ? <KanbanView tasks={tasks} role={role} /> : <ListView tasks={tasks} />}
    </DashboardLayout>
  );
}

// KanbanView displays dynamic and styled tasks group by status
function KanbanView({ tasks, role }: { tasks: any[]; role: string }) {
  const columns = [
    { id: "todo", title: "To Do" },
    { id: "inprogress", title: "In Progress" },
    { id: "review", title: "Review" },
    { id: "done", title: "Done" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {columns.map((column) => (
        <div key={column.id} className="flex flex-col">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold text-xl text-[#2087E4]">
              {column.title}{" "}
              <span className="text-base text-gray-400 ml-1">
                ({tasks.filter(task => task.status === column.id).length})
              </span>
            </h3>
            {role === "manager" && column.id === "todo" && (
              <button className="text-xs bg-[#1EAEDB] text-white px-2 py-1 rounded-md font-bold hover:bg-[#0FA0CE] transition">+ Add</button>
            )}
          </div>
          <div className="space-y-3">
            {tasks.filter(t => t.status === column.id).length === 0 && (
              <Card className="p-6 card-shadow">
                <div className="text-center text-gray-400 italic text-base py-4">No tasks</div>
              </Card>
            )}
            {tasks.filter(task => task.status === column.id).map((task) => (
              <Card key={task.id} className="p-5 card-shadow border-2 border-[#D3E4FD] hover:shadow-lg transition group">
                <div className="flex justify-between mb-1">
                  <span className={`${PRIORITY_COLORS[task.priority || "Low"]} rounded-full px-3 py-1 text-xs font-extrabold uppercase group-hover:scale-105 transition`}>
                    {task.priority}
                  </span>
                  <span className="text-sm text-[#1EAEDB] font-bold">{task.due ? formatDueDate(task.due) : ""}</span>
                </div>
                <h4 className="font-extrabold text-lg text-[#222] mb-1">{task.title}</h4>
                {task.description && (
                  <p className="text-[1rem] text-gray-500 mt-1">{task.description}</p>
                )}
                <div className="flex justify-between items-center mt-3">
                  <div className="flex -space-x-2">
                    <img
                      src={task.avatar}
                      alt="Assignee"
                      className="h-7 w-7 rounded-full border-2 border-white shadow"
                    />
                    <span className="ml-2 text-sm font-semibold text-gray-500">{task.assignee}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2087E4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    {task.comments || 0}
                  </div>
                </div>
              </Card>
            ))}
            {role === "manager" && (
              <div className="border border-dashed rounded-md p-4 flex items-center justify-center">
                <button className="text-sm text-gray-400 flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2087E4"
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

// ListView displays dynamic and styled tasks in a table
function ListView({ tasks }: { tasks: any[] }) {
  return (
    <Card className="card-shadow">
      <div className="p-4 border-b bg-[#F1F0FB]">
        <div className="grid grid-cols-10 gap-6 text-lg font-extrabold text-[#2087E4] tracking-wide">
          <div className="col-span-4">Task</div>
          <div className="col-span-1">Priority</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-2">Due Date</div>
          <div className="col-span-1">Assigned To</div>
          <div className="col-span-1">Actions</div>
        </div>
      </div>
      <div className="divide-y">
        {tasks.length === 0 && (
          <div className="p-6 text-center text-gray-400 italic">No tasks found.</div>
        )}
        {tasks.map((task) => (
          <div className="p-4 hover:bg-[#e5f4fa] transition" key={task.id}>
            <div className="grid grid-cols-10 gap-6 items-center">
              <div className="col-span-4">
                <h4 className="font-bold text-lg text-[#222]">{task.title}</h4>
                {task.description && (
                  <p className="text-base text-gray-500">{task.description}</p>
                )}
              </div>
              <div className="col-span-1">
                <span className={`${PRIORITY_COLORS[task.priority || "Low"]} rounded-full px-3 py-1 text-xs font-bold uppercase`}>
                  {task.priority}
                </span>
              </div>
              <div className="col-span-1">
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${STATUS_LABELS[task.status]?.color}`}>
                  {STATUS_LABELS[task.status]?.label}
                </span>
              </div>
              <div className="col-span-2">
                <span className="text-base font-bold text-[#1EAEDB]">
                  {task.due ? formatDueDate(task.due) : ""}
                </span>
              </div>
              <div className="col-span-1 flex items-center gap-2">
                <img
                  src={task.avatar}
                  alt="Assignee"
                  className="h-9 w-9 rounded-full shadow"
                />
                <span className="text-sm font-semibold text-gray-500">{task.assignee}</span>
              </div>
              <div className="col-span-1 flex gap-2 justify-end">
                <button className="p-2 text-[#2087E4] hover:bg-[#D3E4FD] rounded-full transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2087E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 5l3 3-11 11H5v-3L16 5z"></path>
                  </svg>
                </button>
                <button className="p-2 text-[#ea384c] hover:bg-red-100 rounded-full transition">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea384c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function formatDueDate(due: string) {
  if (!due) return "";
  const date = new Date(due);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const dueDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const timeString =
    date.getHours().toString().padStart(2, "0") +
    ":" +
    date.getMinutes().toString().padStart(2, "0");
  if (dueDay.getTime() === today.getTime()) return `Today, ${timeString}`;
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  if (dueDay.getTime() === tomorrow.getTime()) return `Tomorrow, ${timeString}`;
  return `${date.toLocaleDateString()}, ${timeString}`;
}
