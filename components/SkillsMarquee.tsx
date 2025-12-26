"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface Skill {
  name: string;
  icon: string;
}

interface SkillsMarqueeProps {
  skills: Skill[];
  direction?: "left" | "right";
}

export default function SkillsMarquee({
  skills,
  direction = "left",
}: SkillsMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="relative overflow-hidden py-10">
      <motion.div
        className="flex gap-10 w-max"
        animate={
          isPaused
            ? {}
            : {
                x:
                  direction === "left"
                    ? ["0%", "-50%"]
                    : ["-50%", "0%"],
              }
        }
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedSkills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="shrink-0 rounded-2xl px-8 py-6 w-56 text-center space-y-4"
          >
            {/* ICON */}
            <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-xl">
              <Image
                src={skill.icon}
                alt={skill.name}
                width={56}
                height={56}
                className="object-contain"
              />
            </div>

            {/* NAME */}
            <div className="font-semibold text-base">
              {skill.name}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
