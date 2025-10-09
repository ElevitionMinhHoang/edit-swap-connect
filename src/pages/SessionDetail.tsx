import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MapPin, Video, AlertCircle, Star } from "lucide-react";
import { mockSessions } from "@/lib/mockData";
import { useState } from "react";

const SessionDetail = () => {
  const { id } = useParams();
  const session = mockSessions.find((s) => s.id === id) || mockSessions[0];
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [showReview, setShowReview] = useState(session.status === "DONE");

  const getStatusVariant = (status: string) => {
    const variants: Record<string, "pending" | "confirmed" | "completed" | "cancelled" | "disputed"> = {
      PENDING: "pending",
      CONFIRMED: "confirmed",
      DONE: "completed",
      CANCELLED: "cancelled",
      DISPUTED: "disputed",
    };
    return variants[status] || "pending";
  };

  const sessionDate = new Date(session.startTime);

  return (
    <div className="container py-8 max-w-4xl">
      <div className="mb-6">
        <Link to="/sessions" className="text-sm text-muted-foreground hover:text-foreground">
          ← Back to Sessions
        </Link>
      </div>

      <Card className="p-6 md:p-8 mb-6 shadow-elevated">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{session.skill} Session</h1>
            <Badge variant={getStatusVariant(session.status)} className="text-sm">
              {session.status}
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Teacher */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Teacher</h3>
            <div className="flex items-center gap-3">
              <div className="text-4xl">{session.teacher.avatar}</div>
              <div>
                <div className="font-semibold">{session.teacher.name}</div>
                <div className="text-sm text-muted-foreground">{session.teacher.location}</div>
              </div>
            </div>
          </div>

          {/* Learner */}
          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Learner</h3>
            <div className="flex items-center gap-3">
              <div className="text-4xl">{session.learner.avatar}</div>
              <div>
                <div className="font-semibold">{session.learner.name}</div>
                <div className="text-sm text-muted-foreground">{session.learner.location}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{sessionDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{sessionDate.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })} · {session.duration} minutes</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            {session.mode === "Online" ? (
              <Video className="h-4 w-4 text-muted-foreground" />
            ) : (
              <MapPin className="h-4 w-4 text-muted-foreground" />
            )}
            <span>{session.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Edits:</span>
            <span className="font-semibold text-primary">{session.editsAmount} Edits</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 pt-6 border-t border-border">
          {session.status === "PENDING" && (
            <div className="flex gap-2">
              <Button className="flex-1">Accept Session</Button>
              <Button variant="outline" className="flex-1">Decline</Button>
            </div>
          )}

          {session.status === "CONFIRMED" && (
            <div className="flex gap-2">
              <Button className="flex-1">Check In (15 min before)</Button>
              <Button variant="outline" className="flex-1">Cancel Session</Button>
            </div>
          )}

          {session.status === "DONE" && !showReview && (
            <Button className="w-full" onClick={() => setShowReview(true)}>
              Mark as Completed & Review
            </Button>
          )}
        </div>
      </Card>

      {/* Ledger Summary (for DONE status) */}
      {session.status === "DONE" && (
        <Card className="p-6 mb-6 bg-secondary/10">
          <h2 className="text-lg font-semibold mb-4">Ledger Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Teacher Credit:</span>
              <span className="font-semibold text-secondary">+{session.editsAmount} Edits</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Learner Debit:</span>
              <span className="font-semibold text-destructive">-{session.editsAmount} Edits</span>
            </div>
            <div className="text-xs text-muted-foreground mt-3">
              Auto-ledgered on {new Date().toLocaleString()}
            </div>
          </div>
        </Card>
      )}

      {/* Review Form */}
      {showReview && (
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Leave a Review</h2>
          
          <div className="mb-4">
            <label className="text-sm font-medium mb-2 block">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`h-8 w-8 ${
                      star <= rating ? "fill-warning text-warning" : "text-muted-foreground"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium mb-2 block">
              Comment {rating <= 3 && rating > 0 && "(Required, minimum 20 characters)"}
            </label>
            <Textarea
              placeholder="Share your experience..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={4}
              minLength={rating <= 3 && rating > 0 ? 20 : undefined}
            />
            {rating <= 3 && rating > 0 && review.length < 20 && (
              <p className="text-xs text-warning mt-1">
                {20 - review.length} more characters required for ratings ≤3
              </p>
            )}
          </div>

          <Button
            disabled={rating === 0 || (rating <= 3 && review.length < 20)}
            className="w-full"
          >
            Submit Review
          </Button>
        </Card>
      )}

      {/* Dispute Link */}
      <Card className="p-4 mt-6 bg-muted/30 border-muted">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <AlertCircle className="h-4 w-4" />
          <span>Had an issue with this session?</span>
          <Button variant="link" size="sm" className="ml-auto">
            File a Dispute
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default SessionDetail;
