import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      {/* Terms of Service Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter mb-8">Terms of Service</h1>

            <div className="prose prose-blue max-w-none">
              <p className="text-muted-foreground">Last updated: March 12, 2025</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using Project Dynamo's services, you agree to be bound by these Terms of Service. If you
                do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">2. Description of Service</h2>
              <p>
                Project Dynamo provides communication services including but not limited to messaging, voice calls,
                video calls, and file sharing. We reserve the right to modify, suspend, or discontinue any aspect of our
                services at any time.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">3. User Accounts</h2>
              <p>
                To access certain features of our services, you may need to create an account. You are responsible for
                maintaining the confidentiality of your account information and for all activities that occur under your
                account.
              </p>
              <p className="mt-4">
                You agree to provide accurate and complete information when creating your account and to update your
                information to keep it accurate and current.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">4. User Conduct</h2>
              <p>You agree not to use our services to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Distribute malicious software or engage in harmful activities</li>
                <li>Send spam or unsolicited messages</li>
                <li>Engage in any activity that interferes with or disrupts our services</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
              <p>
                Our services and all content and materials available through our services are protected by intellectual
                property laws. You may not use, reproduce, distribute, or create derivative works based on our content
                without our express permission.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">6. Privacy</h2>
              <p>
                Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and
                disclose information about you.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Project Dynamo shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
                directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
              <p>
                We may update these Terms of Service from time to time. We will notify you of any changes by posting the
                new Terms on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
                Project Dynamo operates, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please join our{" "}
                <a href="https://www.reddit.com/r/dynamoapp" className="text-[#00AFF0] hover:underline">
                  Reddit community
                </a>{" "}
                and post your questions there. Our team actively monitors and responds to questions on our subreddit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

