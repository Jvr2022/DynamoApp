import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { FaqSection } from "@/components/faq-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <HeroSection />
      <FeaturesSection />
      <RoadmapSection />
      <FaqSection />
      <NewsletterSection />
      <CtaSection />
      <SiteFooter />
    </div>
  )
}

