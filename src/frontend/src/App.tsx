import { Toaster } from "@/components/ui/sonner";
import { useEffect, useRef, useState } from "react";
import { BeforeAfterSection } from "./components/BeforeAfterSection";
import { ExitIntentPopup } from "./components/ExitIntentPopup";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { IngredientsSection } from "./components/IngredientsSection";
import { Navbar } from "./components/Navbar";
import { OfferSection } from "./components/OfferSection";
import { OrderFormSection } from "./components/OrderFormSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { StickyOrderCTA } from "./components/StickyOrderCTA";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { TrustSection } from "./components/TrustSection";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const exitShownRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyCTA(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("exitPopupShown");
    if (alreadyShown) return;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitShownRef.current) {
        exitShownRef.current = true;
        setShowExitPopup(true);
        sessionStorage.setItem("exitPopupShown", "1");
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <div className="font-poppins min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <IngredientsSection />
        <BeforeAfterSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <TrustSection />
        <OfferSection />
        <OrderFormSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
      {showStickyCTA && <StickyOrderCTA />}
      {showExitPopup && (
        <ExitIntentPopup onClose={() => setShowExitPopup(false)} />
      )}
      <Toaster position="top-center" richColors />
    </div>
  );
}
