import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AnnouncementBanner } from "@/components/sections/announcement-banner";
import { HeroSection } from "@/components/sections/hero-section";
import { LogoMarqueeSection } from "@/components/sections/logo-marquee-section";
import { StatsSection } from "@/components/sections/stats-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ComparisonTableSection } from "@/components/sections/comparison-table-section";
import { ProductShowcaseSection } from "@/components/sections/product-showcase-section";
import { VideoDemoSection } from "@/components/sections/video-demo-section";
import { RoiCalculatorSection } from "@/components/sections/roi-calculator-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { IntegrationsSection } from "@/components/sections/integrations-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { DemoFormSection } from "@/components/sections/demo-form-section";

export default function HomePage() {
  return (
    <>
      <AnnouncementBanner />
      <Navbar />
      <main>
        <HeroSection />
        <LogoMarqueeSection />
        <StatsSection />
        <FeaturesSection />
        <ComparisonTableSection />
        <ProductShowcaseSection />
        <VideoDemoSection />
        <RoiCalculatorSection />
        <HowItWorksSection />
        <IntegrationsSection />
        <SocialProofSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
        <DemoFormSection />
      </main>
      <Footer />
    </>
  );
}
