"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [scrolled, setScrolled] = useState(false);
  const [featuresInView, setFeaturesInView] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > window.innerHeight);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Telefonda özellik bölümünde (telefon ve düğmeler) düğme üstlerine binmesin.
  useEffect(() => {
    const features = document.getElementById("features");
    if (!features) return;
    const observer = new IntersectionObserver(([entry]) => setFeaturesInView(Boolean(entry?.isIntersecting)));
    observer.observe(features);
    return () => observer.disconnect();
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Button
      onClick={scrollTop}
      size="icon"
      variant="outline"
      aria-label="Sayfanın başına dön"
      className={cn(
        "fixed right-4 bottom-20 z-50 size-11 rounded-full shadow-lg transition-opacity duration-300 md:right-6 md:bottom-6",
        scrolled ? "opacity-100" : "pointer-events-none opacity-0",
        featuresInView && "max-md:pointer-events-none max-md:opacity-0",
      )}
    >
      <ChevronUp className="size-5" />
    </Button>
  );
}
