"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import {
  Sparkles, ArrowDown, GraduationCap, Target, Zap,
  Microscope, Atom, PenTool, Code, Rocket, Briefcase, Lightbulb,
  CheckCircle2, ShieldCheck, Trophy, Cpu, Search, Users, BarChart,
  MessageCircle, Star, ArrowRight, Check,
  Settings, ExternalLink, Award, Clock, BookOpen, TrendingUp, ChevronDown
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, type Variants } from "framer-motion";

// ─────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// ─────────────────────────────────────────────
// MAGNETIC BUTTON
// ─────────────────────────────────────────────
const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// MENTOR CARD — PREMIUM REDESIGN
// ─────────────────────────────────────────────
interface MentorCardProps {
  mentor: {
    name: string;
    role: string;
    image: string;
    tags: string[];
    bio: string;
    type: string;
    stats?: { label: string; value: string; icon: any }[];
  };
}

const TYPE_ACCENT: Record<string, string> = {
  academic: "#4F46E5",
  hackathon: "#FF6B35",
  entrepreneurship: "#059669",
};

const TYPE_BG: Record<string, string> = {
  academic: "bg-indigo-50",
  hackathon: "bg-orange-50",
  entrepreneurship: "bg-emerald-50",
};

export const MentorCard = ({ mentor }: MentorCardProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const accent = TYPE_ACCENT[mentor.type] || "#FF6B35";
  const defaultStats = [
    { label: "Students", value: "150+", icon: Users },
    { label: "Rating", value: "4.9★", icon: Star },
    { label: "Experience", value: "4+ Yrs", icon: GraduationCap },
  ];
  const stats = mentor.stats || defaultStats;
  const appLink = "https://play.google.com/store/apps/details?id=com.support.toppers.mantra";

  return (
    <motion.div
      layout
      initial={false}
      className="group relative bg-white rounded-[1.5rem] border border-black/[0.06] overflow-hidden hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] transition-all duration-300 font-sans w-full"
    >
      {/* Collapsed State / Header */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-colors"
      >
        <div className="flex items-center gap-4 min-w-0">
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <Image src={mentor.image} alt={mentor.name} fill className="object-cover" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-sm" style={{ backgroundColor: accent }}>
              <Check className="w-2 h-2 text-white" strokeWidth={4} />
            </div>
          </div>
          
          <div className="min-w-0">
            <h3 className="text-[#0D0D0D] text-sm font-black truncate">{mentor.name}</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate">{mentor.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-white text-[9px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-md active:scale-95 shrink-0"
            style={{ background: accent, boxShadow: `0 4px 12px -2px ${accent}40` }}
          >
            <MessageCircle className="w-3 h-3" /> Connect
          </a>
          
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="text-slate-300"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </div>

      {/* Mobile Connect Button (visible only when collapsed or expanded on mobile if needed, but keeping it simple) */}
      <div className="sm:hidden px-4 pb-4">
        <a 
          href={appLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white text-[9px] font-black uppercase tracking-widest"
          style={{ background: accent }}
        >
          <MessageCircle className="w-3.5 h-3.5" /> Connect
        </a>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 pt-2 border-t border-black/[0.03]">
              <div className="flex flex-col gap-5">
                {/* Stats Row */}
                <div className="flex flex-wrap gap-2">
                  {stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F7F7F5] border border-black/[0.04]">
                      <stat.icon className="w-3 h-3 text-slate-400" strokeWidth={2.5} style={{ color: isOpen ? accent : '' }} />
                      <div className="flex flex-col">
                        <span className="text-[7px] font-bold text-slate-400 uppercase tracking-widest leading-none">{stat.label}</span>
                        <span className="text-[10px] font-black text-[#0D0D0D] leading-tight mt-0.5">{stat.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bio */}
                <div>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-light">
                    {mentor.bio}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {mentor.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 rounded-md text-[9px] font-semibold border"
                      style={{ backgroundColor: `${accent}08`, color: accent, borderColor: `${accent}15` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* View Profile Link */}
                <div className="pt-2">
                   <button className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5 hover:text-[#0D0D0D] transition-colors">
                     View Complete Profile <ArrowRight className="w-3 h-3" />
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// MOCK MENTORS
// ─────────────────────────────────────────────
const MOCK_MENTORS = [
  {
    name: "Yugansh Sharma",
    role: "Founder, Dosaka Hospitality Pvt. Ltd.",
    type: "entrepreneurship",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yugansh",
    tags: ["Career Advice", "Idea Validation", "Growth Marketing", "Fundraising"],
    bio: "Passionate restaurateur and entrepreneur. Driving force behind DOSAKA, Rajasthan's biggest South Indian dining chain. Expert in scaling hospitality ventures from 0 to 1.",
    stats: [
      { label: "Mentored", value: "80+", icon: Users },
      { label: "Rating", value: "5.0★", icon: Star },
      { label: "Ventures", value: "3 Live", icon: Briefcase },
    ],
  },
  {
    name: "Ananya Iyer",
    role: "IIT Delhi | AIR 42 JEE Advanced",
    type: "academic",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
    tags: ["JEE Strategy", "Physics Mastery", "Mindset Coaching", "Test Series"],
    bio: "Helping students navigate the intense pressure of competitive exams. My focus is on conceptual clarity and building a winning mindset that survives the toughest exam days.",
    stats: [
      { label: "Students", value: "200+", icon: Users },
      { label: "Rating", value: "4.9★", icon: Star },
      { label: "Experience", value: "3 Yrs", icon: GraduationCap },
    ],
  },
  {
    name: "Vikram Das",
    role: "Full Stack Lead | SIH Grand Winner",
    type: "hackathon",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    tags: ["Web3", "System Design", "Pitching", "DevOps"],
    bio: "Smart India Hackathon winner and veteran of 30+ hackathons. Expert in building scalable MVPs and delivering winning technical pitches under pressure.",
    stats: [
      { label: "Students", value: "120+", icon: Users },
      { label: "Rating", value: "4.8★", icon: Star },
      { label: "Hackathons", value: "30+", icon: Trophy },
    ],
  },
];

// ─────────────────────────────────────────────
// MENTOR LIST SECTION
// ─────────────────────────────────────────────
interface MentorListProps {
  type?: string;
}

const MENTOR_SECTION_META: Record<string, { label: string; badge: string; desc: string }> = {
  academic: {
    label: "Academic",
    badge: "AIR Rankers & Toppers",
    desc: "Learn directly from those who aced JEE & NEET. Curated mentors with proven track records.",
  },
  hackathon: {
    label: "Hackathon",
    badge: "National Winners Network",
    desc: "Get guided by serial hackathon winners who know exactly what it takes to build and win.",
  },
  entrepreneurship: {
    label: "Entrepreneurship",
    badge: "Founders & Operators",
    desc: "Real-world founders who've built, scaled, and raised. No theory — only lived experience.",
  },
};

export const MentorList = ({ type = "academic" }: MentorListProps) => {
  const filteredMentors = MOCK_MENTORS.filter((m) => m.type === type);
  const meta = MENTOR_SECTION_META[type] || MENTOR_SECTION_META.academic;
  const accent = TYPE_ACCENT[type] || "#FF6B35";

  return (
    <section className="py-16 md:py-20 bg-[#F7F7F5] font-sans border-t border-black/[0.05] relative overflow-hidden">
      {/* Subtle blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 -top-20 -left-20"
          style={{ backgroundColor: accent }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-10 md:mb-12"
        >
          <motion.div
            variants={fadeUpVariant}
            className="inline-flex items-center gap-2.5 mb-4 px-4 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-[0.25em]"
            style={{ borderColor: `${accent}30`, color: accent, backgroundColor: `${accent}08` }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accent }} />
            {meta.badge}
          </motion.div>

          <motion.h2
            variants={fadeUpVariant}
            className="premium-h2 text-[#0D0D0D] text-2xl sm:text-3xl font-black mb-3"
          >
            Meet Your{" "}
            <span style={{ color: accent }}>{meta.label}</span> Mentors
          </motion.h2>

          <motion.p variants={fadeUpVariant} className="premium-p text-slate-500 text-sm max-w-xl">
            {meta.desc}
          </motion.p>
        </motion.div>

        {/* Mentor Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-5"
        >
          {filteredMentors.map((mentor, index) => (
            <motion.div key={index} variants={fadeUpVariant}>
              <MentorCard mentor={mentor} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="mt-10 text-center"
        >
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.25em] mb-5">
            Can't find the right fit?
          </p>
          <MagneticButton className="inline-block">
            <button
              className="px-10 py-4 rounded-full text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl transition-all hover:brightness-110 active:scale-95"
              style={{
                background: `linear-gradient(135deg, #0D0D0D 0%, #1a1a1a 100%)`,
                boxShadow: `0 16px 40px -8px rgba(0,0,0,0.25)`,
              }}
            >
              Browse All Mentors
            </button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// DETAILS SECTION DATA
// ─────────────────────────────────────────────
const DETAILS_CONTENT: Record<string, any> = {
  academic: {
    badge: "The TopperMantra Framework",
    title: ["A Strategic Roadmap", "To Academic Mastery."],
    desc: "We provide a proven architecture for success, built on the exact habits and mental models used by AIR rankers.",
    features: [
      { icon: Search, title: "Strategic Audit", desc: "Identify high-yield topics to maximize your scores with precision." },
      { icon: Cpu, title: "Mental Models", desc: "Frameworks for rapid data retention and advanced problem solving." },
      { icon: Trophy, title: "Exam Mastery", desc: "Psychological conditioning to perform under extreme pressure." },
      { icon: ShieldCheck, title: "Daily Success", desc: "A rigorous feedback loop that keeps you on the target trajectory." },
    ],
    stats: [
      { label: "Success Velocity", val: "94%", desc: "Average percentile jump in 6 months." },
      { label: "Elite Mentors", val: "100+", desc: "Exclusively AIR rankers and toppers." },
      { label: "Personalized Support", val: "24/7", desc: "Always available for critical doubt clearing." },
    ],
    cta: "Start Your Success Audit",
  },
  hackathon: {
    badge: "The Builder Framework",
    title: ["Mastering Product", "Innovation at Speed."],
    desc: "Our hackathon mentorship focuses on turning raw code into award-winning products through engineering excellence.",
    features: [
      { icon: Code, title: "Architecture", desc: "Learn to design scalable systems that impress technical judges." },
      { icon: Zap, title: "Rapid MVP", desc: "Frameworks for building complex features in hours, not days." },
      { icon: Rocket, title: "Winning Pitch", desc: "Master the art of presenting technical value to non-tech judges." },
      { icon: ShieldCheck, title: "Code Audit", desc: "Continuous review of your codebase for performance and security." },
    ],
    stats: [
      { label: "Finalist Rate", val: "85%", desc: "Of our students make it to grand finales." },
      { label: "Products Built", val: "200+", desc: "Live products deployed during our mentorship." },
      { label: "Prize Pool", val: "₹50L+", desc: "Cumulative prizes won by our mentored teams." },
    ],
    cta: "Join the Hacker Cohort",
  },
  entrepreneurship: {
    badge: "The Founder's Journey",
    title: ["Scaling Ideas", "Into Reality."],
    desc: "We bridge the gap between a side project and a scalable business venture through real-world founder experience.",
    features: [
      { icon: Lightbulb, title: "Validation", desc: "Rigorous testing of your business model and market fit." },
      { icon: Users, title: "GTM Strategy", desc: "Learn to acquire your first 1000 users with zero budget." },
      { icon: BarChart, title: "Scaling", desc: "Frameworks for unit economics and sustainable growth." },
      { icon: Trophy, title: "Fundraising", desc: "Direct access to seed networks and pitch preparation." },
    ],
    stats: [
      { label: "Startups Launched", val: "30+", desc: "Live startups founded by our mentored students." },
      { label: "Funding Raised", val: "$2M+", desc: "Total seed funding raised by our alumni." },
      { label: "Survival Rate", val: "10x", desc: "Higher probability of surviving the first year." },
    ],
    cta: "Launch Your Startup",
  },
};

// ─────────────────────────────────────────────
// DETAIL ITEM
// ─────────────────────────────────────────────
const DetailItem = ({
  icon: Icon, title, desc, index, accent,
}: {
  icon: any; title: string; desc: string; index: number; accent: string;
}) => (
  <div className="flex gap-4 group p-4 sm:p-5 rounded-2xl bg-white border border-black/[0.05] hover:border-current hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] transition-all duration-300 font-sans"
    style={{ ["--hover-border" as any]: `${accent}30` }}
  >
    <div
      className="flex-shrink-0 w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-sm"
      style={{
        backgroundColor: `${accent}10`,
        borderColor: `${accent}20`,
      }}
    >
      <Icon className="w-4 h-4" style={{ color: accent }} />
    </div>
    <div>
      <div
        className="text-[8px] font-black uppercase tracking-[0.2em] mb-0.5"
        style={{ color: accent }}
      >
        Phase 0{index + 1}
      </div>
      <h4 className="premium-h3 text-[#0D0D0D] text-sm font-black">{title}</h4>
      <p className="text-slate-500 text-[11px] font-light leading-relaxed mt-1">{desc}</p>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// ACADEMIC DETAILS / FRAMEWORK SECTION
// ─────────────────────────────────────────────
export const AcademicDetails = ({ type = "academic" }: { type?: string }) => {
  const data = DETAILS_CONTENT[type] || DETAILS_CONTENT.academic;
  const accent = TYPE_ACCENT[type] || "#FF6B35";

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden border-t border-black/[0.05]">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[450px] h-[450px] rounded-full blur-[100px] opacity-10 -bottom-20 -left-20"
          style={{ backgroundColor: accent }}
        />
        <div className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-10 top-1/2 right-1/4 bg-indigo-300" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10 font-sans">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* LEFT */}
          <div className="relative">
            <motion.div
              variants={fadeUpVariant}
              className="inline-flex items-center px-4 py-1.5 rounded-full border text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6 shadow-sm bg-white"
              style={{ borderColor: `${accent}20` }}
            >
              {data.badge}
            </motion.div>

            <motion.h2
              variants={fadeUpVariant}
              className="premium-h2 text-[#0D0D0D] text-2xl sm:text-3xl font-black mb-5"
            >
              {data.title[0]}{" "}
              <br />
              <span style={{ color: accent }}>{data.title[1]}</span>
            </motion.h2>

            <motion.p
              variants={fadeUpVariant}
              className="premium-p text-slate-500 text-sm mb-8 max-w-lg"
            >
              {data.desc}
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.features.map((feature: any, i: number) => (
                <motion.div key={i} variants={fadeUpVariant}>
                  <DetailItem
                    index={i}
                    icon={feature.icon}
                    title={feature.title}
                    desc={feature.desc}
                    accent={accent}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Metrics Card */}
          <motion.div variants={fadeUpVariant} className="relative group">
            <div
              className="absolute inset-0 rounded-[2.5rem] blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"
              style={{ backgroundColor: accent }}
            />

            <div className="relative bg-white rounded-[2.5rem] p-8 md:p-10 border border-black/[0.06] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] overflow-hidden">
              {/* Decorative corner */}
              <div
                className="absolute top-0 right-0 w-36 h-36 rounded-bl-[4rem] opacity-5"
                style={{ backgroundColor: accent }}
              />

              {/* Header */}
              <h3 className="flex items-center gap-4 text-[#0D0D0D] font-black text-base mb-8 relative z-10">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: accent, boxShadow: `0 8px 24px -4px ${accent}60` }}
                >
                  <Zap className="w-5 h-5 text-white" />
                </div>
                Metrics of Success
              </h3>

              {/* Stats */}
              <div className="space-y-3 relative z-10">
                {data.stats.map((stat: any, i: number) => (
                  <div
                    key={i}
                    className="flex items-center gap-6 p-5 rounded-2xl hover:bg-[#F7F7F5] transition-all duration-300 border border-transparent hover:border-black/[0.04] group/stat"
                  >
                    <div
                      className="text-3xl sm:text-4xl font-black group-hover/stat:scale-110 transition-transform duration-300 origin-left tabular-nums"
                      style={{ color: accent }}
                    >
                      {stat.val}
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] font-black text-slate-800 uppercase tracking-[0.2em]">
                        {stat.label}
                      </p>
                      <p className="text-xs text-slate-500 font-light mt-1 leading-tight">
                        {stat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="mt-8 pt-6 border-t border-black/[0.05] relative z-10">
                <MagneticButton>
                  <button
                    className="w-full text-white font-black py-5 rounded-2xl text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 active:scale-95 transition-all group"
                    style={{
                      background: `linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)`,
                      boxShadow: `0 16px 40px -8px ${accent}50`,
                    }}
                  >
                    {data.cta}{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </MagneticButton>

                {/* Trust signal */}
                <div className="flex items-center justify-center gap-5 mt-5">
                  {[
                    { icon: ShieldCheck, text: "Verified Mentors" },
                    { icon: Clock, text: "Flexible Timing" },
                    { icon: Award, text: "Certified Program" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <item.icon className="w-3 h-3 text-slate-400" />
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────
// HERO CONTENT DATA
// ─────────────────────────────────────────────
const HERO_CONTENT: Record<string, any> = {
  academic: {
    badge: "The Gold Standard of Academic Mentorship",
    title: ["Architect Your", "Academic", "Legacy"],
    desc: "Personalized 1-on-1 roadmaps for JEE and NEET toppers. Join the elite circle where strategy meets consistency.",
    cards: [
      { icon: Atom, title: "JEE Engineering", desc: "Advanced physics and mathematics frameworks from IIT rankers.", color: "text-[#FF6B35]", bg: "bg-[#FF6B35]/10" },
      { icon: Microscope, title: "NEET Medical", desc: "Integrated biology and chemistry systems from AIIMS toppers.", color: "text-[#4F46E5]", bg: "bg-[#4F46E5]/10" },
      { icon: PenTool, title: "Strategic Mastery", desc: "Precision study plans tailored to your specific rank goals.", color: "text-slate-700", bg: "bg-slate-100" },
    ],
    bgImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=2000",
  },
  hackathon: {
    badge: "Engineering Superiority & Innovation",
    title: ["Build the", "Future of", "Tech"],
    desc: "Master the art of competitive coding and high-impact product building. From ideation to national winning pitches.",
    cards: [
      { icon: Code, title: "Code Excellence", desc: "Master system design and high-performance coding architectures.", color: "text-[#FF6B35]", bg: "bg-[#FF6B35]/10" },
      { icon: Rocket, title: "MVP Strategy", desc: "Build and deploy production-ready products in 24 hours.", color: "text-[#4F46E5]", bg: "bg-[#4F46E5]/10" },
      { icon: Target, title: "Pitch Mastery", desc: "Perfect your technical storytelling for national hackathons.", color: "text-slate-700", bg: "bg-slate-100" },
    ],
    bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000",
  },
  entrepreneurship: {
    badge: "Turn Ideas into Scalable Ventures",
    title: ["Launch Your", "Startup", "Journey"],
    desc: "Direct mentorship from successful founders and venture experts. Learn the real-world fundamentals of growth.",
    cards: [
      { icon: Lightbulb, title: "Idea Validation", desc: "Stress-test your concepts with experienced startup founders.", color: "text-[#FF6B35]", bg: "bg-[#FF6B35]/10" },
      { icon: Briefcase, title: "Growth Engine", desc: "Master GTM strategies and customer acquisition at scale.", color: "text-[#4F46E5]", bg: "bg-[#4F46E5]/10" },
      { icon: Target, title: "Fundraising", desc: "Perfect your business model and pitch for seed investment.", color: "text-slate-700", bg: "bg-slate-100" },
    ],
    bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
  },
};

// ─────────────────────────────────────────────
// HERO SUB-COMPONENTS (unchanged logic, minor tweaks)
// ─────────────────────────────────────────────
const OrbitingElement = ({
  item, idx, dx, dy, isMobile,
}: {
  item: any; idx: number; dx: any; dy: any; isMobile: boolean;
}) => {
  const scale = isMobile ? 0.6 : 1;
  const xTransform = useTransform(dx, [-500, 500], [item.x - 25, item.x + 25]);
  const yTransform = useTransform(dy, [-500, 500], [item.y - 25, item.y + 25]);

  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, scale: 0 }}
      animate={
        isMobile
          ? {
              opacity: 1,
              scale: 1,
              y: [item.y * scale, item.y * scale - 8, item.y * scale],
              transition: {
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 },
                opacity: { delay: 0.4 + idx * 0.1 },
                scale: { delay: 0.4 + idx * 0.1 },
              },
            }
          : { opacity: 1, scale: 1 }
      }
      style={{
        x: isMobile ? item.x * scale : xTransform,
        y: isMobile ? item.y * scale : yTransform,
      }}
      className="absolute p-3.5 bg-white/50 backdrop-blur-2xl rounded-2xl shadow-[0_16px_32px_rgba(0,0,0,0.06)] border border-white/70 flex flex-col items-center gap-1.5 group cursor-pointer"
      whileHover={{ scale: 1.15, y: -6, zIndex: 40, backgroundColor: "rgba(255,255,255,0.9)" }}
    >
      <div
        className={`p-2.5 rounded-xl bg-white border border-black/5 ${item.color} group-hover:scale-110 transition-transform duration-500 shadow-sm`}
      >
        <item.icon size={isMobile ? 16 : 20} strokeWidth={2} />
      </div>
      <span className="font-sans text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-800 transition-colors">
        {item.label}
      </span>
    </motion.div>
  );
};

const MentorshipVisual = ({
  rotateX, rotateY, isMobile, type,
}: {
  rotateX: any; rotateY: any; isMobile: boolean; type: string;
}) => {
  const accent = TYPE_ACCENT[type] || "#FF6B35";

  return (
    <motion.div
      style={!isMobile ? { rotateX, rotateY } : {}}
      className="relative z-10 w-52 sm:w-72 h-[340px] sm:h-[460px] bg-white/10 backdrop-blur-3xl rounded-[3rem] border border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden"
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none" />
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-5 bg-black/80 rounded-full z-20 shadow-inner" />

      <div className="flex-1 p-5 pt-12 flex flex-col gap-4">
        <div
          className="w-full h-32 rounded-3xl p-5 flex flex-col justify-between text-white shadow-xl relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, #0D0D0D 0%, #1e1b4b 100%)` }}
        >
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to top right, ${accent}30, transparent)` }}
          />
          <div className="relative z-10">
            <div className="text-[10px] font-bold opacity-50 uppercase tracking-[0.2em] mb-1">
              Performance Index
            </div>
            <div className="text-2xl font-black tracking-tight">Elite Status</div>
          </div>
          <div className="relative z-10 flex items-center justify-between">
            <div className="text-sm font-sans font-medium">98.4 Percentile</div>
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
              <Sparkles size={14} style={{ color: accent }} />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { label: "Strategy Session", status: "Active", val: "90%" },
            { label: "Doubt Solving", status: "24/7", val: "100%" },
            { label: "Notes Access", status: "Premium", val: "85%" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-white/80 flex items-center gap-3 hover:bg-white/90 transition-colors shadow-sm"
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center`}
                style={
                  i === 0
                    ? { backgroundColor: accent, boxShadow: `0 4px 12px -2px ${accent}60` }
                    : { backgroundColor: "#F7F7F5" }
                }
              >
                {i === 0 ? (
                  <Target size={16} className="text-white" strokeWidth={2.5} />
                ) : (
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-end mb-1.5">
                  <span className="text-[10px] font-black text-slate-800">{item.label}</span>
                  <span className="text-[8px] font-black uppercase" style={{ color: accent }}>
                    {item.status}
                  </span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: item.val }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, #0D0D0D, ${accent})` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-20 bg-white/40 backdrop-blur-xl border-t border-white/40 flex items-center justify-around px-5">
        {[BarChart, Users, MessageCircle, Settings].map((Icon, i) => (
          <div
            key={i}
            className={`p-2.5 rounded-xl transition-all`}
            style={
              i === 0
                ? { backgroundColor: "#0D0D0D", color: "white" }
                : { color: "#94a3b8" }
            }
          >
            <Icon size={18} />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// ─────────────────────────────────────────────
// ACADEMIC HERO — UNCHANGED LAYOUT + POLISHED
// ─────────────────────────────────────────────
export const AcademicHero = ({ type = "academic" }: { type?: string }) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);
  const rotateX = useTransform(dy, [-400, 400], [10, -10]);
  const rotateY = useTransform(dx, [-400, 400], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const data = HERO_CONTENT[type] || HERO_CONTENT.academic;
  const accent = TYPE_ACCENT[type] || "#FF6B35";

  return (
    <section
      className="relative min-h-[75vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAF8] pt-20 pb-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        .mesh-gradient { position: absolute; inset: 0; z-index: 0; overflow: hidden; }
        .blob { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.3; animation: float 20s infinite alternate; }
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(100px, 50px) scale(1.2); }
        }
      `}</style>

      {/* Mesh Background */}
      <div className="mesh-gradient pointer-events-none">
        <div className="blob w-[600px] h-[600px] bg-[#FF6B35]/20 -top-20 -left-20" />
        <div className="blob w-[500px] h-[500px] bg-[#4F46E5]/10 top-1/2 -right-20" style={{ animationDelay: "-5s" }} />
        <div className="blob w-[400px] h-[400px] bg-amber-200/20 -bottom-20 left-1/3" style={{ animationDelay: "-10s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(#0D0D0D0a_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-[0.15]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-20 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24"
        >
          {/* LEFT TEXT */}
          <div className="flex-1 space-y-8 lg:pr-6 z-20">
            <motion.div
              variants={fadeUpVariant}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-white shadow-sm flex w-fit mx-auto lg:mx-0"
            >
              <Sparkles size={12} style={{ color: accent }} />
              <span className="font-sans text-[10px] font-black text-slate-500 uppercase tracking-[0.25em]">
                {data.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUpVariant}
              className="premium-h1 text-center lg:text-left text-[#0D0D0D]"
            >
              {data.title[0]} <br className="hidden lg:block" />
              <span className="relative whitespace-nowrap inline-block mt-2">
                <span
                  className="relative z-10 text-transparent bg-clip-text"
                  style={{ backgroundImage: `linear-gradient(135deg, ${accent}, ${accent}bb)` }}
                >
                  {data.title[1]}
                </span>
                <div
                  className="absolute w-[110%] h-[8px] -bottom-1 -left-[5%] z-0 opacity-40 blur-[0.5px]"
                  style={{ 
                    background: `linear-gradient(90deg, transparent 0%, ${accent} 50%, transparent 100%)`,
                    transform: 'rotate(-2deg) skewX(-15deg)',
                    borderRadius: '20% 80% 20% 80% / 50%'
                  }}
                />
              </span>
              <br className="hidden lg:block" />
              {data.title[2]}
            </motion.h1>

            <motion.p
              variants={fadeUpVariant}
              className="premium-p text-center lg:text-left mx-auto lg:mx-0 max-w-lg text-slate-500 text-sm"
            >
              {data.desc}
            </motion.p>

            <motion.div
              variants={fadeUpVariant}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <MagneticButton className="w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto relative group overflow-hidden rounded-full bg-[#0D0D0D] text-white px-10 py-4 font-sans font-black text-sm transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                  style={{ ["--hover-shadow" as any]: `0 25px 50px ${accent}40` }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                    style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)` }}
                  />
                  <span className="relative z-10 flex items-center gap-3">
                    Request Mentorship{" "}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </MagneticButton>

              <button className="w-full sm:w-auto rounded-full bg-white/50 backdrop-blur-xl text-[#0D0D0D] px-10 py-4 font-sans font-black text-sm border border-white hover:bg-white/80 transition-all flex items-center justify-center gap-2 shadow-sm">
                Explore Programs
              </button>
            </motion.div>
          </div>

          {/* RIGHT ANIMATION */}
          <motion.div
            variants={fadeUpVariant}
            className="flex-1 relative flex justify-center items-center h-[400px] sm:h-[500px] lg:h-[650px] perspective-1000 w-full"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <MentorshipVisual
                rotateX={rotateX}
                rotateY={rotateY}
                isMobile={isMobile}
                type={type}
              />

              {[
                {
                  icon: type === "academic" ? GraduationCap : type === "hackathon" ? Code : Lightbulb,
                  label: type === "academic" ? "AIR Mentors" : type === "hackathon" ? "Code Audit" : "Venture Fit",
                  color: "text-[#FF6B35]",
                  x: 220,
                  y: -150,
                },
                { icon: Trophy, label: "Top Ranks", color: "text-[#4F46E5]", x: 150, y: 220 },
                { icon: Target, label: "Daily Mastery", color: "text-emerald-500", x: -220, y: -100 },
                { icon: Zap, label: "Instant Access", color: "text-[#0D0D0D]", x: -180, y: 180 },
              ].map((item, idx) => (
                <OrbitingElement
                  key={idx}
                  item={item}
                  idx={idx}
                  dx={dx}
                  dy={dy}
                  isMobile={isMobile}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};