"use client";

import { motion } from "framer-motion";
import SkillsMarquee from "@/components/SkillsMarquee";

const techStack = [
  // Core Web
  { name: "HTML5", icon: "/icons/html.png" },
  { name: "CSS3", icon: "/icons/css.png" },
  { name: "JavaScript", icon: "/icons/javascript.png" },
  { name: "TypeScript", icon: "/icons/typescript.png" },

  // Frontend Frameworks & Styling
  { name: "React", icon: "/icons/react.png" },
  { name: "Next.js", icon: "/icons/nextjs.png" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.png" },

  // Backend & Server-side
  { name: "Node.js", icon: "/icons/node.png" },
  { name: "Express.js", icon: "/icons/express.png" },
  { name: "Spring Boot", icon: "/icons/spring.png" },

  // Programming Languages
  { name: "Java", icon: "/icons/java.png" },
  { name: "Python", icon: "/icons/python.png" },

  // Databases
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "PostgreSQL", icon: "/icons/postgre.png" },

  // DevOps & Tools
  { name: "Git", icon: "/icons/git.png" },
  { name: "GitHub", icon: "/icons/github.png" },
  { name: "Docker", icon: "/icons/docker.png" },
  { name: "Postman", icon: "/icons/postman.png" },
  { name: "VS Code", icon: "/icons/vscode.png" },

  // Cloud & OS
  { name: "AWS", icon: "/icons/aws.png" },
  { name: "Linux", icon: "/icons/linux.png" },
];


export default function Skills() {
  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">

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
        SKILLS
      </h2>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="mt-6 text-5xl md:text-6xl font-bold mb-4">
            TECH{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              STACK
            </span>
          </h1>
        </motion.div>

        {/* SINGLE MARQUEE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <SkillsMarquee skills={techStack} direction="left" />
        </motion.div>

        {/* FOOTER SECTION – NO BORDER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-justify leading-relaxed">
           I continuously strengthen my skills by working with modern development tools and frameworks.
           My current focus is on full-stack web development, learning Web3 fundamentals and gaining
           practical exposure to cloud and containerized environments.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
