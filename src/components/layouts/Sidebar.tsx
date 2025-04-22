
import { Link, useLocation } from "react-router-dom";
import { useUser } from "@/context/UserContext";
import { cn } from "@/lib/utils";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

interface SidebarItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  roles: Array<"manager" | "employee">;
}

export function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const location = useLocation();
  const { role, name, avatarUrl } = useUser();

  const sidebarItems: SidebarItem[] = [
    {
      name: "Dashboard",
      path: "/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
      ),
      roles: ["manager", "employee"],
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-kanban"><path d="M6 5v11"/><path d="M12 5v6"/><path d="M18 5v14"/></svg>
      ),
      roles: ["manager", "employee"],
    },
    {
      name: "EOD Reports",
      path: "/eod-reports",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
      ),
      roles: ["manager", "employee"],
    },
    {
      name: "Team",
      path: "/team",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      ),
      roles: ["manager"],
    },
    {
      name: "AI Assistant",
      path: "/ai-assistant",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
      ),
      roles: ["manager", "employee"],
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
      ),
      roles: ["manager", "employee"],
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-bar"><rect width="18" height="18" x="3" y="3" rx="2"/><line x1="8" x2="8" y1="15" y2="9"/><line x1="12" x2="12" y1="15" y2="11"/><line x1="16" x2="16" y1="15" y2="7"/></svg>
      ),
      roles: ["manager"],
    },
    {
      name: "Profile",
      path: "/profile",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      ),
      roles: ["manager", "employee"],
    },
  ];

  const filteredItems = sidebarItems.filter((item) => 
    item.roles.includes(role)
  );

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-10 flex flex-col bg-sidebar transition-all duration-300 ease-in-out",
        collapsed ? "w-[80px]" : "w-[250px]"
      )}
    >
      <div className="flex items-center justify-between p-4 h-16 border-b border-sidebar-border">
        <div className="flex items-center gap-2 text-white">
          {!collapsed && (
            <span className="font-semibold text-xl">TaskMate AI</span>
          )}
          {collapsed && (
            <span className="font-semibold text-xl">TM</span>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-auto py-4">
        <nav>
          <ul className="space-y-1 px-2">
            {filteredItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground hover:bg-sidebar-accent transition-colors",
                    location.pathname === item.path
                      ? "bg-sidebar-accent font-medium"
                      : "text-opacity-80"
                  )}
                >
                  <span>{item.icon}</span>
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <img
            src={avatarUrl}
            alt={name}
            className="h-10 w-10 rounded-full object-cover"
          />
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white">{name}</span>
              <span className="text-xs text-sidebar-foreground text-opacity-70">
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </span>
            </div>
          )}
        </div>
        {!collapsed && (
          <div className="mt-2">
            <button
              onClick={() => setCollapsed(true)}
              className="w-full flex items-center justify-center gap-2 text-xs text-sidebar-foreground text-opacity-70 hover:text-opacity-100 transition-colors"
            >
              <span>Collapse</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
