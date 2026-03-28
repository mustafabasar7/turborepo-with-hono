"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FAQ_ITEMS } from "@/lib/constants";

export function FaqSection() {
  const half = Math.ceil(FAQ_ITEMS.length / 2);
  const leftItems = FAQ_ITEMS.slice(0, half);
  const rightItems = FAQ_ITEMS.slice(half);

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">SSS</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Sık Sorulan Sorular
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground text-lg">
            Aklınızdaki soruların cevaplarını burada bulabilirsiniz.
          </p>
        </div>

        {/* shadcn Accordion — MCP'den alındı, 2 sütun layout */}
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-x-12">
          <Accordion type="single" collapsible className="w-full">
            {leftItems.map((item, index) => (
              <AccordionItem key={index} value={`left-${index}`}>
                <AccordionTrigger className="text-left text-sm font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm flex flex-col gap-3 text-balance">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="hidden md:block">
            <Separator orientation="vertical" className="absolute h-full" />
          </div>

          <Accordion type="single" collapsible className="w-full">
            {rightItems.map((item, index) => (
              <AccordionItem key={index} value={`right-${index}`}>
                <AccordionTrigger className="text-left text-sm font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm flex flex-col gap-3 text-balance">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
