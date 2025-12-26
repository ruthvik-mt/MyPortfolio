"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  label: string;
  suffix?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2,
  label,
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );

      if (progress < 1) {
        setCount(Math.floor(progress * end));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      className="text-center p-6 bg-transparent shadow-none border-none"
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        {count}
        {suffix}
      </div>

      <div className="text-foreground/70 mt-2">
        {label}
      </div>
    </motion.div>
  );
}
