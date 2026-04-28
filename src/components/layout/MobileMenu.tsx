"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, Trophy, Lightbulb, ChevronRight, Info, MessageSquare } from "lucide-react";
import Link from "next/link";
import Button from "../common/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: "Home", href: "/", icon: Info },
  { name: "About Us", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: MessageSquare },
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
  const [isMentorshipOpen, setIsMentorshipOpen] = React.useState(false);
  const [isJoinUsOpen, setIsJoinUsOpen] = React.useState(false);

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
              <span className="text-xl font-display font-black text-brand-600 tracking-tight">TopperMantra</span>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            <nav className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {/* Mentorship Dropdown Section */}
              <div>
                <button 
                  onClick={() => setIsMentorshipOpen(!isMentorshipOpen)}
                  className="w-full flex items-center justify-between py-2 text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-brand-600 transition-colors"
                >
                  Mentorship
                  <motion.div
                    animate={{ rotate: isMentorshipOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isMentorshipOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="space-y-3 overflow-hidden"
                    >
                      {mentorshipItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-brand-50 transition-colors group"
                          onClick={onClose}
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-white rounded-lg shadow-sm">
                              <item.icon className="w-4 h-4 text-brand-600" />
                            </div>
                            <span className="font-medium text-sm text-gray-700">{item.name}</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-brand-500 transform group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Join Us Dropdown Section */}
              <div>
                <button 
                  onClick={() => setIsJoinUsOpen(!isJoinUsOpen)}
                  className="w-full flex items-center justify-between py-2 text-xs font-bold text-gray-400 uppercase tracking-widest hover:text-brand-600 transition-colors"
                >
                  Join Us
                  <motion.div
                    animate={{ rotate: isJoinUsOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {isJoinUsOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="space-y-3 overflow-hidden"
                    >
                      {joinUsItems.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-brand-50 transition-colors group"
                          onClick={onClose}
                        >
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 bg-white rounded-lg shadow-sm">
                              <item.icon className="w-4 h-4 text-brand-600" />
                            </div>
                            <span className="font-medium text-sm text-gray-700">{item.name}</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-brand-500 transform group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Links</h3>
                <div className="space-y-3">
                  {navLinks.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-brand-50 transition-all group"
                      onClick={onClose}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-white rounded-lg shadow-sm">
                          <link.icon className="w-4 h-4 text-brand-600" />
                        </div>
                        <span className="font-medium text-sm text-gray-700">{link.name}</span>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-brand-500 transform group-hover:translate-x-0.5 transition-all" />
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
