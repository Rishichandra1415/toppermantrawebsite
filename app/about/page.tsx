"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from "framer-motion";
import {
  Target,
  Users,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  GraduationCap,
  Globe,
  Award,
  Zap,
  Cpu,
  Rocket,
  LayoutDashboard,
  FileBarChart,
  Search,
  ChevronLeft,
  ChevronRight,
  Bell,
  Mail,
  Star,
  TrendingUp,
  BookOpen,
  Brain,
} from "lucide-react";

/* ─── Custom SVG Icons ─────────────────────────────────────────────────────── */
const LinkedinIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MessageIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

/* ─── Data ─────────────────────────────────────────────────────────────────── */
const founders = [
  {
    id: 1,
    name: "Dr. Aryan Sharma",
    role: "Founder & CEO",
    bio: "Visionary leader dedicated to bridging the gap between student potential and academic excellence. A graduate of IIT Delhi.",
    image: "/founders/ceo.png",
    initials: "AS",
    tag: "IIT Delhi · AI Research",
    accentColor: "#FF6B35",
  },
  {
    id: 2,
    name: "Rohan Varma",
    role: "Co-Founder & CTO",
    bio: "Architecting the future of peer-to-peer learning through innovative technology and smart algorithms. Ex-Google engineer.",
    image: "/founders/cofounder1.png",
    initials: "RV",
    tag: "Ex-Google · Full Stack",
    accentColor: "#4F46E5",
  },
  {
    id: 3,
    name: "Ananya Iyer",
    role: "Co-Founder & Academic Head",
    bio: "Expert mentor focused on creating structured learning pathways for competitive exam aspirants. AIIMS topper.",
    image: "/founders/cofounder2.png",
    initials: "AI",
    tag: "AIIMS Topper · Curriculum",
    accentColor: "#0EA5E9",
  },
];

const pillars = [
  {
    icon: GraduationCap,
    number: "01",
    title: "Academic Mentorship",
    desc: "Get 1-on-1 personalized guidance from verified toppers of IITs, AIIMS, and national exams.",
    stat: "500+ Mentors",
    color: "#FF6B35",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Hackathon & Innovation",
    desc: "Master problem-solving. We prepare you for national and international hackathons.",
    stat: "200+ Events",
    color: "#4F46E5",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Entrepreneurship",
    desc: "Turn your ideas into reality. Our founder-mentors help you progress from ideation to developing your first MVP.",
    stat: "50+ Startups",
    color: "#0EA5E9",
  },
];

const stats = [
  { value: "50K+", label: "Active Learners" },
  { value: "500+", label: "Expert Mentors" },
  { value: "98%", label: "Success Rate" },
  { value: "150+", label: "Top Institutions" },
];

/* ─── Animated Number Counter ─────────────────────────────────────────────── */
const Counter = ({ target, suffix = "" }: { target: string; suffix?: string }) => {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numTarget = parseInt(target.replace(/\D/g, ""), 10);
          const suffix_char = target.replace(/[0-9]/g, "");
          let start = 0;
          const duration = 1800;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * numTarget);
            setDisplay(`${current}${suffix_char}`);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{display}</span>;
};

