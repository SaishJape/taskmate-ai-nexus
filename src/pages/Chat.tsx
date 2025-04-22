
import { DashboardLayout } from "@/components/layouts/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUser } from "@/context/UserContext";
import { MessageSquare, Users, Send } from "lucide-react";

export default function Chat() {
  const { name, avatarUrl } = useUser();

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Team Chat</h1>
        <p className="text-muted-foreground mt-1">
          Communicate with your team members
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar with Chats and Groups */}
        <Card className="lg:col-span-1 p-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Direct Messages
              </h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 rounded-md hover:bg-secondary flex items-center gap-2">
                  <img src="https://ui-avatars.com/api/?name=Jane+Smith" alt="Jane" className="w-8 h-8 rounded-full" />
                  <span>Jane Smith</span>
                </button>
                <button className="w-full text-left p-2 rounded-md hover:bg-secondary flex items-center gap-2">
                  <img src="https://ui-avatars.com/api/?name=Alex+Wong" alt="Alex" className="w-8 h-8 rounded-full" />
                  <span>Alex Wong</span>
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Groups
              </h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 rounded-md hover:bg-secondary flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    #
                  </span>
                  <span>General</span>
                </button>
                <button className="w-full text-left p-2 rounded-md hover:bg-secondary flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    #
                  </span>
                  <span>Marketing Team</span>
                </button>
              </div>
            </div>
          </div>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-3 flex flex-col" style={{ height: "calc(100vh - 200px)" }}>
          <div className="p-4 border-b">
            <h2 className="font-medium"># General</h2>
            <p className="text-sm text-muted-foreground">Company-wide announcements and work-based matters</p>
          </div>

          <div className="flex-1 p-4 overflow-auto space-y-4">
            <div className="flex gap-3">
              <img src={avatarUrl} alt={name} className="w-8 h-8 rounded-full" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{name}</span>
                  <span className="text-xs text-muted-foreground">12:30 PM</span>
                </div>
                <p className="text-sm">Hey team! How's everyone doing today?</p>
              </div>
            </div>
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <button className="p-2 bg-primary text-white rounded-md hover:bg-primary/90">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
