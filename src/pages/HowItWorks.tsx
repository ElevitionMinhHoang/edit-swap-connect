import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Users,
  Search,
  MessageCircle,
  Calendar,
  CheckCircle,
  Star,
  Shield,
  Clock,
  Coins,
  ArrowRight,
} from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="container py-8 max-w-6xl">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">How Skill Swap Connect Works</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Learn the ins and outs of our time-banking skill exchange platform
        </p>
      </div>

      {/* Core Flow */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">The Learning Journey</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { icon: Users, title: "Create Profile", desc: "List Offer/Want skills" },
            { icon: Search, title: "Search & Match", desc: "Find perfect teachers" },
            { icon: MessageCircle, title: "Chat & Align", desc: "Discuss session goals" },
            { icon: Calendar, title: "Book Session", desc: "Confirm time & place" },
            { icon: CheckCircle, title: "Complete & Review", desc: "Auto-ledger Edits" },
          ].map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-3">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Time-Banking Explanation */}
      <section className="mb-16">
        <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <div className="flex items-start gap-4">
            <Coins className="h-12 w-12 text-primary flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-3">Understanding Time-Banking</h2>
              <p className="text-muted-foreground mb-4">
                SWC uses a <strong>time-banking system</strong> where every hour of teaching or learning is valued equally:
              </p>
              <div className="bg-background rounded-lg p-4 mb-4">
                <div className="text-center text-2xl font-bold text-primary mb-2">
                  1 Hour = 10 Edits
                </div>
                <p className="text-sm text-center text-muted-foreground">
                  Whether you're teaching guitar, coding, or yoga—your time is worth 10 Edits per hour
                </p>
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>All skills valued equally—no hierarchy, just fair exchange</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Teach to earn Edits, spend Edits to learn—balanced ecosystem</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>Optional Edits packs available (20/50/100) if you want a head start</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* Session Types */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Session Formats</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="text-4xl mb-3">👤↔️👤</div>
            <h3 className="text-xl font-semibold mb-2">1-on-1 Sessions</h3>
            <p className="text-muted-foreground mb-4">
              Most common format. Direct connection between teacher and learner. Personalized attention and flexible scheduling.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Ideal for personalized learning</li>
              <li>• Easy to align schedules</li>
              <li>• 10 Edits per hour standard</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="text-4xl mb-3">👤➡️👥</div>
            <h3 className="text-xl font-semibold mb-2">1-to-Many (Coming Soon)</h3>
            <p className="text-muted-foreground mb-4">
              Group sessions where one teacher works with multiple learners. Great for workshops and interactive classes.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Share the learning experience</li>
              <li>• Cost-effective Edits split</li>
              <li>• Community building</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Trust & Safety</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <Star className="h-10 w-10 mx-auto text-warning mb-3" />
            <h3 className="font-semibold mb-2">Peer Reviews</h3>
            <p className="text-sm text-muted-foreground">
              Rate every session (1–5 stars). Comments required for ≤3 ratings (min 20 chars) to maintain standards.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Shield className="h-10 w-10 mx-auto text-primary mb-3" />
            <h3 className="font-semibold mb-2">Community Guidelines</h3>
            <p className="text-sm text-muted-foreground">
              Clear code of conduct. Report abuse instantly. Admin team reviews disputes fairly and quickly.
            </p>
          </Card>

          <Card className="p-6 text-center">
            <Clock className="h-10 w-10 mx-auto text-secondary mb-3" />
            <h3 className="font-semibold mb-2">Cancellation Policy</h3>
            <p className="text-sm text-muted-foreground">
              Cancel anytime, but <strong>&lt;2 hours</strong> before start triggers a warning. Repeat offenders face restrictions.
            </p>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "Do I need to buy Edits to start?",
              a: "No! You can start teaching immediately to earn Edits. Optional Edits packs (20/50/100) are available if you want to learn first.",
            },
            {
              q: "What happens if my teacher or learner doesn't show up?",
              a: "Both parties must confirm completion. If there's a no-show, you can file a dispute and our admin team will investigate and refund Edits if needed.",
            },
            {
              q: "Can I teach multiple skills?",
              a: "Absolutely! List as many Offer and Want skills as you like. The more you offer, the more likely you'll find matches.",
            },
            {
              q: "Are there any subscription fees?",
              a: "Core platform is free. You only spend Edits when you book sessions as a learner. Optional Edits packs are available for purchase.",
            },
            {
              q: "How do reviews work?",
              a: "After each session, both teacher and learner leave a 1–5 star rating. If you rate ≤3 stars, you must provide a comment (minimum 20 characters) to help maintain quality.",
            },
          ].map((faq, idx) => (
            <Card key={idx} className="p-6">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-muted-foreground text-sm">{faq.a}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <Card className="p-8 text-center bg-primary/5 border-primary/20">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
        <p className="text-muted-foreground mb-6">
          Join our community of skill sharers today
        </p>
        <Link to="/marketplace">
          <Button variant="hero" size="lg">
            Explore the Marketplace
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default HowItWorks;
