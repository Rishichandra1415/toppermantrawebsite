"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { 
  X, 
  GraduationCap, 
  Trophy, 
  Lightbulb, 
  ChevronRight, 
  Info, 
  MessageSquare,
  Sparkles,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Users
} from "lucide-react";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const menuVariants: Variants = {
    closed: { x: "100%", transition: { type: "spring", damping: 30, stiffness: 300 } },
    open: { x: 0, transition: { type: "spring", damping: 25, stiffness: 200 } }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const menuItems = [
    { type: "link", name: "Home", href: "/", icon: Sparkles },
    {
      type: "accordion",
      id: "mentorship",
      label: "Mentorship",
      items: [
        { name: "Academic Mentorship", icon: GraduationCap, href: "/mentorship/academic" },
        { name: "Hackathon", icon: Trophy, href: "/mentorship/hackathon" },
        { name: "Entrepreneurship", icon: Lightbulb, href: "/mentorship/entrepreneurship" },
      ]
    },
    {
      type: "accordion",
      id: "join",
      label: "Join Us",
      items: [
        { name: "For Schools", href: "/join/school", icon: BookOpen },
        { name: "For Students", href: "/join/student", icon: Trophy },
      ]
    },
    { type: "link", name: "About Us", href: "/about", icon: Users },
    { type: "link", name: "Contact", href: "/contact", icon: MessageSquare },
  ];

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
            className="fixed inset-0 bg-white/40 backdrop-blur-md z-[100]"
          />

          {/* Sidebar */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 h-full w-full sm:w-[380px] bg-white shadow-[0_0_80px_rgba(0,0,0,0.08)] z-[101] flex flex-col overflow-hidden"
          >
            {/* Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />

            {/* Header */}
            <div className="flex items-center justify-between px-8 py-8 relative z-10">
              <span className="text-xl font-black text-[#0D0D0D] tracking-tight">TopperMantra</span>
              <button
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-black/5 hover:bg-black/5 transition-colors"
              >
                <X className="w-5 h-5 text-[#0D0D0D]" strokeWidth={1.5} />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 overflow-y-auto px-8 py-4 custom-scrollbar relative z-10">
              <div className="space-y-6">
                {menuItems.map((item: any, idx) => {
                  if (item.type === "link") {
                    return (
                      <motion.div key={item.name} custom={idx} variants={itemVariants}>
                        <Link
                          href={item.href}
                          className="flex items-center justify-between group py-2"
                          onClick={onClose}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-[#0D0D0D]/40 group-hover:bg-[#FF6B35]/10 group-hover:text-[#FF6B35] transition-all">
                              <item.icon size={18} />
                            </div>
                            <span className="text-lg font-bold text-[#0D0D0D]/80 group-hover:text-[#0D0D0D] transition-colors">{item.name}</span>
                          </div>
                          <ArrowRight size={18} className="text-slate-200 group-hover:text-[#FF6B35] transform translate-x-[-10px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                        </Link>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div key={item.id} custom={idx} variants={itemVariants} className="py-2">
                      <button 
                        onClick={() => setActiveAccordion(activeAccordion === item.id ? null : item.id)}
                        className="w-full flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${activeAccordion === item.id ? "bg-[#FF6B35]/10 text-[#FF6B35]" : "bg-slate-50 text-[#0D0D0D]/40 group-hover:bg-[#FF6B35]/10 group-hover:text-[#FF6B35]"}`}>
                            <ChevronRight size={18} className={`transition-transform duration-300 ${activeAccordion === item.id ? "rotate-90" : ""}`} />
                          </div>
                          <span className={`text-lg font-bold transition-colors ${activeAccordion === item.id ? "text-[#0D0D0D]" : "text-[#0D0D0D]/80 group-hover:text-[#0D0D0D]"}`}>{item.label}</span>
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {activeAccordion === item.id && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-4 space-y-4 ml-5 border-l border-black/5 pl-5"
                          >
                            {item.items.map((subItem: any, subIdx: number) => (
                              <Link
                                key={subIdx}
                                href={subItem.href}
                                className="flex items-center gap-4 group"
                                onClick={onClose}
                              >
                                <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-[#0D0D0D]/40 group-hover:bg-[#FF6B35]/10 group-hover:text-[#FF6B35] transition-colors">
                                  <subItem.icon size={14} />
                                </div>
                                <span className="text-[15px] font-bold text-[#0D0D0D]/70 group-hover:text-[#0D0D0D] transition-colors">{subItem.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Footer CTA */}
            <div className="p-8 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <Link
                  href="https://play.google.com/store/apps/details?id=com.support.toppers.mantra"
                  target="_blank"
                  className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-[#0D0D0D] text-white text-[11px] font-black uppercase tracking-widest hover:bg-[#FF6B35] transition-all shadow-xl active:scale-95"
                  onClick={onClose}
                >
                  Join TopperMantra <ExternalLink size={14} />
                </Link>
                <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Available on Play Store</p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
