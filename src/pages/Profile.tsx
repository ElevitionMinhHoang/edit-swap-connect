import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Star, Send, MessageCircle, AlertCircle } from "lucide-react";
import { mockUsers, mockReviews } from "@/lib/mockData";

const Profile = () => {
  const { id } = useParams();
  const user = mockUsers.find((u) => u.id === id) || mockUsers[0];
  const userReviews = mockReviews.filter((r) => r.fromUser === user.name);

  return (
    <div className="container py-6 sm:py-8 px-4 sm:px-6">
      {/* Header */}
      <Card className="p-4 sm:p-6 md:p-8 mb-4 sm:mb-6 shadow-elevated">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
          <div className="text-4xl sm:text-5xl md:text-6xl">{user.avatar}</div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{user.name}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-sm sm:text-base">{user.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-warning text-warning" />
                <span className="font-semibold text-foreground text-sm sm:text-base">{user.rating}</span>
                <span className="text-xs sm:text-sm">({user.totalSessions} buổi)</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base mb-3 sm:mb-4">{user.bio}</p>
            <div className="text-xs sm:text-sm text-muted-foreground">
              Tham gia từ {new Date(user.joinedDate).toLocaleDateString("vi-VN", { month: "long", year: "numeric" })}
            </div>
          </div>
          <div className="flex sm:flex-col gap-2 mt-4 sm:mt-0">
            <Link to="/messages" className="flex-1 sm:flex-initial">
              <Button className="w-full text-xs sm:text-sm">
                <Send className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Gửi Lời Mời
              </Button>
            </Link>
            <Link to="/messages" className="flex-1 sm:flex-initial">
              <Button variant="outline" className="w-full text-xs sm:text-sm">
                <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Nhắn Tin
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="offers" className="w-full">
        <TabsList className="w-full md:w-auto flex flex-wrap">
          <TabsTrigger value="offers" className="text-xs sm:text-sm">Kỹ Năng Dạy</TabsTrigger>
          <TabsTrigger value="wants" className="text-xs sm:text-sm">Muốn Học</TabsTrigger>
          <TabsTrigger value="availability" className="text-xs sm:text-sm">Lịch Rảnh</TabsTrigger>
          <TabsTrigger value="reviews" className="text-xs sm:text-sm">Đánh Giá ({userReviews.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="offers" className="mt-4 sm:mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {user.offerSkills.map((skill, idx) => (
              <Card key={idx} className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <h3 className="text-base sm:text-lg font-semibold">{skill.skill}</h3>
                  <Badge variant="default" className="text-xs">{skill.level}</Badge>
                </div>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <div>Hình thức: {skill.mode}</div>
                  <div className="text-primary font-medium">10 Edits/giờ</div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="wants" className="mt-4 sm:mt-6">
          <Card className="p-4 sm:p-6">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Kỹ năng {user.name.split(" ")[0]} muốn học</h3>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {user.wantSkills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="availability" className="mt-4 sm:mt-6">
          <Card className="p-4 sm:p-6">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Lịch Rảnh Thường Xuyên</h3>
            <p className="text-muted-foreground text-sm sm:text-base">{user.availability}</p>
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-muted/50 rounded-lg">
              <p className="text-xs sm:text-sm text-muted-foreground">
                💡 Khung giờ cụ thể sẽ được đề xuất khi đặt lịch học
              </p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-4 sm:mt-6">
          {userReviews.length === 0 ? (
            <Card className="p-8 sm:p-12 text-center">
              <p className="text-muted-foreground text-sm sm:text-base">Chưa có đánh giá</p>
            </Card>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {userReviews.map((review) => (
                <Card key={review.id} className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="text-2xl sm:text-3xl">{review.fromAvatar}</div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                        <span className="font-semibold text-sm sm:text-base">{review.fromUser}</span>
                        <span className="hidden sm:inline text-sm text-muted-foreground">·</span>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-warning text-warning" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-xs sm:text-sm mb-1 sm:mb-2">{review.comment}</p>
                      <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                        <Badge variant="outline" className="text-xs">{review.skill}</Badge>
                        <span>·</span>
                        <span>{new Date(review.date).toLocaleDateString("vi-VN")}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* Safety Banner */}
      <Card className="p-3 sm:p-4 mt-4 sm:mt-6 bg-muted/30 border-muted">
        <div className="flex items-start sm:items-center gap-2 text-xs sm:text-sm text-muted-foreground">
          <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 sm:mt-0" />
          <span className="flex-1">
            Báo cáo hồ sơ này nếu bạn gặp hành vi hoặc nội dung không phù hợp
          </span>
          <Button variant="link" size="sm" className="ml-auto text-xs sm:text-sm whitespace-nowrap">
            Báo Cáo
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
