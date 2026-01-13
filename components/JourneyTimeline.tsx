"use client";

import { motion } from "framer-motion";

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

export default function JourneyTimeline({
  heading,
  items,
}: JourneyTimelineProps) {
  return (
    <section className="relative py-28 sm:py-32 overflow-hidden">

      {/* BACKGROUND TEXT */}
      <h2
        className="absolute top-14 sm:top-6 left-1/2 -translate-x-1/2 text-[4.2rem] sm:text-[9rem] font-bold tracking-widest pointer-events-none text-muted-foreground/20 sm:text-muted-foreground/30 dark:text-gray-500/20 sm:dark:text-gray-500/20 select-none whitespace-nowrap"
      >
        JOURNEY
      </h2>

      {/* SECTION HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-32 relative z-30"
      >
        <h2 className="-mt-6 sm:-mt-4 lg:-mt-6 text-4xl sm:text-5xl md:text-6xl font-bold">
          MY{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {heading}
          </span>
        </h2>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative max-w-6xl mx-auto z-20 pt-10 pb-10">

        {/* CENTER LINE */}
        <div className="absolute left-1/2 top-[72px] bottom-20 w-[2px] bg-blue-500/30 -translate-x-1/2" />

        {items.map((item, index) => (
          <div
            key={index}
            className={`relative pt-10 ${
              index === items.length - 1 ? "mb-0" : "mb-64"
            }`}
          >

            {/* YEAR (moved slightly up + responsive) */}
            <div
              className={`
                absolute top-0 max-md:-top-6
                text-[4.5rem] md:text-[7rem] font-bold
                pointer-events-none select-none
                text-muted-foreground/40
                dark:text-gray-400/30
                z-40
                ${
                  item.side === "left"
                    ? "md:left-[6%]"
                    : "md:right-[6%]"
                }
                max-md:left-1/2 max-md:-translate-x-1/2
              `}
            >
              {item.year}
            </div>

            {/* DOT */}
            <div
              className="
                absolute left-1/2 top-20
                -translate-x-1/2
                w-4 h-4 bg-blue-500 rounded-full
                border-4 border-background z-30
              "
            />

            {/* CONTENT (responsive only) */}
            <motion.div
              initial={{ opacity: 0, x: item.side === "left" ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`
                relative z-20
                w-full md:w-1/2
                px-6 md:px-10
                max-md:mt-16
                max-md:text-center
                ${
                  item.side === "left"
                    ? "md:ml-auto md:pl-24 md:text-left"
                    : "md:mr-auto md:pr-24 md:text-right"
                }
              `}
            >
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-blue-500 font-semibold mb-1 uppercase tracking-wide">
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
