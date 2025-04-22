
import { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { useUser } from "@/context/UserContext";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { role } = useUser();

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        setCollapsed={setSidebarCollapsed} 
      />
      <main className={cn(
        "flex-1 overflow-auto transition-all duration-200 ease-in-out",
        sidebarCollapsed ? "ml-[80px]" : "ml-[250px]"
      )}>
        <div className="container py-6 max-w-7xl mx-auto">
          <div className="mb-4 flex justify-between items-center">
            <div>
              <div className="text-sm text-muted-foreground">
                {role === "manager" ? "Manager View" : "Employee View"}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 rounded-full bg-white shadow-sm hover:bg-secondary text-gray-600"
              >
                {sidebarCollapsed ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="animate-fade-in">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
