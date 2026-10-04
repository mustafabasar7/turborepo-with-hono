import { Navbar } from "@/components/layout/navbar";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { EarlyAccessSection } from "@/components/sections/early-access-section";
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

        <FeaturesSection />

        <EarlyAccessSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
        <DemoFormSection />
      </main>
      <Footer />
      <ScrollToTop />
      <MobileCtaBar />
    </>
  );
}
