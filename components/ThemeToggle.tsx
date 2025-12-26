"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-6 h-6 animate-pulse rounded-full bg-muted" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="
        relative
        flex items-center justify-center
        w-9 h-9
        rounded-full
        text-foreground
        transition-colors
        hover:text-blue-500
        focus:outline-none
      "
    >
      {/* Sun */}
      <motion.span
        initial={false}
        animate={{
          opacity: isDark ? 1 : 0,
          rotate: isDark ? 0 : 90,
          scale: isDark ? 1 : 0.5,
        }}
        transition={{ duration: 0.25 }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-white-500" />
      </motion.span>

      {/* Moon */}
      <motion.span
        initial={false}
        animate={{
          opacity: isDark ? 0 : 1,
          rotate: isDark ? -90 : 0,
          scale: isDark ? 0.5 : 1,
        }}
        transition={{ duration: 0.25 }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-black-500" />
      </motion.span>
    </motion.button>
  );
}
