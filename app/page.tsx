"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [mounted, setMounted] = useState(false);

  const roles = ["Full Stack Developer", "Cybersecurity Enthusiast"];

  useEffect(() => {
    setMounted(true);

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typingSpeed = 90;
    const deletingSpeed = 50;
    const pauseAfterTyping = 1200;

    const typeEffect = () => {
      const currentRole = roles[roleIndex];

      if (!isDeleting) {
        setText(currentRole.slice(0, charIndex + 1));
        charIndex++;

        if (charIndex === currentRole.length) {
          setTimeout(() => {
            isDeleting = true;
          }, pauseAfterTyping);
        }
      } else {
        setText(currentRole.slice(0, charIndex - 1));
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
    };

    const interval = setInterval(
      typeEffect,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-background text-foreground transition-colors duration-300">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full"
            >
              <Code2 className="w-4 h-4 text-blue-500" />
              <span className="text-sm">Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Ruthvik M T
              </span>
            </motion.h1>

            {/* TYPEWRITER */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold h-10 flex items-center"
            >
              {text}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="inline-block w-0.5 h-8 bg-blue-500 ml-1"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg opacity-80 max-w-xl"
            >
              I build secure, scalable full-stack applications and enjoy turning
              complex problems into clean, user-focused solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass rounded-lg font-semibold transition-colors"
                >
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT SECTION (BIG IMAGE + GLOW) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            {/* Glow */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="
                absolute
                w-[420px] h-[420px]
                sm:w-[500px] sm:h-[500px]
                md:w-[560px] md:h-[560px]
                bg-gradient-to-r from-blue-500 to-purple-600
                rounded-full blur-3xl opacity-20
              "
            />

            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="
                relative
                w-[360px] h-[360px]
                sm:w-[440px] sm:h-[440px]
                md:w-[520px] md:h-[520px]
              "
            >
              <Image
                src="/coding.png"
                alt="Ruthvik M T"
                fill
                priority
                className="object-contain"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
