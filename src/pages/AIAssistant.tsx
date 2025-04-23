
import { useState } from "react";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card } from "@/components/ui/card";

export default function AIAssistant() {
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([
    {
      role: "assistant",
      content: "Hello! I'm Jagdish your TaskMate AI assistant. How can I help you today?",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message to conversation
    setConversation([...conversation, { role: "user", content: message }]);

    // Simulate AI response
    setTimeout(() => {
      let response = "I'm processing your request...";
      
      if (message.toLowerCase().includes("pending task")) {
        response = "You have 5 pending tasks. The highest priority is 'Complete quarterly report' due today at 5:00 PM.";
      } else if (message.toLowerCase().includes("eod") || message.toLowerCase().includes("summary")) {
        response = "Based on your completed tasks today, I've generated an EOD summary: 'Completed client proposal review, made progress on quarterly report, and participated in team strategy meeting. Tomorrow's focus will be completing the quarterly report and beginning work on the marketing materials update.'";
      } else if (message.toLowerCase().includes("productivity")) {
        response = "Your productivity score is 85%, which is 5% higher than last week. You're most productive between 10 AM and 12 PM. I recommend scheduling high-priority tasks during this time window.";
      } else {
        response = "I can help you with task management, EOD summaries, productivity insights, and more. What specific information do you need?";
      }
      
      setConversation([...conversation, 
        { role: "user", content: message },
        { role: "assistant", content: response }
      ]);
    }, 1000);

    setMessage("");
  };

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">AI Assistant</h1>
        <p className="text-muted-foreground mt-1">
          Get personalized help with tasks, reports, and insights
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="card-shadow h-[calc(100vh-220px)] flex flex-col">
            <div className="p-6 border-b">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-primary text-white rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                </span>
                <div>
                  <h3 className="font-medium">TaskMate AI</h3>
                  <p className="text-xs text-muted-foreground">
                    Powered by advanced AI
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-6 space-y-4">
              {conversation.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.role === "user"
                        ? "bg-primary text-white"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about your tasks, generate an EOD, get insights..."
                  className="flex-1 px-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                </button>
              </form>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-6 card-shadow">
            <h3 className="text-lg font-medium mb-4">Quick Prompts</h3>
            <div className="space-y-2">
              <button className="w-full text-left p-3 text-sm bg-secondary hover:bg-secondary/70 rounded-md transition-colors">
                What are my pending tasks?
              </button>
              <button className="w-full text-left p-3 text-sm bg-secondary hover:bg-secondary/70 rounded-md transition-colors">
                Generate my EOD summary
              </button>
              <button className="w-full text-left p-3 text-sm bg-secondary hover:bg-secondary/70 rounded-md transition-colors">
                How is my productivity today?
              </button>
              <button className="w-full text-left p-3 text-sm bg-secondary hover:bg-secondary/70 rounded-md transition-colors">
                What's my team's status?
              </button>
              <button className="w-full text-left p-3 text-sm bg-secondary hover:bg-secondary/70 rounded-md transition-colors">
                Summarize today's meetings
              </button>
            </div>
          </Card>

          <Card className="p-6 card-shadow">
            <h3 className="text-lg font-medium mb-4">AI Capabilities</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </span>
                <div>
                  <p className="text-sm font-medium">Task Management</p>
                  <p className="text-xs text-muted-foreground">
                    Get summaries, prioritization help, and task insights
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </span>
                <div>
                  <p className="text-sm font-medium">EOD Generation</p>
                  <p className="text-xs text-muted-foreground">
                    Auto-generate detailed end-of-day reports
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </span>
                <div>
                  <p className="text-sm font-medium">Productivity Analysis</p>
                  <p className="text-xs text-muted-foreground">
                    Get insights on your productivity patterns
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-0.5 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </span>
                <div>
                  <p className="text-sm font-medium">Calendar Management</p>
                  <p className="text-xs text-muted-foreground">
                    Schedule optimization and meeting summaries
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
