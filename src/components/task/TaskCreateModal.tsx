
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TaskCreateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreate: (task: { title: string; priority: string; due: string; assignee: string; avatar: string }) => void;
}

// Sample team members data
const teamMembers = [
  { 
    id: "1", 
    name: "John Doe", 
    role: "Frontend Developer",
    avatar: "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff"
  },
  { 
    id: "2", 
    name: "Jane Smith", 
    role: "UI/UX Designer",
    avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=5C54BA&color=fff"
  },
  { 
    id: "3", 
    name: "Alex Wong", 
    role: "Project Manager",
    avatar: "https://ui-avatars.com/api/?name=Alex+Wong&background=E17A54&color=fff"
  },
  { 
    id: "4", 
    name: "Sarah Lee", 
    role: "Backend Developer",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Lee&background=2D9D78&color=fff"
  }
];

export function TaskCreateModal({ open, onOpenChange, onCreate }: TaskCreateModalProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("High");
  const [due, setDue] = useState("");
  const [assignmentType, setAssignmentType] = useState("everyone");
  const [selectedEmployee, setSelectedEmployee] = useState(teamMembers[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !due) return;
    
    const assignee = assignmentType === "everyone" ? "Everyone" : selectedEmployee.name;
    const avatar = assignmentType === "everyone" 
      ? "https://ui-avatars.com/api/?name=Team&background=6366F1&color=fff" 
      : selectedEmployee.avatar;
    
    onCreate({ 
      title, 
      priority, 
      due,
      assignee,
      avatar
    });
    
    // Reset form
    setTitle("");
    setPriority("High");
    setDue("");
    setAssignmentType("everyone");
    setSelectedEmployee(teamMembers[0]);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-full rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#1EAEDB]">Create New Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700">Task Title</label>
            <Input
              autoFocus
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="font-medium text-base"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Priority</label>
              <select 
                value={priority} 
                onChange={e => setPriority(e.target.value)} 
                className="w-full border rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#1EAEDB]"
              >
                <option value="High">High Priority</option>
                <option value="Medium">Medium Priority</option>
                <option value="Low">Low Priority</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Due Date</label>
              <Input
                type="date"
                value={due}
                onChange={e => setDue(e.target.value)}
                required
                className="text-base"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Task Assignment</label>
            <Tabs defaultValue="everyone" onValueChange={setAssignmentType} className="w-full">
              <TabsList className="grid grid-cols-2 mb-2">
                <TabsTrigger value="everyone" className="text-base">Assign to Everyone</TabsTrigger>
                <TabsTrigger value="specific" className="text-base">Specific Employee</TabsTrigger>
              </TabsList>
              <TabsContent value="everyone" className="p-2 bg-blue-50 rounded-md">
                <p className="text-sm text-gray-600">This task will be visible to all team members</p>
              </TabsContent>
              <TabsContent value="specific" className="p-0">
                <div className="max-h-[160px] overflow-y-auto border rounded-md">
                  {teamMembers.map(employee => (
                    <div 
                      key={employee.id} 
                      className={`flex items-center p-2 hover:bg-blue-50 cursor-pointer ${
                        selectedEmployee.id === employee.id ? 'bg-blue-100' : ''
                      }`}
                      onClick={() => setSelectedEmployee(employee)}
                    >
                      <img 
                        src={employee.avatar} 
                        alt={employee.name} 
                        className="h-10 w-10 rounded-full mr-3" 
                      />
                      <div>
                        <p className="font-medium">{employee.name}</p>
                        <p className="text-xs text-gray-500">{employee.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <DialogFooter className="mt-6">
            <Button 
              type="submit" 
              className="w-full font-semibold text-lg bg-[#1EAEDB] hover:bg-[#0FA0CE] py-2"
            >
              Create Task
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
