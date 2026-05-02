"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { 
  Trophy, Target, Smartphone, Zap, CheckCircle2, ArrowRight, Download, Star, GraduationCap, Sparkles, Rocket, BookOpen, BrainCircuit
} from "lucide-react";

// --- Snappy Premium Animation Variants ---
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// --- Sub-components ---
const OrbitingPerk = ({ item, idx, dx, dy, isMobile }: { item: any, idx: number, dx: any, dy: any, isMobile: boolean }) => {
  const scale = isMobile ? 0.6 : 1;
  // Compacted orbit radius
  const xTransform = useTransform(dx, [-500, 500], [item.x - 20, item.x + 20]);
  const yTransform = useTransform(dy, [-500, 500], [item.y - 20, item.y + 20]);

  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, scale: 0 }}
      animate={isMobile ? { 
        opacity: 1, scale: 1, y: [item.y * scale, (item.y * scale) - 5, item.y * scale],
        transition: { y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }, opacity: { delay: 0.4 + idx * 0.1 }, scale: { delay: 0.4 + idx * 0.1 } }
      } : { opacity: 1, scale: 1 }}
      style={{ x: isMobile ? item.x * scale : xTransform, y: isMobile ? item.y * scale : yTransform }}
      className="absolute p-2.5 sm:p-3 bg-white/80 backdrop-blur-xl rounded-[1rem] shadow-[0_15px_30px_-5px_rgba(0,0,0,0.08)] border border-white/90 flex flex-col items-center gap-1.5 group cursor-pointer"
      whileHover={{ scale: 1.1, y: -4, zIndex: 40 }}
    >
      <div className={`relative p-2 rounded-lg bg-[#FAFAF8] border border-black/5 ${item.color} group-hover:scale-105 transition-transform duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]`}>
        <item.icon size={isMobile ? 16 : 20} strokeWidth={2} />
      </div>
      <span className="font-sans text-[7px] sm:text-[9px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors mt-0.5 relative z-10">
        {item.label}
      </span>
    </motion.div>
  );
};

const InteractivePhone = ({ rotateX, rotateY, isMobile }: { rotateX: any, rotateY: any, isMobile: boolean }) => {
  return (
    <motion.div 
      style={!isMobile ? { rotateX, rotateY } : {}}
      className="relative z-10 w-44 sm:w-60 h-[340px] sm:h-[460px] bg-[#0D0D0D] rounded-[2rem] sm:rounded-[2.5rem] border-[4px] sm:border-[6px] border-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 bg-black rounded-full z-20" /> 
      <img 
        src="/images/student-app-mockup.png" 
        alt="App Interface" 
        className="w-full h-full object-cover rounded-[1.6rem] sm:rounded-[2.1rem] opacity-90"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.parentElement!.innerHTML += `<div class="absolute inset-0 bg-gradient-to-br from-slate-900 to-black rounded-[1.6rem] sm:rounded-[2.1rem] flex flex-col items-center justify-center p-5"><div class="w-16 h-16 bg-gradient-to-br from-[#FF6B35] to-[#f98a60] rounded-2xl flex items-center justify-center mb-4 shadow-[0_5px_20px_rgba(255,107,53,0.4)]"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div><div class="text-white premium-h3 mb-1">TopperMantra</div><div class="text-white/50 text-[9px] font-sans tracking-[0.2em] uppercase">Elite Access</div></div>`;
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B35]/80 via-transparent to-transparent flex flex-col justify-end p-4 mix-blend-hard-light rounded-[1.6rem] sm:rounded-[2.1rem] pointer-events-none">
        <div className="flex items-center gap-2 mb-1 bg-white/20 backdrop-blur-md w-max px-3 py-1.5 rounded-full border border-white/30 text-white">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[9px] font-black uppercase tracking-widest">Live Connect</span>
        </div>
      </div>
    </motion.div>
  );
};

const StudentJoinPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
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
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <main className="min-h-screen bg-[#FAFAF8] selection:bg-[#FF6B35] selection:text-white pt-16 font-sans overflow-x-hidden text-[#0D0D0D]">
      <style dangerouslySetInnerHTML={{ __html: `
        .noise-bg { position: relative; }
        .noise-bg::before { 
          content: ''; position: absolute; inset: 0; 
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E"); 
          pointer-events: none; z-index: 50; mix-blend-mode: multiply; 
        }

        .premium-card {
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.03);
          box-shadow: 0 4px 15px -5px rgba(0,0,0,0.03), inset 0 1px 1px rgba(255,255,255,1);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .premium-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px -10px rgba(0,0,0,0.08), inset 0 1px 1px rgba(255,255,255,1);
          border-color: rgba(0,0,0,0.06);
        }
      `}} />

      {/* =========================================
          SECTION 1: HERO (COMPACT & TIGHT)
      ========================================= */}
      <section 
        className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden noise-bg"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 -z-10 bg-[#FAFAF8]">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 150, repeat: Infinity, ease: "linear" }} className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-30">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF6B35]/30 to-[#4F46E5]/20 blur-[100px] mix-blend-multiply" />
          </motion.div>
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-20">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            <div className="flex-1 space-y-6 lg:pr-6 z-20">
              <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-black/5 shadow-sm mx-auto lg:mx-0 flex">
                <Rocket size={12} className="text-[#FF6B35]" />
                <span className="font-sans text-[9px] font-bold text-slate-600 uppercase tracking-[0.25em]">The Elite Student Circle</span>
              </motion.div>
              
              <motion.h1 variants={fadeUpVariant} className="premium-h1 text-center lg:text-left text-[#0D0D0D]">
                Outsmart the <br className="hidden lg:block"/>
                <span className="relative whitespace-nowrap inline-block mt-1">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-orange-400">Competition.</span>
                  <div className="absolute w-full h-3 -bottom-0.5 left-0 bg-[#FF6B35]/10 -skew-x-12 z-0" />
                </span>
              </motion.h1>
              
              <motion.p variants={fadeUpVariant} className="premium-p text-center lg:text-left mx-auto lg:mx-0">
                Stop grinding blindly. Get the exact blueprints, premium notes, and <strong className="text-[#0D0D0D] font-medium">1-on-1 mentorship</strong> from India's top 1% rankers.
              </motion.p>
              
              <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
                <a href="#download" className="w-full sm:w-auto relative group overflow-hidden rounded-full bg-[#0D0D0D] text-white px-7 py-3.5 font-sans font-bold text-sm transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_15px_30px_rgba(255,107,53,0.25)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#f98a60] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2"><Download size={16} className="group-hover:animate-bounce" /> Get The App</span>
                </a>
                <a href="#form" className="w-full sm:w-auto rounded-full bg-white text-[#0D0D0D] px-7 py-3.5 font-sans font-semibold text-sm border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                  Talk to a Mentor <ArrowRight size={16} className="text-slate-400" />
                </a>
              </motion.div>
            </div>
            
            <motion.div variants={fadeUpVariant} className="flex-1 relative flex justify-center items-center h-[380px] sm:h-[480px] lg:h-[550px] perspective-1000 w-full">
              <div className="relative w-full h-full flex items-center justify-center">
                <InteractivePhone rotateX={rotateX} rotateY={rotateY} isMobile={isMobile} />

                {/* Compact Orbit Coordinates */}
                {[
                  { icon: Target, label: "Precision", color: "text-[#4F46E5]", x: 160, y: -110 },
                  { icon: Star, label: "Topper Notes", color: "text-[#FF6B35]", x: 90, y: 190 },
                  { icon: BrainCircuit, label: "Smart Plan", color: "text-emerald-500", x: -180, y: -60 },
                  { icon: Zap, label: "24/7 Doubts", color: "text-[#0D0D0D]", x: -160, y: 150 }
                ].map((item, idx) => (
                  <OrbitingPerk key={idx} item={item} idx={idx} dx={dx} dy={dy} isMobile={isMobile} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: THE ARSENAL (COMPACT BENTO)
      ========================================= */}
      <section className="py-16 bg-white relative border-t border-black/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-10">
            <span className="font-sans text-[9px] font-bold text-[#FF6B35] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full border border-[#FF6B35]/20 bg-[#FF6B35]/5 mb-4 inline-block">The Arsenal</span>
            <h2 className="premium-h2 text-[#0D0D0D]">Your Unfair <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-orange-400">Advantage.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: "Instant Access", desc: "Doubts resolved in minutes by elite scorers.", colSpan: "lg:col-span-2", iconColor: "text-[#FF6B35]", iconBg: "bg-[#FF6B35]/10" },
              { icon: Target, title: "Custom Roadmaps", desc: "Schedules that adapt to your weaknesses.", colSpan: "lg:col-span-1", iconColor: "text-[#4F46E5]", iconBg: "bg-[#4F46E5]/10" },
              { icon: Smartphone, title: "Cinematic App", desc: "A world-class UI built for deep focus.", colSpan: "lg:col-span-1", iconColor: "text-white", iconBg: "bg-[#0D0D0D]", darkCard: true },
              { icon: BookOpen, title: "AIR 1 Notes", desc: "Raw, unfiltered notes from the toppers.", colSpan: "lg:col-span-1", iconColor: "text-emerald-500", iconBg: "bg-emerald-50" },
              { icon: Trophy, title: "Masterclasses", desc: "Weekly live strategy sessions on exam psychology.", colSpan: "lg:col-span-3", iconColor: "text-[#0D0D0D]", iconBg: "bg-slate-100" }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx} 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
                className={`${benefit.darkCard ? 'bg-[#0D0D0D] text-white shadow-xl' : 'premium-card'} rounded-[1.5rem] p-6 lg:p-8 flex flex-col justify-between ${benefit.colSpan} group overflow-hidden`}
              >
                <div className="relative z-10">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 ${benefit.iconColor} ${benefit.iconBg}`}>
                    <benefit.icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className={`premium-h3 mb-2 ${benefit.darkCard ? 'text-white' : 'text-[#0D0D0D]'}`}>{benefit.title}</h3>
                  <p className={`font-sans text-xs leading-relaxed font-light ${benefit.darkCard ? 'text-white/60' : 'text-slate-500'} max-w-sm`}>{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: STUDENT IMPACT (TIGHT LINEAR)
      ========================================= */}
      <section className="py-16 relative overflow-hidden border-t border-black/5 bg-[#FAFAF8]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex-1 w-full">
              <motion.h2 variants={fadeUpVariant} className="premium-h2 text-[#0D0D0D] mb-10">
                The Anatomy of a <br/> <span className="text-slate-400">Topper.</span>
              </motion.h2>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-black/10 before:to-transparent">
                {[
                  { title: "Absolute Clarity", desc: "Stop wondering what to study. Get day-by-step actionable roadmaps.", num: "01" },
                  { title: "Bulletproof Mindset", desc: "Build psychological resilience to handle exam pressure like a pro.", num: "02" },
                  { title: "Execution", desc: "Turn strategies into actual board results and top competitive ranks.", num: "03" }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUpVariant} className="relative flex items-start gap-6 group">
                    <div className="w-8 h-8 rounded-full bg-white border border-black/10 flex items-center justify-center font-sans text-[10px] font-bold text-slate-400 relative z-10 group-hover:border-[#FF6B35] group-hover:text-[#FF6B35] transition-colors shadow-sm">
                      {item.num}
                    </div>
                    <div className="mt-1">
                      <h4 className="premium-h3 text-[#0D0D0D] mb-1.5 group-hover:text-[#FF6B35] transition-colors">{item.title}</h4>
                      <p className="font-sans text-slate-500 text-xs leading-relaxed font-light max-w-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="flex-1 w-full relative hidden lg:flex justify-center"
            >
              <div className="w-[400px] h-[400px] relative rounded-full border border-black/5 bg-white flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/5 to-[#4F46E5]/5 rounded-full blur-2xl opacity-50" />
                <div className="text-center relative z-10">
                  <div className="text-[5rem] mb-3">📈</div>
                  <div className="premium-h3 text-[#0D0D0D]">Exponential Growth</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: DOWNLOAD APP (COMPACT CTA)
      ========================================= */}
     {/* =========================================
          SECTION 4: DOWNLOAD APP (FIXED LIGHT THEME)
      ========================================= */}
      <section id="download" className="py-16 relative overflow-hidden">
        {/* Light Premium Background Card */}
        <div className="absolute inset-0 bg-white mx-4 md:mx-8 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-black/5 noise-bg" />
        
        {/* Soft Animated Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B35]/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-14">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeUpVariant} className="premium-h2 mb-4 text-[#0D0D0D]">
              Ready to <span className="text-[#FF6B35]">Ascend?</span>
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="premium-p mb-8 max-w-lg mx-auto">
              Join the exclusive circle of students redefining success. Download the app and claim your free strategy session.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#"
                className="bg-[#0D0D0D] text-white px-8 py-3.5 rounded-xl font-sans font-bold text-xs flex items-center gap-2.5 hover:scale-105 transition-transform shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(255,107,53,0.3)]"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-5" />
              </a>
              <div className="text-slate-500 font-sans text-[10px] font-bold tracking-widest uppercase flex items-center gap-2 px-4 py-3 rounded-xl border border-black/5 bg-black/5">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full" /> Coming to iOS
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: STUDENT ACCESS FORM (PREMIUM LIGHT)
      ========================================= */}
      <section id="form" className="py-20 md:py-28 relative overflow-hidden bg-[#F8FAFC]">
        {/* Soft background glows */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-100/40 rounded-full blur-[100px] -ml-40 -mt-40" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px] -mr-40 -mb-40" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.06)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row items-stretch"
          >
            {/* Left Side: Student Illustration (SVG) */}
            <div className="lg:w-[45%] bg-slate-50 p-10 lg:p-16 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative z-10 w-full max-w-[340px]"
              >
                {/* Custom Premium Student SVG */}
                <svg viewBox="0 0 400 400" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Floating Graduation Cap */}
                  <motion.g 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path d="M200 100L320 160L200 220L80 160L200 100Z" fill="white" stroke="#334155" strokeWidth="4"/>
                    <path d="M120 180V230C120 230 150 250 200 250C250 250 280 230 280 230V180" stroke="#334155" strokeWidth="4" strokeLinejoin="round"/>
                    <path d="M320 160V220" stroke="#F97316" strokeWidth="4" strokeLinecap="round"/>
                    <circle cx="320" cy="230" r="8" fill="#F97316"/>
                  </motion.g>

                  {/* Brain/Core Icon */}
                  <motion.circle 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    cx="200" cy="300" r="60" fill="#F97316" fillOpacity="0.05" stroke="#F97316" strokeWidth="2" strokeDasharray="8 8"/>
                  
                  {/* Floating Success Stars */}
                  <motion.path 
                    animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    d="M100 280L105 295L120 300L105 305L100 320L95 305L80 300L95 295L100 280Z" fill="#FBBF24"/>
                  
                  <motion.path 
                    animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    d="M300 250L303 260L313 263L303 266L300 276L297 266L287 263L297 260L300 250Z" fill="#FBBF24"/>
                </svg>
              </motion.div>

              <div className="mt-10 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full shadow-sm border border-slate-100 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Early Access Open</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">Join the 1% Club</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[280px] mx-auto">
                  Get personalized mentorship and tools to dominate your exams.
                </p>
              </div>
            </div>

            {/* Right Side: Refined Form */}
            <div className="lg:w-[55%] p-10 lg:p-16 bg-white">
              <div className="mb-10">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Request Your Access</h2>
                <p className="text-slate-500 text-sm font-medium">Analyze your potential with our expert team.</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {[
                    { label: "Full Name", placeholder: "e.g. Rahul Sharma" },
                    { label: "Email", placeholder: "rahul@example.com" },
                    { label: "Contact No.", placeholder: "+91 XXXXX XXXXX" },
                    { label: "Current Class", placeholder: "Class 12 / Dropper" },
                    { label: "Target Exam", placeholder: "JEE / NEET / Boards" },
                    { label: "Dream Goal", placeholder: "IIT / AIIMS / 98%+" }
                  ].map((field, i) => (
                    <div key={i} className="relative group">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block group-focus-within:text-brand-500 transition-colors">
                        {field.label}
                      </label>
                      <input 
                        type="text" 
                        placeholder={field.placeholder}
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3.5 text-slate-900 text-sm font-semibold outline-none focus:bg-white focus:border-brand-500 transition-all placeholder:text-slate-300 shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)]"
                      />
                    </div>
                  ))}
                </div>

                <div className="relative group">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block group-focus-within:text-brand-500 transition-colors">
                    Tell us about your biggest challenge
                  </label>
                  <textarea 
                    placeholder="Briefly describe what's holding you back from your goal..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-900 text-sm font-semibold outline-none focus:bg-white focus:border-brand-500 transition-all min-h-[100px] resize-none placeholder:text-slate-300 shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)]"
                  />
                </div>

                <motion.button 
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl hover:bg-brand-500 transition-all duration-300"
                >
                  Book Free Strategy Session
                  <ArrowRight size={18} />
                </motion.button>
              </form>
              
              <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] mt-8">
                Response within 12 hours • Guaranteed Result Shift
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default StudentJoinPage;