import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { FaqSection } from "@/components/sections/faq-section";
import { DemoFormSection } from "@/components/sections/demo-form-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FaqSection />
        <CtaSection />
        <DemoFormSection />
      </main>
      <Footer />
    </>
  );
}
