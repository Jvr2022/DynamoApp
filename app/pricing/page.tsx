import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle } from "lucide-react"
import { FaCheck, FaShieldAlt, FaLock, FaUsers, FaRocket } from 'react-icons/fa';

export default function PricingPage() {
  const recommendedPlan = "Pro"

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#e6f7fd] animate-fade-in">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Flexible Pricing for Every Need
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Choose the plan that works best for you. All plans include our core features.
              </p>
            </div>
            <div className="inline-flex items-center justify-center p-2 bg-amber-100 rounded-lg mt-4">
              <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
              <span className="text-sm font-medium text-amber-800">
                These prices are preliminary and subject to change before launch
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                name: "Free",
                price: "$0",
                description: "For personal use",
                features: ["Unlimited 1:1 calls", "Group calls up to 4 people", "1GB file storage", "Basic encryption"],
              },
              {
                name: "Pro",
                price: "$4.99",
                description: "For power users",
                features: [
                  "Everything in Free",
                  "Group calls up to 50 people",
                  "10GB file storage",
                  "Advanced encryption",
                  "Priority support",
                ],
              },
              {
                name: "Business",
                price: "$12.99",
                description: "For teams and organizations",
                features: [
                  "Everything in Pro",
                  "Unlimited group calls",
                  "100GB file storage",
                  "Admin controls",
                  "API access",
                  "24/7 dedicated support",
                ],
              },
              {
                name: "Call Credits",
                price: "Pay as you go",
                description: "For occasional users",
                features: [
                  "Purchase credits as needed",
                  "No monthly commitment",
                  "International calls",
                  "Premium call quality",
                  "Credits never expire",
                ],
              },
            ].map((plan, index) => {
              const isRecommended = plan.name === recommendedPlan
              return (
                <div
                  key={index}
                  className={`animate-float-slow ${index === 3 ? "md:col-span-3 lg:col-span-1" : ""}`}
                >
                  <div
                    className={`relative flex flex-col p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 preserve-3d ${
                      isRecommended ? "bg-blue-50 border-blue-300 shadow-2xl" : ""
                    } flex-grow`}
                  >
                    {isRecommended && (
                      <>
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 rounded-t-lg"></div>
                        <div className="absolute top-2 right-2">
                          <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-2 py-0.5 text-xs font-semibold">
                            <FaCheck className="h-3 w-3 mr-1" style={{ color: 'inherit' }} />
                            Recommended
                          </div>
                        </div>
                      </>
                    )}
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="mt-4 text-4xl font-bold">
                      {plan.price}
                      {plan.name !== "Call Credits" && <span className="text-base font-normal">/month</span>}
                    </div>
                    <p className="mt-2 text-muted-foreground">{plan.description}</p>
                    <ul className="mt-6 space-y-4 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#00AFF0] mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-500 cursor-not-allowed" disabled>
                        Coming Soon
                      </Button>
                      <p className="text-xs text-muted-foreground mt-2 text-center">Plans not available yet</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              We offer a 30-day money-back guarantee. If you're not satisfied, simply contact us for a full refund.
            </p>
          </div>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              * Pricing and features are tentative and subject to change. We're still finalizing our plans.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white animate-fade-in">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Why Choose Project Dynamo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Enhanced Security",
                description: "End-to-end encryption ensures your conversations stay private.",
                icon: FaShieldAlt,
              },
              {
                title: "Modern Features",
                description: "Enjoy a familiar interface with innovative features for seamless communication.",
                icon: FaRocket,
              },
              {
                title: "Privacy Focused",
                description: "We prioritize your privacy and data security.",
                icon: FaLock,
              },
              {
                title: "Group Collaboration",
                description: "Connect with up to 50 people or upgrade for unlimited group calls.",
                icon: FaUsers,
              },
              {
                title: "Affordable Pricing",
                description: "Flexible pricing plans to suit your needs.",
                icon: FaCheck,
              },
              {
                title: "Familiar Interface",
                description: "Intuitive design for easy transition from Skype.",
                icon: FaCheck,
              },
            ].map((reason, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 rounded-lg border border-gray-200">
                <reason.icon className="h-8 w-8 text-[#00AFF0] mb-3" />
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white animate-fade-in">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
            {[
              {
                question: "When will these pricing plans be available?",
                answer:
                  "We're still in development, so these plans are tentative. We'll finalize pricing closer to launch.",
              },
              {
                question: "Can I switch between plans?",
                answer: "Yes, you'll be able to upgrade or downgrade your plan at any time.",
              },
              {
                question: "Is there a free trial for paid plans?",
                answer: "We're considering offering a free trial period for our paid plans. Stay tuned for updates!",
              },
              {
                question: "Will there be discounts for annual subscriptions?",
                answer: "We're exploring the possibility of offering discounts for annual commitments.",
              },
            ].map((faq, i) => (
              <details key={i} className="space-y-2">
                <summary className="text-xl font-bold cursor-pointer">{faq.question}</summary>
                <p className="text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
