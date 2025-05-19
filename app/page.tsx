import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero-section";
import WhatIsSection from "@/components/sections/what-is-section";
import WhySection from "@/components/sections/why-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import FaqSection from "@/components/sections/faq-section";
import CtaSection from "@/components/sections/cta-section";
import FooterSection from "@/components/sections/footer-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <WhySection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}