/* ─── Main Component ───────────────────────────────────────────────────────── */
const AboutPage = () => {
  const [activeFounder, setActiveFounder] = useState(0);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);
  
  // Parallax Scroll Hooks
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const orbsY = useTransform(scrollY, [0, 500], [0, -100]);
  const opacityFade = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFounder((prev) => (prev + 1) % founders.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <main
      className="min-h-screen font-sans overflow-x-hidden selection:bg-[#0D0D0D] selection:text-white"
      style={{ background: "#FAF9F6", color: "#0D0D0D" }} // Alabaster/Pearl White for ultimate premium feel
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap');

        .about-serif { font-family: 'DM Serif Display', Georgia, serif; }
        .about-sans { font-family: 'Inter', system-ui, sans-serif; letter-spacing: -0.01em; }

        .grain-overlay::before {
          content: ''; position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.025'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 50; mix-blend-mode: multiply;
        }

        .marquee-track { display: flex; width: max-content; animation: marquee 30s linear infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        .glass-card {
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.6);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.08), inset 0 0 0 1px rgba(255, 255, 255, 0.8);
          transform: translateY(-4px);
        }

        .text-gradient {
          background-clip: text; -webkit-background-clip: text; color: transparent;
          background-image: linear-gradient(110deg, #FF6B35, #ff9470, #4F46E5);
          background-size: 200% 100%;
          animation: shine 6s linear infinite;
        }
        @keyframes shine { to { background-position: 200% center; } }
      `}</style>

      {/* ── HERO: PARALLAX & BENTO VISION ─────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden grain-overlay">
        
        {/* Animated Cinematic Orbs (Multiply Blend for Ink-like feel) */}
        <motion.div style={{ y: orbsY }} className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          <div className="absolute top-0 right-10 w-[500px] h-[500px] rounded-full bg-[#FF6B35] mix-blend-multiply blur-[120px] opacity-[0.08] animate-pulse" />
          <div className="absolute top-20 left-10 w-[600px] h-[600px] rounded-full bg-[#4F46E5] mix-blend-multiply blur-[130px] opacity-[0.06]" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div style={{ y: heroY, opacity: opacityFade }} className="text-center max-w-5xl mx-auto mb-20">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-6 inline-flex">
              <span className="about-sans text-[10px] uppercase font-bold tracking-[0.2em] px-4 py-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-md shadow-sm">
                Unlocking True Potential
              </span>
            </motion.div>
            
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} className="about-serif text-6xl md:text-[5.5rem] leading-[0.95] tracking-tight mb-8 text-[#0D0D0D]">
              Empowering Ambition <br className="hidden md:block" />
              with <em className="not-italic text-gradient">Proven Experience.</em>
            </motion.h1>
            
            <motion.p initial="hidden" animate="visible" variants={fadeUp} className="about-sans text-lg md:text-xl text-black/50 max-w-2xl mx-auto leading-relaxed font-light">
              We bridge the gap between student potential and academic excellence by connecting aspirants directly with those who have already conquered the summit.
            </motion.p>
          </motion.div>

          {/* Hyper-Glassmorphism Bento Cards */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Vision Card */}
            <motion.div variants={fadeUp} className="glass-card p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#FF6B35] rounded-full blur-[90px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br from-[#FF6B35] to-[#ff9470] text-white shadow-lg group-hover:scale-105 transition-transform duration-500">
                <Globe size={30} strokeWidth={1.5} />
              </div>
              <h3 className="about-serif text-3xl md:text-4xl mb-4 text-[#0D0D0D]">Our Vision</h3>
              <p className="about-sans text-base text-black/60 leading-relaxed font-light">
                To build a globally democratized ecosystem where every student, regardless of their background, has access to top-tier mentorship, advanced strategies, and the motivation needed to achieve their ultimate goals.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div variants={fadeUp} className="glass-card p-10 md:p-12 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#4F46E5] rounded-full blur-[90px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center bg-gradient-to-br from-[#4F46E5] to-[#6b64f0] text-white shadow-lg group-hover:scale-105 transition-transform duration-500">
                <Target size={30} strokeWidth={1.5} />
              </div>
              <h3 className="about-serif text-3xl md:text-4xl mb-4 text-[#0D0D0D]">Our Mission</h3>
              <p className="about-sans text-base text-black/60 leading-relaxed font-light">
                To revolutionize competitive exam preparation through innovative technology and structured peer-learning. We strive to provide personalized 1-on-1 guidance from verified national-level toppers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE (Ultra Clean) ────────────────────────────────────────────── */}
      <div className="overflow-hidden border-y border-black/5 py-4 bg-white/50 backdrop-blur-md">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) =>
            stats.map((s, j) => (
              <div key={`${i}-${j}`} className="flex items-center gap-3 px-12 shrink-0">
                <span className="about-serif text-2xl font-normal text-[#0D0D0D]">{s.value}</span>
                <span className="about-sans text-sm text-black/60 font-medium tracking-wide">{s.label}</span>
                <span className="text-black/10 mx-6 text-xl">/</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── FOUNDERS SECTION (EDITORIAL STYLE) ───────────────────────────────────── */}
      <section className="py-20 md:py-28 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/60 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
            
            {/* Left: Sticky Editorial Text */}
            <div className="flex-1 w-full lg:sticky lg:top-32">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-8">
                <div className="w-12 h-[2px] bg-[#0D0D0D] mb-6" />
                <h2 className="about-sans text-xs font-bold uppercase tracking-[0.2em] text-black/40">The Leadership</h2>
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFounder}
                  initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="about-serif text-5xl md:text-7xl leading-[0.95] mb-6 text-[#0D0D0D]">
                    {founders[activeFounder].name.split(" ").slice(0, -1).join(" ")}<br />
                    <span style={{ color: founders[activeFounder].accentColor }}>
                      {founders[activeFounder].name.split(" ").slice(-1)}
                    </span>
                  </h3>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <span className="about-sans text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-black/10 text-black/70 bg-white">
                      {founders[activeFounder].role}
                    </span>
                    <span className="about-sans text-xs font-medium text-black/40">
                      {founders[activeFounder].tag}
                    </span>
                  </div>

                  <p className="about-sans text-lg text-black/60 leading-relaxed font-light mb-10 max-w-md border-l-2 pl-4" style={{ borderColor: founders[activeFounder].accentColor }}>
                    {founders[activeFounder].bio}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Minimal Navigation */}
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <button onClick={() => setActiveFounder((p) => (p - 1 + founders.length) % founders.length)} className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#0D0D0D] hover:text-white transition-all duration-300">
                    <ChevronLeft size={16} />
                  </button>
                  <button onClick={() => setActiveFounder((p) => (p + 1) % founders.length)} className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#0D0D0D] hover:text-white transition-all duration-300">
                    <ChevronRight size={16} />
                  </button>
                </div>
                <div className="flex gap-2">
                  {founders.map((_, idx) => (
                    <div key={idx} className={`h-1 rounded-full transition-all duration-500 ${activeFounder === idx ? 'w-8 bg-[#0D0D0D]' : 'w-2 bg-black/10'}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Glass Card Stack */}
            <div className="flex-1 relative w-full min-h-[500px] flex justify-center mt-10 lg:mt-0">
              {founders.map((founder, idx) => {
                const offset = (idx - activeFounder + founders.length) % founders.length;
                const isActive = offset === 0;
                const zIndex = isActive ? 30 : offset === 1 ? 20 : 10;
                const scale = isActive ? 1 : offset === 1 ? 0.95 : 0.9;
                const x = isActive ? 0 : offset === 1 ? 40 : 80;
                const rotate = isActive ? 0 : offset === 1 ? 4 : 8;

                return (
                  <motion.div
                    key={founder.id}
                    animate={{ scale, x, rotate, zIndex, opacity: offset > 2 ? 0 : 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="absolute w-full max-w-[340px] cursor-pointer origin-bottom-right"
                    onClick={() => isActive ? null : setActiveFounder(idx)}
                    style={{ zIndex }}
                  >
                    <div className={`p-4 rounded-[2rem] transition-all duration-500 ${isActive ? 'bg-white shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-black/5 ring-1 ring-black/5' : 'bg-[#F4F3EE] shadow-sm border border-black/5'}`}>
                      <div className="aspect-[4/5] rounded-3xl overflow-hidden relative group">
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                        <img 
                          src={founder.image} 
                          alt={founder.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                            e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-100 text-4xl font-serif text-gray-400">${founder.initials}</div>`;
                          }}
                        />
                        {isActive && (
                          <div className="absolute bottom-4 left-4 right-4 z-20 flex gap-2">
                            <button className="flex-1 bg-white/90 backdrop-blur py-3 rounded-xl text-xs font-bold about-sans flex justify-center items-center gap-2 hover:bg-white transition-colors text-[#0D0D0D]">
                              <LinkedinIcon size={14} /> Connect
                            </button>
                            <button className="w-12 bg-white/90 backdrop-blur rounded-xl flex justify-center items-center hover:bg-white transition-colors text-[#0D0D0D]">
                              <MessageIcon size={14} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE PILLARS (CLEAN MINIMAL) ──────────────────────────────────────── */}
      <section className="py-20 overflow-hidden border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-16">
            <motion.div variants={fadeUp}>
              <span className="about-sans text-xs font-bold uppercase tracking-[0.2em] text-black/40 mb-4 block">Methodology</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="about-serif text-4xl md:text-5xl text-[#0D0D0D]">
              Three Pillars of <em className="not-italic text-gradient">Excellence</em>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="group border-t-2 pt-6 transition-colors duration-300"
                style={{ borderColor: "rgba(0,0,0,0.05)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = p.color)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.05)")}
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/5 group-hover:bg-white transition-colors" style={{ color: p.color }}>
                    <p.icon size={22} />
                  </div>
                  <div className="about-sans text-3xl font-light text-black/20 group-hover:text-black/40 transition-colors">
                    {p.number}
                  </div>
                </div>

                <h3 className="about-serif text-2xl mb-3 text-[#0D0D0D]">{p.title}</h3>
                <p className="about-sans text-sm leading-relaxed font-light mb-6 text-black/60">
                  {p.desc}
                </p>
                <span className="about-sans text-[10px] font-bold uppercase tracking-widest text-black/40 group-hover:text-[#0D0D0D] transition-colors">
                  {p.stat}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITY SECTION (PREMIUM APP SHOWCASE) ──────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden grain-overlay" style={{ background: "#FAF9F6" }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="flex-1 w-full">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <motion.h2 variants={fadeUp} className="about-serif text-5xl md:text-6xl leading-[1.05] mb-8 text-[#0D0D0D]">
                  The Ultimate <br />
                  <span className="text-[#4F46E5]">Student Ecosystem</span>
                </motion.h2>

                <div className="space-y-4 max-w-md">
                  {[
                    { title: "Smart Feed", desc: "Actionable insights daily.", icon: Zap },
                    { title: "Study Groups", desc: "Collaborate and conquer.", icon: Users },
                    { title: "Peer Chat", desc: "Connect with toppers.", icon: MessageIcon },
                  ].map((f, i) => (
                    <motion.div key={i} variants={fadeUp} className="p-4 rounded-2xl bg-white border border-black/5 flex items-center gap-4 hover:shadow-md transition-shadow cursor-default">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-black/5 text-[#0D0D0D]">
                        <f.icon size={18} />
                      </div>
                      <div>
                        <h4 className="about-sans text-sm font-semibold text-[#0D0D0D]">{f.title}</h4>
                        <p className="about-sans text-xs text-black/50">{f.desc}</p>
                      </div>
                      <ChevronRight size={16} className="ml-auto text-black/20" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 w-full relative"
            >
              {/* Floating iPad/App Mockup Concept */}
              <div className="relative mx-auto max-w-[400px]">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#4F46E5]/20 to-[#FF6B35]/20 blur-2xl rounded-full" />
                <div className="rounded-[2.5rem] p-2 bg-white/50 backdrop-blur-xl border border-white shadow-[0_20px_60px_rgba(0,0,0,0.1)] relative">
                  <div className="rounded-[2rem] overflow-hidden border border-black/5 bg-[#F4F3EE]">
                    <img src="/toppermantra_community.png" alt="App" className="w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.parentElement!.innerHTML = `<div class="aspect-[4/5] flex flex-col items-center justify-center bg-white"><div class="font-serif text-5xl mb-2 text-[#0D0D0D]">10K+</div><div class="font-sans text-[10px] font-bold tracking-widest uppercase text-black/40">Active Users</div></div>`;
                      }}
                    />
                  </div>
                  {/* Floating Notification Badge */}
                  <div className="absolute -right-6 top-1/4 bg-white px-4 py-3 rounded-2xl shadow-xl border border-black/5 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="about-sans text-xs font-semibold">Mentor is Online</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FINAL CTA (CINEMATIC BLACK REVEAL) ──────────────────────────────────────────── */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-[#0D0D0D] text-white rounded-t-[3rem] md:rounded-t-[4rem] mt-[-2rem] z-20">
        
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] bg-[#FF6B35]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}>
              <span className="about-sans text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white mb-8 inline-block">
                Start Your Journey
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="about-serif text-5xl md:text-7xl leading-[1.0] mb-8 text-white">
              Ready to join the <em className="not-italic text-[#FF6B35]">elite?</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="about-sans text-lg md:text-xl text-white/50 mb-12 max-w-lg mx-auto font-light leading-relaxed">
              Don't just work hard. Work smart with the guidance of those who have already conquered the summit.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="about-sans w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm bg-white text-[#0D0D0D] hover:scale-105 transition-transform duration-300">
                Join the Community <ArrowRight size={14} className="inline ml-2" />
              </button>
              <button className="about-sans w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm border border-white/20 text-white hover:bg-white/10 transition-colors duration-300">
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;