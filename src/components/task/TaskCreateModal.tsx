
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface TaskCreateModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreate: (task: { title: string; priority: string; due: string }) => void;
}

export function TaskCreateModal({ open, onOpenChange, onCreate }: TaskCreateModalProps) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("High");
  const [due, setDue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !due) return;
    onCreate({ title, priority, due });
    setTitle("");
    setPriority("High");
    setDue("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-full rounded-xl">
        <DialogHeader>
          <DialogTitle>Create New Task</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            autoFocus
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="font-medium"
          />
          <div className="flex gap-2">
            <select value={priority} onChange={e => setPriority(e.target.value)} className="border rounded-md px-2 py-1 text-base flex-1">
              <option value="High">High Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="Low">Low Priority</option>
            </select>
            <Input
              type="date"
              value={due}
              onChange={e => setDue(e.target.value)}
              required
              className="flex-1"
            />
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full font-semibold text-lg">Create Task</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
