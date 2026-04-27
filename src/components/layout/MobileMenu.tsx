"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, Trophy, Lightbulb, ChevronRight } from "lucide-react";
import Link from "next/link";
import Button from "../common/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const joinUsItems = [
  { name: "For Schools", href: "/join/school", icon: GraduationCap },
  { name: "For Students", href: "/join/student", icon: Trophy },
];

const mentorshipItems = [
  { name: "Academic Mentorship", icon: GraduationCap, href: "/mentorship/academic" },
  { name: "Hackathon", icon: Trophy, href: "/mentorship/hackathon" },
  { name: "Entrepreneurship", icon: Lightbulb, href: "/mentorship/entrepreneurship" },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[99]"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[300px] bg-white shadow-2xl z-[100] p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-display font-black text-brand-600">TopperMantra</span>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <nav className="space-y-6 flex-1 overflow-y-auto">
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Mentorship</h3>
                <div className="space-y-3">
                  {mentorshipItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-brand-50 transition-colors group"
                      onClick={onClose}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-brand-600" />
                        <span className="font-medium text-gray-700">{item.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-brand-500 transform group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Join Us</h3>
                <div className="space-y-3">
                  {joinUsItems.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-brand-50 transition-colors group"
                      onClick={onClose}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-5 h-5 text-brand-600" />
                        <span className="font-medium text-gray-700">{item.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-brand-500 transform group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Links</h3>
                <div className="space-y-2">
                  {navLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="block py-2 text-lg font-medium text-gray-800 hover:text-brand-600 transition-colors"
                      onClick={onClose}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <Button className="w-full" size="lg">Join TopperMantra</Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
