import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      {/* Privacy Policy Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter mb-8">Privacy Policy</h1>

            <div className="prose prose-blue max-w-none">
              <p className="text-muted-foreground">Last updated: March 12, 2025</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p>
                Project Dynamo ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you use our communication
                service.
              </p>
              <p className="font-medium text-[#00AFF0]">
                We will never sell your information. Your privacy is our priority, and we are committed to maintaining
                the confidentiality and security of your personal data.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
              <p>We may collect information about you in various ways, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Personal Information:</strong> Information that can be used to identify you, such as your
                  name, email address, and profile picture.
                </li>
                <li>
                  <strong>Usage Information:</strong> Information about how you use our service, including call
                  duration, message frequency, and features used.
                </li>
                <li>
                  <strong>Device Information:</strong> Information about your device, such as IP address, browser type,
                  and operating system.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We may use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Providing and maintaining our service</li>
                <li>Improving and personalizing your experience</li>
                <li>Communicating with you about updates and new features</li>
                <li>Ensuring the security and integrity of our service</li>
                <li>Analyzing usage patterns to enhance our service</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information from
                unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over
                the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">5. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">6. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please join our{" "}
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

