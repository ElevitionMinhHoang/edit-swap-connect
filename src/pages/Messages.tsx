import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Send, Calendar, Video, MapPin } from "lucide-react";
import { mockUsers } from "@/lib/mockData";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState("");
  const [showBooking, setShowBooking] = useState(false);

  const conversations = [
    {
      user: mockUsers[1],
      lastMessage: "Looking forward to our React session!",
      unread: 2,
      time: "10m ago",
    },
    {
      user: mockUsers[2],
      lastMessage: "Thanks for the yoga intro!",
      unread: 0,
      time: "2h ago",
    },
    {
      user: mockUsers[3],
      lastMessage: "Can we schedule for next week?",
      unread: 1,
      time: "1d ago",
    },
  ];

  const currentChat = conversations[selectedChat];

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Tin Nhắn</h1>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Conversation List */}
        <Card className="lg:col-span-1 p-4 max-h-[600px] overflow-y-auto">
          <h2 className="font-semibold mb-4">Hội Thoại</h2>
          <div className="space-y-2">
            {conversations.map((conv, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedChat(idx)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedChat === idx ? "bg-muted" : "hover:bg-muted/50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{conv.user.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold truncate">{conv.user.name}</span>
                      {conv.unread > 0 && (
                        <Badge variant="default" className="ml-2 h-5 px-1.5 text-xs">
                          {conv.unread}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                    <span className="text-xs text-muted-foreground">{conv.time}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Chat Thread */}
        <Card className="lg:col-span-2 flex flex-col">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{currentChat.user.avatar}</div>
              <div>
                <div className="font-semibold">{currentChat.user.name}</div>
                <div className="text-sm text-muted-foreground">
                  {currentChat.user.offerSkills[0].skill}
                </div>
              </div>
            </div>
            <Button size="sm" onClick={() => setShowBooking(!showBooking)}>
              <Calendar className="h-4 w-4 mr-2" />
              Đề Xuất Giờ Học
            </Button>
          </div>

          <div className="flex-1 p-4 space-y-4 min-h-[300px] max-h-[400px] overflow-y-auto">
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg p-3 max-w-[70%]">
                <p className="text-sm">
                  Hi! I'd love to learn {currentChat.user.offerSkills[0].skill} from you.
                </p>
                <span className="text-xs text-muted-foreground">Yesterday, 3:24 PM</span>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-[70%]">
                <p className="text-sm">That sounds great! What's your current level?</p>
                <span className="text-xs opacity-80">Yesterday, 3:45 PM</span>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-muted rounded-lg p-3 max-w-[70%]">
                <p className="text-sm">{currentChat.lastMessage}</p>
                <span className="text-xs text-muted-foreground">Today, {currentChat.time}</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                placeholder="Nhập tin nhắn..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    setMessage("");
                  }
                }}
              />
              <Button>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Booking Pane */}
      {showBooking && (
        <Card className="mt-6 p-6">
          <h2 className="text-xl font-semibold mb-4">Đề Xuất Giờ Học</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Kỹ Năng</label>
                <Input value={currentChat.user.offerSkills[0].skill} disabled />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Ngày & Giờ</label>
                <Input type="datetime-local" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Thời Lượng</label>
                <div className="flex gap-2">
                  {[30, 60, 90].map((duration) => (
                    <Button key={duration} variant="outline" size="sm">
                      {duration} phút
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Hình Thức</label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Video className="h-4 w-4 mr-1" />
                    Trực Tuyến
                  </Button>
                  <Button variant="outline" size="sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    Trực Tiếp
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Địa Điểm / Link Zoom</label>
                <Input placeholder="Nhập link Zoom hoặc địa chỉ cụ thể" />
              </div>
            </div>

            <div>
              <Card className="p-4 bg-muted/30">
                <h3 className="font-semibold mb-3">Tóm Tắt Buổi Học</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Thời lượng:</span>
                    <span className="font-medium">60 phút</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Chi phí Edits:</span>
                    <span className="font-medium text-destructive">-10 Edits</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Số dư sau:</span>
                    <span className="font-medium">140 Edits</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-warning/10 border border-warning/20 rounded-lg text-xs text-muted-foreground">
                  ⚠️ Hủy trước ít hơn 2 giờ sẽ nhận cảnh báo
                </div>
              </Card>

              <div className="mt-4">
                <label className="text-sm font-medium mb-2 block">Ghi Chú (Tùy Chọn)</label>
                <Textarea
                  placeholder="Mục tiêu buổi học, nội dung cần học, v.v..."
                  rows={4}
                />
              </div>

              <div className="mt-4 flex gap-2">
                <Button className="flex-1">Gửi Đề Xuất</Button>
                <Button variant="outline" onClick={() => setShowBooking(false)}>
                  Hủy
                </Button>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Messages;
