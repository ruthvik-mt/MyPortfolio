"use client";

import { motion } from "framer-motion";

/* ===================== TYPES ===================== */

export interface JourneyItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  side: "left" | "right";
}

interface JourneyTimelineProps {
  heading: string;
  items: JourneyItem[];
}

/* ===================== COMPONENT ===================== */

export default function JourneyTimeline({
  heading,
  items,
}: JourneyTimelineProps) {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* BACKGROUND TEXT — dynamic & tuned for light / dark */}
      <h2
        className="
          absolute top-10 left-1/2 -translate-x-1/2
          text-[9rem] font-bold tracking-widest pointer-events-none
          text-muted-foreground/25
          dark:text-gray-500/20
          select-none
        "
      >
        JOURNEY
      </h2>

      {/* SECTION HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-32 relative z-30"
      >
        <h2 className="text-5xl md:text-6xl font-bold">
          MY{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {heading}
          </span>
        </h2>
      </motion.div>

      {/* CENTER LINE */}
      <div className="absolute left-1/2 top-[22rem] h-[calc(100%-22rem)] w-[2px] bg-blue-500/30 z-10" />

      {/* TIMELINE ITEMS */}
      <div className="relative max-w-6xl mx-auto z-20">
        {items.map((item, index) => (
          <div key={index} className="relative mb-40 min-h-[200px]">

            {/* YEAR */}
            <div
              className={`
                absolute top-1/2 -translate-y-1/2
                text-[7rem] font-bold pointer-events-none select-none
                text-muted-foreground/35
                dark:text-gray-400/30
                z-40
                ${item.side === "left" ? "left-[6%]" : "right-[6%]"}
              `}
            >
              {item.year}
            </div>

            {/* DOT */}
            <div
              className="
                absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-4 h-4 bg-blue-500 rounded-full
                border-4 border-background z-30
              "
            />

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: item.side === "left" ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative z-20 w-1/2 px-10 ${
                item.side === "left"
                  ? "ml-auto pl-24"
                  : "mr-auto pr-24 text-right"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-blue-500 font-semibold mb-4 uppercase tracking-wide">
                {item.subtitle}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  );
}
