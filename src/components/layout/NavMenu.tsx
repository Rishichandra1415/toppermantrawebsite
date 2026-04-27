"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, GraduationCap, Trophy, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";

const mentorshipItems = [
  {
    title: "Academic Mentorship",
    description: "Personalized guidance for your academic excellence.",
    icon: GraduationCap,
    href: "/mentorship/academic",
  },
  {
    title: "Hackathon",
    description: "Master the art of competitive coding and building.",
    icon: Trophy,
    href: "/mentorship/hackathon",
  },
  {
    title: "Entrepreneurship",
    description: "Turn your ideas into scalable business ventures.",
    icon: Lightbulb,
    href: "/mentorship/entrepreneurship",
  },
];

const joinUsItems = [
  {
    title: "For Schools",
    description: "Partner with us to provide elite mentorship to your students.",
    icon: GraduationCap,
    href: "/join/school",
  },
  {
    title: "For Students",
    description: "Join India's most elite circle of toppers and achievers.",
    icon: Trophy,
    href: "/join/student",
  },
];

export const NavLink = ({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) => {
  return (
    <Link
      href={href}
      className={`relative px-3 py-2 text-sm font-bold transition-colors duration-300 hover:text-brand-500 ${
        active ? "text-brand-600" : "text-gray-900"
      }`}
    >
      <motion.span
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.span>
      {active && (
        <motion.div
          layoutId="active-nav-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-500 rounded-full"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
};

export const MentorshipMegaMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`flex items-center gap-1 px-3 py-2 text-sm font-bold transition-colors duration-300 hover:text-brand-500 ${
          isHovered ? "text-brand-600" : "text-gray-900"
        }`}
      >
        Mentorship
        <motion.div
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[450px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 overflow-hidden"
          >
            <div className="grid gap-6">
              {mentorshipItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-brand-50"
                >
                  <div className="p-2.5 bg-brand-100 rounded-lg text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                        {item.title}
                      </h4>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-500" />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const JoinUsMegaMenu = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`flex items-center gap-1 px-3 py-2 text-sm font-bold transition-colors duration-300 hover:text-brand-500 ${
          isHovered ? "text-brand-600" : "text-gray-900"
        }`}
      >
        Join Us
        <motion.div
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 z-50 overflow-hidden"
          >
            <div className="grid gap-6">
              {joinUsItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="group flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-brand-50"
                >
                  <div className="p-2.5 bg-brand-100 rounded-lg text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                        {item.title}
                      </h4>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-500" />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
