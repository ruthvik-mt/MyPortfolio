"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Journey", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300
        ${scrolled
          ? "bg-background/80 backdrop-blur-md shadow-lg"
          : "bg-background/70 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-foreground">
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 relative">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link key={item.path} href={item.path}>
                  <div className="relative group py-1">
                    <span
                      className={`font-medium transition-colors
                        ${
                          isActive
                            ? "text-foreground"
                            : "text-foreground/70 group-hover:text-foreground"
                        }`}
                    >
                      {item.name}
                    </span>

                    {/* Animated underline */}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-underline"
                        className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover underline */}
                    {!isActive && (
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-full" />
                    )}
                  </div>
                </Link>
              );
            })}

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-foreground/10 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-t border-foreground/10"
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="py-2">
                      <span
                        className={`font-medium ${
                          isActive
                            ? "text-blue-500"
                            : "text-foreground/80"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
