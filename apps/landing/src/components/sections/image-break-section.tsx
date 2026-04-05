"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ImageBreakSectionProps {
  src: string;
  height?: number; // px
  position?: string;
}

export function ImageBreakSection({
  src,
  height = 420,
  position = "center",
}: ImageBreakSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Görsel solmaz — fade sadece kenar geçişleri için değil, sadece parallax var
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height }}
      aria-hidden="true"
    >
      <motion.div className="absolute inset-0" style={{ opacity }}>
        {/* Parallax: görsel scroll'dan %16 yavaş hareket eder */}
        <motion.div className="absolute inset-[-8%]" style={{ y }}>
          <Image
            src={src}
            alt=""
            fill
            sizes="100vw"
            className={`object-cover object-${position}`}
          />
        </motion.div>

        {/* Üst ve alt gradient — adjacent section'larla yumuşak geçiş */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </motion.div>
    </div>
  );
}
