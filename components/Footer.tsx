"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const socials = [
  {
    icon: Github,
    href: "https://github.com/ruthvik-mt",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ruthvikmt/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=ruthvikmt001@gmail.com&su=Portfolio%20Contact",
    label: "Email",
  },
];

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mt-20 bg-background text-foreground"
    >
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-4 mb-4">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
              className="p-2 glass rounded-lg hover:text-blue-500 transition-colors"
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-xs text-foreground/60">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium">Ruthvik M T</span>. All rights reserved.
        </div>

      </div>
    </motion.footer>
  );
}
