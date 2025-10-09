import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="container py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
      <p className="text-muted-foreground mb-8">Last updated: October 9, 2025</p>

      <Card className="p-8">
        <div className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using Skill Swap Connect ("SWC"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Platform Description</h2>
            <p className="text-muted-foreground">
              SWC is a peer-to-peer skill exchange platform using a time-banking system called "Edits." One hour of teaching or learning equals 10 Edits. We facilitate connections but do not employ teachers or guarantee learning outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. User Responsibilities</h2>
            <p className="text-muted-foreground mb-2">As a user, you agree to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Provide accurate profile information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Conduct sessions professionally and respectfully</li>
              <li>Honor confirmed session bookings</li>
              <li>Provide honest reviews and feedback</li>
              <li>Report inappropriate behavior or content</li>
              <li>Not use the platform for commercial purposes without authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Edits System</h2>
            <p className="text-muted-foreground mb-2">The Edits currency works as follows:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>1 hour of teaching = 10 Edits earned</li>
              <li>1 hour of learning = 10 Edits spent</li>
              <li>Edits are automatically ledgered upon session completion</li>
              <li>Optional Edits packs available for purchase (20/50/100)</li>
              <li>Edits have no cash value and cannot be redeemed for money</li>
              <li>Unused Edits do not expire but may be forfeited upon account closure</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Cancellation Policy</h2>
            <p className="text-muted-foreground">
              Sessions may be canceled by either party with notice. Cancellations made less than 2 hours before the scheduled start time will trigger a warning. Repeated late cancellations may result in account restrictions or suspension.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Reviews and Ratings</h2>
            <p className="text-muted-foreground">
              Both teachers and learners must review each session. Ratings of 3 stars or below require a comment of at least 20 characters. Reviews must be honest and constructive. Abuse of the review system may result in account action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Disputes</h2>
            <p className="text-muted-foreground">
              If there is a dispute regarding a session (no-show, quality issues, etc.), users may file a dispute report. Our admin team will review the case and may refund Edits, issue warnings, or take other corrective action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Prohibited Conduct</h2>
            <p className="text-muted-foreground mb-2">The following behaviors are prohibited:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Harassment, discrimination, or abusive language</li>
              <li>Sharing false or misleading information</li>
              <li>Creating multiple accounts to manipulate the system</li>
              <li>Attempting to bypass the Edits system for direct payment</li>
              <li>Spamming or soliciting users for external services</li>
              <li>Violating intellectual property rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Account Suspension or Termination</h2>
            <p className="text-muted-foreground">
              We reserve the right to suspend or terminate accounts that violate these Terms, engage in prohibited conduct, or pose a risk to the community. Refunds for purchased Edits are at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">10. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              SWC is a platform facilitator and is not responsible for the quality, safety, or legality of sessions. We are not liable for any direct, indirect, incidental, or consequential damages arising from platform use. Maximum liability is limited to the amount paid by the user in the past 12 months.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">11. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We may modify these Terms from time to time. Significant changes will be communicated via email or platform notification. Continued use of the platform after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">12. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms are governed by the laws of [Your Jurisdiction]. Any disputes will be resolved through binding arbitration in [Your Jurisdiction].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">13. Contact</h2>
            <p className="text-muted-foreground">
              For questions about these Terms, contact us at:{" "}
              <a href="mailto:legal@skillswapconnect.com" className="text-primary hover:underline">
                legal@skillswapconnect.com
              </a>
            </p>
          </section>
        </div>
      </Card>
    </div>
  );
};

export default Terms;
