"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "InboxFlow",
    description:
      "InboxFlow is a modern email management platform that aggregates multiple email accounts into a single intelligent inbox.",
    image: "/port1.png",
    tags: ["TypeScript", "Node.js", "React.js"],
    githubUrl: "https://github.com/ruthvik-mt/InboxFlow",
    liveUrl: "https://inbox-flow-ai.vercel.app/",
  },
  {
    id: 2,
    title: "Trackifi",
    description:
      "Trackifi is a personal finance web app that empowers users to manage spending, track expenses, set budgets, and gain financial insights through intuitive visualizations.",
    image: "/port2.png",
    tags: ["Java", "SpringBoot", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/ruthvik-mt/Trackifi",
    liveUrl: "https://trackifii.vercel.app/",
  },
  {
    id: 3,
    title: "Plantiva",
    description:
      "An AI-powered Web App for plant disease detection and health assessment designed to help farmers, gardeners and plant enthusiasts identify plant diseases by analyzing images.",
    image: "/port3.png",
    tags: ["Python", "Next.js", "Flask", "React.js"],
    githubUrl: "https://github.com/ruthvik-mt/Plantiva",
    liveUrl: "https://plant-iva.vercel.app/",
  },
  {
    id: 4,
    title: "ZKPass",
    description:
      "ZKPass is a secure authentication system that uses Zero-Knowledge Proofs (ZKPs) to verify user identities without revealing sensitive information.",
    image: "/port4.png",
    tags: ["ZKP", "Solidity", "Hardhat"],
    githubUrl:
      "https://github.com/ruthvik-mt/ZKPass-Passwordless-Authentication-with-Zero-Knowledge-Proofs",
    liveUrl: "",
  },
  {
    id: 5,
    title: "HelpNow Ai",
    description:
      "HelpNow AI is a life-saving web application that provides instant, step-by-step guidance for medical emergencies to help users and also handle critical situations when every second counts.",
    image: "/port5.png",
    tags: ["Next.js", "React.js", "Typescript", "AI"],
    githubUrl: "https://github.com/ruthvik-mt/helpnow-ai",
    liveUrl: "https://helpnow-ai.vercel.app/",
  },
  {
    id: 6,
    title: "MentorLink",
    description:
      "MentorLink is a full-stack web platform designed to streamline mentor-mentee interactions, enabling structured collaboration and effective communication through a clean and user-friendly interface.",
    image: "/port6.png",
    tags: ["MERN", "TailwindCSS"],
    githubUrl: "https://github.com/ruthvik-mt/MentorLink",
    liveUrl: "https://mentorlink-three.vercel.app/",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setProjects(mockProjects);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground transition-colors duration-300 overflow-hidden">

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
        PROJECTS
      </h2>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="mt-6 text-5xl md:text-6xl font-bold mb-4">
            MY{" "}
            <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              WORK
            </span>
          </h1>
        </motion.div>

        {/* CONTENT */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="glass rounded-xl overflow-hidden animate-pulse"
              >
                <div className="h-64 bg-foreground/10" />
                <div className="p-6 space-y-4">
                  <div className="h-6 bg-foreground/10 rounded" />
                  <div className="h-4 bg-foreground/10 rounded" />
                  <div className="h-4 bg-foreground/10 rounded w-3/4" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </div>
        )}

        {/* FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground/70">
            More projects coming soon! Check my{" "}
            <a
              href="https://github.com/ruthvik-mt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>{" "}
            for additional work.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
