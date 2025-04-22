
import { useUser } from "@/context/UserContext";

export function RoleToggle() {
  const { role, setRole } = useUser();

  return (
    <div className="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm">
      <span className="text-sm font-medium">View as:</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setRole("employee")}
          className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
            role === "employee"
              ? "bg-primary text-white"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          Employee
        </button>
        <button
          onClick={() => setRole("manager")}
          className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
            role === "manager"
              ? "bg-primary text-white"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          Manager
        </button>
      </div>
    </div>
  );
}
