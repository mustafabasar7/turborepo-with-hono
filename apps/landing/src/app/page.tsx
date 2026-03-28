import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { LogoMarqueeSection } from "@/components/sections/logo-marquee-section";
import { StatsSection } from "@/components/sections/stats-section";
import { LiveCounterSection } from "@/components/sections/live-counter-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { BentoGridSection } from "@/components/sections/bento-grid-section";
import { ComparisonTableSection } from "@/components/sections/comparison-table-section";
import { ProductShowcaseSection } from "@/components/sections/product-showcase-section";
import { VideoDemoSection } from "@/components/sections/video-demo-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { MobileSection } from "@/components/sections/mobile-section";
import { IntegrationsSection } from "@/components/sections/integrations-section";
import { SecuritySection } from "@/components/sections/security-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { QuickWinsSection } from "@/components/sections/quick-wins-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TimelineSection } from "@/components/sections/timeline-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { DemoFormSection } from "@/components/sections/demo-form-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogoMarqueeSection />
        <StatsSection />
        <LiveCounterSection />
        <FeaturesSection />
        <BentoGridSection />
        <ComparisonTableSection />
        <ProductShowcaseSection />
        <VideoDemoSection />
        <UseCasesSection />
        <HowItWorksSection />
        <MobileSection />
        <IntegrationsSection />
        <SecuritySection />
        <SocialProofSection />
        <QuickWinsSection />
        <PricingSection />
        <TimelineSection />
        <FaqSection />
        <CtaSection />
        <DemoFormSection />
      </main>
      <Footer />
    </>
  );
}
