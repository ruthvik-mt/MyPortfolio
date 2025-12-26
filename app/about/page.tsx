"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Award, BookOpen, Code, Trophy } from "lucide-react";

const stats = [
  { end: 10, label: "Projects Completed", suffix: "+" },
  { end: 5, label: "Hackathons", suffix: "+" },
  { end: 2, label: "Open Source Contributions", suffix: "+" },
  { end: 5, label: "Achievements", suffix: "+" },
  { end: 1, label: "Publications", suffix: "" },
];

const highlights = [
  {
    icon: Trophy,
    title: "Award Winner",
    description: "Hackathons and Technical Competitions",
  },
  {
    icon: Code,
    title: "Open Source",
    description: "Contributed to major open source projects",
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
    description: "Exploring new technologies and frameworks",
  },
  {
    icon: Award,
    title: "Certified",
    description: "Earned Certifications and Credentials",
  },
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-background text-foreground pt-12 pb-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 overflow-hidden">
      
      {/* BACKGROUND TEXT */}
      <h2
        className="
          absolute top-6 left-1/2 -translate-x-1/2
          text-[9rem] font-bold tracking-widest pointer-events-none
          text-muted-foreground/25
          dark:text-gray-500/20
          select-none
        "
      >
        ABOUT
      </h2>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 space-y-2"
        >
          <h1 className="mt-12 text-5xl md:text-6xl font-bold text-foreground">
            ABOUT{" "}
            <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              ME
            </span>
          </h1>
        </motion.div>

        {/* IMAGE + TEXT */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-80 h-80 flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20"
              />

              <Image
                src="/profile2.png"
                alt="Profile"
                fill
                priority
                className="rounded-full object-contain p-1 shadow-2xl relative z-10 translate-x-12 scale-[1.3]"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 max-w-prose"
          >
            <h2 className="text-3xl font-bold">Professional Journey</h2>

            <p className="text-lg text-foreground/75 leading-relaxed text-justify">
              I'm a passionate full-stack developer who enjoys building scalable web applications that solve real-world problems. My work spans both frontend and backend development, allowing me to focus on creating smooth user experiences while ensuring performance, security and maintainability behind the scenes.
            </p>

            <p className="text-lg text-foreground/75 leading-relaxed text-justify">
              My interest in technology started with a simple curiosity about how things work and it has grown into a strong commitment to continuous learning and innovation. Through projects, hackathons and open-source contributions, I've developed a practical approach to solving complex challenges in collaborative environments.
            </p>

            <p className="text-lg text-foreground/75 leading-relaxed text-justify">
             Outside of coding, I spend time contributing to open source, participating in hackathons and sharing knowledge with the developer community experiences that keep me motivated and constantly improving.
            </p>
          </motion.div>
        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            ACHIEVEMENTS & MILESTONES
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                end={stat.end}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </motion.div>

        {/* HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            HIGHLIGHTS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -6 }}
                className="p-8 rounded-2xl text-center space-y-4 bg-transparent border-none shadow-none"
              >
                <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
