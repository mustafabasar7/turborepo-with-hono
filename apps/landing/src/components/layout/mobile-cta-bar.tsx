"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Telefonda altta yapışık "Demo Talep Et" çubuğu. İlk ekran geçilince çıkar, form görünürken gizlenir. */
export function MobileCtaBar() {
  const [pastHero, setPastHero] = useState(false);
  const [formInView, setFormInView] = useState(false);

  useEffect(() => {
    function onScroll() {
      setPastHero(window.scrollY > window.innerHeight * 0.8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const form = document.getElementById("demo");
    if (!form) return;
    const observer = new IntersectionObserver(([entry]) => setFormInView(Boolean(entry?.isIntersecting)));
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !formInView;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-sm transition-transform duration-300 md:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
      aria-hidden={!visible}
    >
      <Button size="lg" className="min-h-11 w-full text-base" asChild>
        <Link href="#demo" tabIndex={visible ? 0 : -1}>
          Ücretsiz Demo Talep Et
        </Link>
      </Button>
    </div>
  );
}
