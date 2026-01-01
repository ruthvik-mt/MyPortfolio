"use client";

import { motion } from "framer-motion";
import JourneyTimeline, { JourneyItem } from "@/components/JourneyTimeline";

/* ===================== EXPERIENCE DATA ===================== */

const experienceData: JourneyItem[] = [
  {
    year: "2026",
    title: "Software Engineering Intern",
    subtitle: "TrueByte Innovation LLP",
    description: "Present",
    side: "left",
  },
  {
    year: "2025",
    title: "Technical Intern (Cybersecurity)",
    subtitle: "Torsecure Cyber LLP",
    description:
      "Worked on web application security, vulnerability assessments, authentication and authorization flow analysis, and network traffic monitoring.",
    side: "right",
  },
  {
    year: "2025",
    title: "Open Source Contributor",
    subtitle: "Scribe Org",
    description:
      "Contributed to accessibility, internationalization, UI refinements, and performance improvements in a distributed open-source team.",
    side: "left",
  },
  // {
  //   year: "2025",
  //   title: "Open Source Contributor",
  //   subtitle: "Activist Org",
  //   description:
  //     "Contributed improvements to internal tooling, helping ensure smoother workflows and better consistency across development environments.",
  //   side: "right",
  // },
];

/* ===================== EDUCATION DATA ===================== */

const educationData: JourneyItem[] = [
  {
    year: "2020",
    title: "High School Graduate",
    subtitle: "Jawahar Navodaya Vidyalaya",
    description:
      "Developed strong academic fundamentals while nurturing personal growth in a disciplined learning environment.",
    side: "left",
  },
  {
    year: "2022",
    title: "Pre University Graduate",
    subtitle: "Jawarhar Navodaya Vidyalaya",
    description:
      "Built a solid foundation in science and problem-solving, developing a strong interest in science.",
    side: "right",
  },
  {
    year: "2026",
    title: "Bachelor of Engineering",
    subtitle: "Sahyadri College of Engineering and Management",
    description:
      "Specialized in computer science, software development and advanced programming concepts through academics and projects.",
    side: "left",
  },
];

/* ===================== PAGE ===================== */

export default function Experience() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

      {/* EXPERIENCE */}
      <JourneyTimeline heading="EXPERIENCE" items={experienceData} />

      {/* EDUCATION */}
      <JourneyTimeline heading="EDUCATION" items={educationData} />

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto my-32 px-4 text-center p-10"
      >
        <h3 className="text-3xl font-bold mb-4">
          Looking for Opportunities
        </h3>
        <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your vision. Let's build something
          impactful together.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
        >
          Get in Touch
        </motion.a>
      </motion.div>

    </div>
  );
}
