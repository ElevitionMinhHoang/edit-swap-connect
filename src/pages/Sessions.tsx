import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Video, ChevronRight } from "lucide-react";
import { mockSessions, type SessionStatus } from "@/lib/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Sessions = () => {
  const getStatusVariant = (status: SessionStatus) => {
    const variants: Record<SessionStatus, "pending" | "confirmed" | "completed" | "cancelled" | "disputed"> = {
      PENDING: "pending",
      CONFIRMED: "confirmed",
      DONE: "completed",
      CANCELLED: "cancelled",
      DISPUTED: "disputed",
    };
    return variants[status];
  };

  const upcomingSessions = mockSessions.filter(
    (s) => s.status === "CONFIRMED" || s.status === "PENDING"
  );
  const pastSessions = mockSessions.filter((s) => s.status === "DONE");

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Buổi Học Của Tôi</h1>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList>
          <TabsTrigger value="upcoming">Sắp Tới ({upcomingSessions.length})</TabsTrigger>
          <TabsTrigger value="past">Đã Học ({pastSessions.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-6">
          {upcomingSessions.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground mb-4">Chưa có buổi học nào sắp tới</p>
              <Link to="/marketplace" className="text-primary hover:underline">
                Khám phá chợ kỹ năng để tìm giáo viên
              </Link>
            </Card>
          ) : (
            <div className="space-y-4">
              {upcomingSessions.map((session) => {
                const sessionDate = new Date(session.startTime);
                return (
                  <Link to={`/session/${session.id}`} key={session.id}>
                    <Card className="p-6 hover-lift cursor-pointer shadow-soft">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{session.skill}</h3>
                          <Badge variant={getStatusVariant(session.status)}>
                            {session.status}
                          </Badge>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{session.teacher.avatar}</div>
                          <div>
                            <div className="text-sm text-muted-foreground">Giáo Viên</div>
                            <div className="font-medium">{session.teacher.name}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{session.learner.avatar}</div>
                          <div>
                            <div className="text-sm text-muted-foreground">Học Viên</div>
                            <div className="font-medium">{session.learner.name}</div>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{sessionDate.toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{sessionDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {session.mode === "Online" ? (
                            <Video className="h-4 w-4" />
                          ) : (
                            <MapPin className="h-4 w-4" />
                          )}
                          <span className="truncate">{session.location}</span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </TabsContent>

        <TabsContent value="past" className="mt-6">
          {pastSessions.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">Chưa có buổi học nào</p>
            </Card>
          ) : (
            <div className="space-y-4">
              {pastSessions.map((session) => {
                const sessionDate = new Date(session.startTime);
                return (
                  <Link to={`/session/${session.id}`} key={session.id}>
                    <Card className="p-6 hover-lift cursor-pointer shadow-soft opacity-80">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{session.skill}</h3>
                          <Badge variant={getStatusVariant(session.status)}>
                            {session.status}
                          </Badge>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{session.teacher.avatar}</div>
                          <div>
                            <div className="text-sm text-muted-foreground">Giáo Viên</div>
                            <div className="font-medium">{session.teacher.name}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-3xl">{session.learner.avatar}</div>
                          <div>
                            <div className="text-sm text-muted-foreground">Học Viên</div>
                            <div className="font-medium">{session.learner.name}</div>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{sessionDate.toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{sessionDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-secondary">
                            +{session.editsAmount} Edits
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Sessions;
