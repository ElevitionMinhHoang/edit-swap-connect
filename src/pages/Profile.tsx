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
    <div className="container py-8">
      {/* Header */}
      <Card className="p-6 md:p-8 mb-6 shadow-elevated">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="text-6xl">{user.avatar}</div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
            <div className="flex items-center gap-4 text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="font-semibold text-foreground">{user.rating}</span>
                <span className="text-sm">({user.totalSessions} sessions)</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{user.bio}</p>
            <div className="text-sm text-muted-foreground">
              Member since {new Date(user.joinedDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </div>
          </div>
          <div className="flex md:flex-col gap-2">
            <Link to="/messages" className="flex-1 md:flex-initial">
              <Button className="w-full">
                <Send className="h-4 w-4 mr-2" />
                Send Invite
              </Button>
            </Link>
            <Link to="/messages" className="flex-1 md:flex-initial">
              <Button variant="outline" className="w-full">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="offers" className="w-full">
        <TabsList className="w-full md:w-auto">
          <TabsTrigger value="offers">Offer Skills</TabsTrigger>
          <TabsTrigger value="wants">Want Skills</TabsTrigger>
          <TabsTrigger value="availability">Availability</TabsTrigger>
          <TabsTrigger value="reviews">Reviews ({userReviews.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="offers" className="mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            {user.offerSkills.map((skill, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold">{skill.skill}</h3>
                  <Badge variant="default">{skill.level}</Badge>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>Mode: {skill.mode}</div>
                  <div className="text-primary font-medium">10 Edits/hour</div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="wants" className="mt-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Skills {user.name.split(" ")[0]} wants to learn</h3>
            <div className="flex flex-wrap gap-2">
              {user.wantSkills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="availability" className="mt-6">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Typical Availability</h3>
            <p className="text-muted-foreground">{user.availability}</p>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                💡 Specific time slots are proposed during the booking flow
              </p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-6">
          {userReviews.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No reviews yet</p>
            </Card>
          ) : (
            <div className="space-y-4">
              {userReviews.map((review) => (
                <Card key={review.id} className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{review.fromAvatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold">{review.fromUser}</span>
                        <span className="text-sm text-muted-foreground">·</span>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-2">{review.comment}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Badge variant="outline">{review.skill}</Badge>
                        <span>·</span>
                        <span>{new Date(review.date).toLocaleDateString()}</span>
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
      <Card className="p-4 mt-6 bg-muted/30 border-muted">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <AlertCircle className="h-4 w-4" />
          <span>
            Report this profile if you encounter inappropriate behavior or content
          </span>
          <Button variant="link" size="sm" className="ml-auto">
            Report
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
