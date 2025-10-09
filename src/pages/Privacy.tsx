import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="container py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-muted-foreground mb-8">Last updated: October 9, 2025</p>

      <Card className="p-8">
        <div className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
            <p className="text-muted-foreground">
              Skill Swap Connect ("SWC", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-2">We collect the following types of information:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Account information (name, email, location)</li>
              <li>Profile data (skills, bio, availability)</li>
              <li>Session records (bookings, completions, reviews)</li>
              <li>Transaction history (Edits earned, spent, purchased)</li>
              <li>Communications (messages, dispute reports)</li>
              <li>Usage data (pages visited, features used)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-2">We use your information to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Provide and maintain our service</li>
              <li>Match users based on skills and preferences</li>
              <li>Process and record Edits transactions</li>
              <li>Facilitate communication between users</li>
              <li>Improve platform features and user experience</li>
              <li>Enforce our Terms of Service and Community Guidelines</li>
              <li>Send important notifications about your account and sessions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">4. Data Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell your personal information. We may share your data with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Other users (profile information, reviews) to facilitate matching</li>
              <li>Payment processors for Edits purchases (encrypted)</li>
              <li>Service providers who assist in operating our platform</li>
              <li>Law enforcement if required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">5. Data Security</h2>
            <p className="text-muted-foreground">
              We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
            <p className="text-muted-foreground mb-2">You have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and associated data</li>
              <li>Export your data</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">7. Cookies</h2>
            <p className="text-muted-foreground">
              We use cookies and similar technologies to enhance your experience, remember preferences, and analyze usage patterns. You can control cookie settings through your browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">8. Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this privacy policy from time to time. We will notify you of significant changes via email or through the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">9. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this privacy policy or our data practices, please contact us at:{" "}
              <a href="mailto:privacy@skillswapconnect.com" className="text-primary hover:underline">
                privacy@skillswapconnect.com
              </a>
            </p>
          </section>
        </div>
      </Card>
    </div>
  );
};

export default Privacy;
