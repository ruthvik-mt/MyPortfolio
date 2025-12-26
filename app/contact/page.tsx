"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import { Mail, Phone, Github, Linkedin, MapPin, Code2 } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9740658763",
    href: "tel:+919740658763",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ruthvikmt001@gmail.com",
    href: "mailto:ruthvikmt001@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Puttur, Karnataka, India",
    href: "#map",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ruthvik-mt",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ruthvikmt/",
    color: "hover:text-blue-600",
  },
  {
    icon: Code2,
    label: "LeetCode",
    href: "https://leetcode.com/u/ruthvik_mt/",
    color: "hover:text-orange-500",
  },
];

export default function Contact() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

  return (
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground overflow-hidden">

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
        CONTACT
      </h2>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="mt-6 text-5xl md:text-6xl font-bold mb-4">
            GET IN{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              TOUCH
            </span>
          </h1>
        </motion.div>

        {/* FORM + INFO */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">
                Send me a message
              </h2>
              <ContactForm />
            </div>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-xl space-y-6">
              <h2 className="text-2xl font-bold mb-6">
                Contact Information
              </h2>

              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-lg transition-colors group"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/70">
                      {item.label}
                    </div>
                    <div className="font-semibold">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* SOCIAL LINKS */}
            <div className="p-8 ml-0 md:ml-4 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">
                Follow Me
              </h2>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-4 rounded-lg transition-colors ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          id="map"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            My Location
          </h2>

          {apiKey ? (
            <GoogleMap apiKey={apiKey} />
          ) : (
            <div className="p-8 rounded-xl text-center">
              <p className="text-foreground/70">
                Google Maps API key not configured. Please add your API key to
                the <code className="mx-1">.env.local</code> file.
              </p>
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
}
