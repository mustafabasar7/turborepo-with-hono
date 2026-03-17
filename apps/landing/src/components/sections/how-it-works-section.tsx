import React from "react";
import { Separator } from "@/components/ui/separator";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            4 Adımda Başlayın
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg">
            Dakikalar içinde kurulum yapın, projelerinizi hemen yönetmeye
            başlayın.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <div key={step.step} className="flex md:flex-col items-start md:items-center gap-4 md:gap-0">
                {/* Step content */}
                <div className="flex md:flex-col items-start md:items-center gap-4 w-full">
                  <div className="flex-shrink-0 md:mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="md:text-center">
                    <h3 className="font-semibold text-base mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector — hidden on last item */}
                {index < HOW_IT_WORKS_STEPS.length - 1 && (
                  <>
                    {/* Mobile: vertical line */}
                    <div className="md:hidden ml-6 my-1">
                      <Separator orientation="vertical" className="h-8" />
                    </div>
                    {/* Desktop: horizontal separator */}
                    <div className="hidden md:block absolute" />
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Desktop connector line */}
          <div className="hidden md:flex items-center justify-between px-6 -mt-8 mb-4 relative z-0">
            {HOW_IT_WORKS_STEPS.slice(0, -1).map((step) => (
              <div key={step.step} className="flex-1 mx-4">
                <Separator className="border-dashed" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
