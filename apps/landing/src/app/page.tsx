import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ProductShowcaseSection } from "@/components/sections/product-showcase-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaSection } from "@/components/sections/cta-section";
import { DemoFormSection } from "@/components/sections/demo-form-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <ProductShowcaseSection />
        <HowItWorksSection />
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
