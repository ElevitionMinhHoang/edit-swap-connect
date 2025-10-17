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
      lastMessage: "Rất mong chờ buổi học React của chúng ta!",
      unread: 2,
      time: "10m ago",
    },
    {
      user: mockUsers[2],
      lastMessage: "Cảm ơn vì buổi giới thiệu yoga!",
      unread: 0,
      time: "2h ago",
    },
    {
      user: mockUsers[3],
      lastMessage: "Chúng ta có thể lên lịch cho tuần tới không?",
      unread: 1,
      time: "1d ago",
    },
  ];

  const currentChat = conversations[selectedChat];

  return (
    <div className="container py-4 sm:py-6 md:py-8 px-4 sm:px-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Tin Nhắn</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Conversation List */}
        <Card className="lg:col-span-1 p-3 sm:p-4 max-h-[400px] sm:max-h-[600px] overflow-y-auto">
          <h2 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Cuộc Trò Chuyện</h2>
          <div className="space-y-1 sm:space-y-2">
            {conversations.map((conv, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedChat(idx)}
                className={`w-full text-left p-2 sm:p-3 rounded-lg transition-colors ${
                  selectedChat === idx ? "bg-muted" : "hover:bg-muted/50"
                }`}
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <div className="text-xl sm:text-2xl">{conv.user.avatar}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold truncate text-xs sm:text-sm">{conv.user.name}</span>
                      {conv.unread > 0 && (
                        <Badge variant="default" className="ml-1 sm:ml-2 h-4 sm:h-5 px-1 sm:px-1.5 text-xs">
                          {conv.unread}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                    <span className="text-xs text-muted-foreground">{conv.time}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Chat Thread */}
        <Card className="lg:col-span-2 flex flex-col">
          <div className="p-3 sm:p-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="text-2xl sm:text-3xl">{currentChat.user.avatar}</div>
              <div>
                <div className="font-semibold text-sm sm:text-base">{currentChat.user.name}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {currentChat.user.offerSkills[0].skill}
                </div>
              </div>
            </div>
            <Button size="sm" onClick={() => setShowBooking(!showBooking)} className="text-xs sm:text-sm">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Đề Xuất Giờ Học
            </Button>
          </div>

          <div className="flex-1 p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-[200px] sm:min-h-[300px] max-h-[300px] sm:max-h-[400px] overflow-y-auto">
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg p-2 sm:p-3 max-w-[85%] sm:max-w-[70%]">
                <p className="text-xs sm:text-sm">
                  Chào! Tôi rất muốn học {currentChat.user.offerSkills[0].skill} từ bạn.
                </p>
                <span className="text-xs text-muted-foreground">Hôm qua, 15:24</span>
              </div>
            </div>

            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground rounded-lg p-2 sm:p-3 max-w-[85%] sm:max-w-[70%]">
                <p className="text-xs sm:text-sm">Nghe tuyệt vời! Trình độ hiện tại của bạn là gì?</p>
                <span className="text-xs opacity-80">Hôm qua, 15:45</span>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-muted rounded-lg p-2 sm:p-3 max-w-[85%] sm:max-w-[70%]">
                <p className="text-xs sm:text-sm">{currentChat.lastMessage}</p>
                <span className="text-xs text-muted-foreground">Today, {currentChat.time}</span>
              </div>
            </div>
          </div>

          <div className="p-3 sm:p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                placeholder="Nhập tin nhắn của bạn..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    setMessage("");
                  }
                }}
                className="text-xs sm:text-sm"
              />
              <Button size="sm" className="text-xs sm:text-sm">
                <Send className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Booking Pane */}
      {showBooking && (
        <Card className="mt-4 sm:mt-6 p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Đề Xuất Giờ Học</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 block">Kỹ Năng</label>
                <Input value={currentChat.user.offerSkills[0].skill} disabled className="text-xs sm:text-sm" />
              </div>

              <div>
                <label className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 block">Ngày & Giờ</label>
                <Input type="datetime-local" className="text-xs sm:text-sm" />
              </div>

              <div>
                <label className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 block">Thời Lượng</label>
                <div className="flex gap-1 sm:gap-2">
                  {[30, 60, 90].map((duration) => (
                    <Button key={duration} variant="outline" size="sm" className="text-xs">
                      {duration} phút
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 block">Hình Thức</label>
                <div className="flex gap-1 sm:gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    <Video className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    Trực Tuyến
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    Trực Tiếp
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 block">Địa Điểm / Link Zoom</label>
                <Input placeholder="Nhập link Zoom hoặc địa chỉ cụ thể" className="text-xs sm:text-sm" />
              </div>
            </div>

            <div>
              <Card className="p-3 sm:p-4 bg-muted/30">
                <h3 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Tóm Tắt Buổi Học</h3>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
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

                <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-warning/10 border border-warning/20 rounded-lg text-xs text-muted-foreground">
                  ⚠️ Hủy trước ít hơn 2 giờ sẽ nhận cảnh báo
                </div>
              </Card>

              <div className="mt-3 sm:mt-4">
                <label className="text-xs sm:text-sm font-medium mb-1 sm:mb-2 block">Ghi Chú (Không Bắt Buộc)</label>
                <Textarea
                  placeholder="Mục tiêu buổi học, nội dung cần học, v.v..."
                  rows={3}
                  className="text-xs sm:text-sm"
                />
              </div>

              <div className="mt-3 sm:mt-4 flex gap-2">
                <Button className="flex-1 text-xs sm:text-sm">Gửi Đề Xuất</Button>
                <Button variant="outline" onClick={() => setShowBooking(false)} className="text-xs sm:text-sm">
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
