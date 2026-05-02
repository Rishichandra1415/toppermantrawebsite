
"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Star, Shield, Play, TrendingUp, BookOpen, Sparkles,
  ChevronLeft, ChevronRight, Trophy, Code, Rocket, Check,
  GraduationCap, Briefcase, ExternalLink, CheckCircle2, Search,
  ChevronDown, School, Building2, MapPin, Zap, Mail, Phone, Users,
  Globe, ShieldCheck, Gem, Settings, Tag, Crown, Activity, Award,
  Target,
  X
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- HOME HERO COMPONENT ---
const HERO_TOPPERS = [
  { id: 1, name: "Arjun M.", rank: "AIR 12", mantra: "Consistency is better than perfection.", x: "15%", y: "15%" },
  { id: 2, name: "Priya S.", rank: "AIR 45", mantra: "Master the basics, the rest will follow.", x: "80%", y: "20%" },
  { id: 3, name: "Rahul K.", rank: "AIR 8", mantra: "Your only limit is your mind.", x: "85%", y: "70%" },
  { id: 4, name: "Sanya V.", rank: "AIR 102", mantra: "Discipline is the bridge between goals.", x: "10%", y: "65%" },
  { id: 5, name: "Ishaan T.", rank: "AIR 24", mantra: "Focus on the process, not the result.", x: "50%", y: "85%" },
];

export const HomeHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const constellationRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(".hero-badge", { opacity: 0, x: -15 }, { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" })
        .fromTo(".hero-title", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "expo.out" }, "-=0.3")
        .fromTo(".hero-desc", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.5")
        .fromTo(".hero-stats-card", { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.6, ease: "power3.out", stagger: 0.1 }, "-=0.5")
        .fromTo(".hero-ctas", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.5");

      gsap.to(".orbit-wrapper", {
        rotation: 360,
        transformOrigin: "center center",
        duration: 45,
        repeat: -1,
        ease: "linear",
      });

      gsap.to(".topper-node", {
        rotation: -360,
        transformOrigin: "center center",
        duration: 45,
        repeat: -1,
        ease: "linear",
      });

      const handleMouseMove = (e: MouseEvent) => {
        if (window.innerWidth < 1024) return;
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;
        gsap.to(".parallax-bg", { x: xPos * 0.3, y: yPos * 0.3, duration: 1, ease: "power2.out" });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden bg-[#f8fafc] font-sans pt-6 pb-10 lg:pt-10 lg:pb-12 min-h-[75vh] flex flex-col justify-center border-b border-slate-200/50">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-brand-400/15 blur-[100px]" />
        <div className="parallax-bg absolute top-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-amber-400/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
        <div className="z-20 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left flex flex-col items-center lg:items-start">
          <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-3.5 py-1 mb-5 shadow-[0_8px_20px_rgba(0,0,0,0.04)] backdrop-blur-xl">
            <Shield className="h-3 w-3 text-brand-500" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] text-slate-700">
              India's Premier Mentorship <span className="text-brand-500 mx-1">•</span> JEE <span className="text-brand-400 mx-1">•</span> NEET
            </span>
          </div>

          <h1 ref={titleRef} className="hero-title premium-h1 text-slate-900 mb-5">
            Connect with the <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-400 drop-shadow-[0_4px_10px_rgba(255,91,46,0.15)]">
              Top 1%.
            </span> <br />
            Master Your{" "}
            <span className="relative whitespace-nowrap inline-block">
              Future.
              <div
                className="absolute w-[110%] h-[8px] -bottom-1 -left-[5%] z-0 opacity-30 blur-[0.5px]"
                style={{ 
                  background: 'linear-gradient(90deg, transparent 0%, #FF5B2E 50%, transparent 100%)',
                  transform: 'rotate(-2deg) skewX(-15deg)',
                  borderRadius: '20% 80% 20% 80% / 50%'
                }}
              />
            </span>
          </h1>

          <p className="hero-desc premium-p mb-6 mx-auto lg:mx-0">
            <strong className="text-slate-900 font-bold">TopperMantra</strong> bridges the gap between effort and excellence by connecting you with mentors who have already conquered the summit.
          </p>

          <div className="w-full flex flex-row flex-wrap lg:flex-nowrap gap-3 mb-6 border border-white/60 bg-white/50 rounded-2xl p-3 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
            {[
              { icon: BookOpen, color: "text-brand-500", bg: "bg-brand-50", num: "500+", label: "Verified Toppers" },
              { icon: Shield, color: "text-orange-500", bg: "bg-orange-50", num: "AIR 1+", label: "Rank Holders" },
              { icon: TrendingUp, color: "text-amber-500", bg: "bg-amber-50", num: "10k+", label: "Students Guided" },
            ].map((stat, i) => (
              <div key={i} className="hero-stats-card flex-1 min-w-[110px] flex flex-col items-start p-2.5 rounded-xl hover:bg-white/80 transition-colors border border-transparent hover:border-slate-100 hover:shadow-sm group">
                <div className={`p-1.5 rounded-lg ${stat.bg} mb-2 group-hover:scale-105 transition-transform border border-white`}>
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </div>
                <h3 className="text-slate-900 font-black text-base">{stat.num}</h3>
                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-0.5 group-hover:text-brand-600 transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="hero-ctas flex flex-col w-full sm:w-auto sm:flex-row items-center gap-4 mb-6">
            <a
              href="https://play.google.com/store/apps/details?id=com.support.toppers.mantra&pcampaignid=web_share&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto flex items-center justify-center rounded-xl px-7 py-3.5 bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-[0_10px_25px_rgba(255,91,46,0.25)]"
            >
              Start Learning Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button className="w-full sm:w-auto rounded-xl px-7 py-3.5 font-bold text-slate-700 text-sm border border-slate-200 bg-white/60 hover:border-brand-500/30 hover:bg-white hover:text-brand-600 transition-all backdrop-blur-md shadow-sm hover:shadow-md">
              Explore Courses
            </button>
          </div>
        </div>

        <div ref={constellationRef} className="relative mx-auto mt-6 lg:-mt-10 h-[380px] w-[380px] sm:h-[480px] sm:w-[480px] lg:h-[550px] lg:w-[550px] cursor-grab active:cursor-grabbing">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
            <svg className="h-full w-full">
              <circle cx="50%" cy="50%" r="40%" stroke="url(#brand-grad-1)" strokeWidth="1.5" fill="none" strokeDasharray="8 12" />
              <circle cx="50%" cy="50%" r="28%" stroke="url(#brand-grad-2)" strokeWidth="1" fill="none" strokeDasharray="4 8" className="opacity-50" />
              <defs>
                <linearGradient id="brand-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--brand-500, #ff5b2e)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
                <linearGradient id="brand-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--brand-400, #ff8a5b)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="orbit-wrapper absolute inset-0 h-full w-full">
            {HERO_TOPPERS.map((topper, index) => {
              const premiumShadows = [
                "shadow-[0_12px_30px_rgba(255,91,46,0.12)] border-white/80",
                "shadow-[0_12px_30px_rgba(251,146,60,0.12)] border-white/80",
                "shadow-[0_12px_30px_rgba(245,158,11,0.12)] border-white/80"
              ];
              const shadowClass = premiumShadows[index % premiumShadows.length];

              return (
                <div key={topper.id} className="topper-node absolute flex items-center justify-center z-10" style={{ left: topper.x, top: topper.y }}>
                  <div className="group h-[85px] w-[85px] sm:h-[100px] sm:w-[100px] [perspective:1000px] -translate-x-1/2 -translate-y-1/2">
                    <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
                      <div className={`absolute inset-0 [backface-visibility:hidden] flex flex-col items-center justify-center rounded-3xl border ${shadowClass} bg-white/80 backdrop-blur-xl`}>
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-full bg-slate-50 mb-1 border border-slate-100">
                          <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${topper.name}`} alt={topper.name} width={48} height={48} className="object-cover" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-black text-slate-800 tracking-wide">{topper.name}</span>
                      </div>
                      <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center rounded-3xl border border-brand-200 bg-gradient-to-br from-white to-brand-50 backdrop-blur-xl shadow-[0_15px_35px_rgba(255,91,46,0.15)] p-2">
                        <div className="flex-grow flex items-center justify-center">
                          <p className="text-[9px] sm:text-[10px] font-bold text-slate-700 text-center leading-tight">
                            "{topper.mantra}"
                          </p>
                        </div>
                        <div className="border-t border-brand-200 w-full pt-1 text-center mt-1">
                          <span className="text-[10px] font-black text-brand-600 uppercase tracking-wider">{topper.rank}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex flex-col items-center">
            <div className="relative mb-3">
              <div className="absolute inset-0 h-28 w-28 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-brand-400/20 blur-xl sm:h-36 sm:w-36" />
              <div className="group relative z-10 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-slate-50 p-2 shadow-[0_20px_50px_rgba(255,91,46,0.15)] transition-transform hover:scale-105 hover:border-brand-50 sm:h-36 sm:w-36">
                <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" alt="Student" width={120} height={120} className="object-contain" />
              </div>
            </div>
            <div className="relative w-40 sm:w-48 h-10 flex flex-col items-center -mt-5 z-20">
              <div className="w-full h-3 bg-gradient-to-r from-transparent via-brand-400 to-transparent rounded-[50%] shadow-[0_4px_15px_rgba(255,91,46,0.3)] z-10" />
              <div className="w-[85%] h-7 bg-white rounded-b-full border border-t-0 border-slate-200 shadow-md flex items-center justify-center -mt-1.5">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-700 pt-1">Your Rank</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- WHAT WE DO SECTION COMPONENT ---
const SERVICES_CONTENT = [
  {
    id: 1,
    title: "Elite Mentorship",
    icon: Trophy,
    description: "Access the unwritten roadmaps of AIR 1-100 rankers. Master complex subjects with frameworks used by India's top 1% achievers.",
    features: [
      "Live Strategy with AIR Rankers",
      "Conceptual Clarity Frameworks",
      "National Topper Study Blueprints",
      "One-on-One Mastery Sessions",
      "Psychology of Top Performance"
    ],
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "Hackathon Dominance",
    icon: Code,
    description: "Real-world engineering challenges designed to build technical superiority and problem-solving skills for future innovators.",
    features: [
      "National Format Code Sprints",
      "Smart India Hackathon Blueprints",
      "High-Impact Project Building",
      "Team Leadership Experience",
      "Certificate of Engineering Excellence"
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "Entrepreneurial Path",
    icon: Rocket,
    description: "Master the art of innovation. Learn the fundamentals of startups and business growth directly from successful founders.",
    features: [
      "Mentorship from Real Founders",
      "Ideation to MVP Blueprint",
      "Pitching & Investor Readiness",
      "Innovation Problem Solving",
      "Real-World Business Modeling"
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200"
  }
];

export const WhatWeDoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentService = SERVICES_CONTENT[currentIndex];
  const prevService = SERVICES_CONTENT[(currentIndex - 1 + SERVICES_CONTENT.length) % SERVICES_CONTENT.length];
  const nextService = SERVICES_CONTENT[(currentIndex + 1) % SERVICES_CONTENT.length];

  useGSAP(() => {
    gsap.fromTo(".section-heading",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
    
    gsap.fromTo(".main-card-container", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const navigateToService = (index: number) => {
    const tl = gsap.timeline();
    
    tl.to(".main-card-content", {
      opacity: 0, x: index > currentIndex ? -20 : 20, duration: 0.3, ease: "power2.in",
      onComplete: () => {
        setCurrentIndex(index);
        gsap.fromTo(".main-card-content",
          { opacity: 0, x: index > currentIndex ? 20 : -20 },
          { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }
        );
      }
    });

    gsap.to(".side-card", {
      scale: 0.95, opacity: 0.5, duration: 0.2, yoyo: true, repeat: 1
    });
  };

  const handlePrevious = () => navigateToService((currentIndex - 1 + SERVICES_CONTENT.length) % SERVICES_CONTENT.length);
  const handleNext = () => navigateToService((currentIndex + 1) % SERVICES_CONTENT.length);

  return (
    <section className="relative w-full py-8 md:py-12 bg-brand-50 overflow-hidden flex flex-col justify-center font-sans focus:outline-none">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-50 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-50 rounded-full blur-[120px] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.15]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="section-heading text-center mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-4 py-1.5 text-slate-700 mb-5 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-brand-500" />
            <span className="text-xs font-bold uppercase tracking-widest">Our Expertise</span>
          </div>
          <h2 className="premium-h2 text-slate-900 mb-4">What We Do Best</h2>
          <p className="premium-p max-w-xl mx-auto px-4">
            Empowering students with comprehensive learning experiences across academics, technology, and entrepreneurship.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          <div onClick={handlePrevious} className="hidden lg:block side-card group relative w-44 h-60 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 border border-slate-100 shadow-xl opacity-40 hover:opacity-100">
            <Image src={prevService.image} alt={prevService.title} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
              <span className="text-white text-[10px] font-bold uppercase tracking-wider">{prevService.title}</span>
            </div>
          </div>

          <div className="main-card-container relative w-full max-w-4xl z-30">
            <div className="bg-white/80 backdrop-blur-md rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-white/50 grid md:grid-cols-2 lg:min-h-[480px]">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <Image src={currentService.image} alt={currentService.title} fill className="object-cover transition-transform duration-700 hover:scale-110" />
                <div className="absolute inset-0 bg-brand-600/10 mix-blend-overlay" />
              </div>

              <div className="main-card-content p-6 md:p-8 lg:p-12 flex flex-col">
                <div className="hidden md:flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center">
                    <currentService.icon className="w-6 h-6 text-brand-500" />
                  </div>
                  <span className="text-brand-500 font-bold text-xs uppercase tracking-widest">Service 0{currentIndex + 1}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 leading-tight">{currentService.title}</h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">{currentService.description}</p>

                <div className="space-y-4 mb-10">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                        <Check className="w-3.5 h-3.5 text-brand-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-slate-700 text-sm md:text-base font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 md:mt-auto flex items-center justify-between md:justify-start gap-4 border-t border-slate-100 pt-6 md:border-none md:pt-0">
                  <div className="flex items-center gap-4">
                    <button onClick={handlePrevious} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:border-brand-500 hover:text-white transition-all shadow-sm active:scale-95">
                      <ChevronLeft size={24} />
                    </button>
                    <button onClick={handleNext} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:border-brand-500 hover:text-white transition-all shadow-sm active:scale-95">
                      <ChevronRight size={24} />
                    </button>
                  </div>
                  <div className="flex gap-2">
                    {SERVICES_CONTENT.map((_, i) => (
                      <div key={i} className={`h-1.5 transition-all duration-300 rounded-full ${i === currentIndex ? 'w-8 bg-brand-500' : 'w-2 bg-slate-200'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div onClick={handleNext} className="hidden lg:block side-card group relative w-48 h-64 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 border border-slate-100 shadow-xl opacity-40 hover:opacity-100">
            <Image src={nextService.image} alt={nextService.title} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
              <span className="text-white text-xs font-bold uppercase tracking-wider">{nextService.title}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- WHY CHOOSE SECTION COMPONENT ---
const UserIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const WhyChooseSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }
    });

    tl.fromTo(".reveal-header", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power3.out" }
    )
    .fromTo(".reveal-card", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power3.out" }, 
      "-=0.5"
    );

    gsap.to(".floating-blob", {
      y: "random(-30, 30)",
      x: "random(-20, 20)",
      duration: "random(4, 6)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full py-10 md:py-16 bg-slate-50 overflow-hidden font-sans">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="floating-blob absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]" />
        <div className="floating-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[150px]" />
        <div className="floating-blob absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-amber-400/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <div className="reveal-header inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 backdrop-blur-md px-5 py-2.5 text-slate-800 mb-6 shadow-sm">
            <Crown className="h-4 w-4 text-amber-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">One Elite Platform. Two Paths.</span>
          </div>
          <h2 className="reveal-header premium-h2 text-slate-900 mb-6">
            The TopperMantra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Ecosystem</span>
          </h2>
          <p className="reveal-header max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed px-4">
            Whether you are an ambitious student taking charge of your future, or a visionary school empowering your entire campus, the destination is the same: <b>Top 1% Results.</b>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <div className="reveal-card group relative bg-white/80 backdrop-blur-2xl border border-white/40 shadow-2xl shadow-slate-200/50 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-900/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400" />
            <div className="flex flex-col mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100">
                  <UserIcon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-[11px] font-extrabold text-blue-600 uppercase tracking-widest">For Ambitious Individuals</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Direct Access to Greatness</h3>
              <p className="text-slate-600 leading-relaxed">
                Skip the middleman. Get direct, unfiltered access to the blueprints of students who have already cracked India's toughest exams.
              </p>
            </div>
            <div className="relative w-full h-64 mb-10 overflow-hidden rounded-3xl">
              <Image src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200" alt="Intense Student Focus" fill className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            <div className="space-y-8 mb-12">
              {[
                { icon: Star, title: "Personalised Blueprints", desc: "Learn directly from AIR 1-100 achievers tailored to your specific goals." },
                { icon: Target, title: "Self-Paced Mastery", desc: "Control your own schedule, manage stress, and build your own winning edge." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="/join/student" className="relative w-full inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-brand-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 active:scale-[0.98]">
               Explore More
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="reveal-card group relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 shadow-2xl shadow-slate-900/50 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-500" />
            <div className="flex flex-col mb-10 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-md">
                  <School className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-[11px] font-extrabold text-amber-400 uppercase tracking-widest">For Visionary Institutions</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Empower Your Entire Campus</h3>
              <p className="text-slate-300 leading-relaxed">
                Bring the exact same TopperMantra ecosystem to your school. Integrate elite mentorship directly into your institutional DNA.
              </p>
            </div>
            <div className="relative w-full h-64 mb-10 overflow-hidden rounded-3xl border border-slate-700">
              <Image src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" alt="Modern Institutional Collaboration" fill className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
            </div>
            <div className="space-y-8 mb-12 relative z-10">
              {[
                { icon: TrendingUp, title: "Elevate Institutional Prestige", desc: "Dramatically increase your school's AIR rankers using our proven framework." },
                { icon: ShieldCheck, title: "Seamless Integration", desc: "We provide the platform and mentors; you provide the students. No operational friction." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 backdrop-blur-sm">
                    <item.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="/join/school" className="relative w-full inline-flex items-center justify-center gap-3 bg-white hover:bg-brand-500 text-slate-900 hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 active:scale-[0.98]">
               Explore More
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// // --- MENTORS SECTION COMPONENT ---
// const MENTOR_CATEGORIES = [
//   { id: "academic", name: "Academic Mentorship", icon: BookOpen },
//   { id: "hackathon", name: "Hackathons", icon: Code },
//   { id: "startup", name: "Startup Mentorship", icon: Rocket },
// ];

// const MENTORS_DATA = [
//   {
//     id: 1, category: "academic", name: "Arjun Sharma", college: "IIT Bombay", rank: "AIR 12", qualification: "B.Tech CS", experience: "5+ Years", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600", tags: ["JEE Advanced", "Math Maestro"], description: "Expert in Advanced Mathematics with a track record of mentoring top 100 AIR rankers.", expertise: ["Advanced Calculus", "Problem Solving", "Exam Strategy"]
//   },
//   {
//     id: 2, category: "academic", name: "Dr. Priya Verma", college: "AIIMS Delhi", rank: "AIR 4", qualification: "MBBS", experience: "6+ Years", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600", tags: ["NEET Biology", "Mind Maps"], description: "Simplifies complex physiological concepts through innovative visual learning.", expertise: ["Human Physiology", "Anatomy Visualization", "NEET Prep"]
//   },
//   {
//     id: 3, category: "academic", name: "Rahul Gupta", college: "IIM Ahmedabad", rank: "99.98%ile", qualification: "MBA", experience: "8+ Years", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600", tags: ["CAT", "Logical Mastery"], description: "Strategist focusing on competitive exam psychology and conceptual mastery.", expertise: ["Quantitative Aptitude", "Logical Reasoning", "Interview Prep"]
//   },
//   {
//     id: 4, category: "academic", name: "Sanya Singh", college: "DTU Delhi", rank: "AIR 102", qualification: "B.Tech IT", experience: "5+ Years", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600", tags: ["Organic Chemistry", "Boards"], description: "Specializes in Inorganic Chemistry and high-scoring strategies for Boards.", expertise: ["Inorganic Reactions", "Board Exam Patterns", "Score Optimization"]
//   },
//   {
//     id: 5, category: "hackathon", name: "Vikram Das", college: "NIT Trichy", rank: "SIH Winner", qualification: "Full Stack Dev", experience: "30+ Hackathons", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600", tags: ["Web3", "System Design"], description: "Smart India Hackathon winner. Helps you build scalable MVPs in 24 hours.", expertise: ["MERN Stack", "Blockchain Dev", "Rapid Prototyping"]
//   },
//   {
//     id: 6, category: "hackathon", name: "Neha Kapoor", college: "IIIT Hyderabad", rank: "Global Top 10", qualification: "AI/ML Engineer", experience: "4+ Years", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600", tags: ["AI/ML", "Pitch Deck"], description: "Master at integrating AI APIs and delivering winning hacker pitches.", expertise: ["NLP Models", "PyTorch", "Pitch Presentation"]
//   },
//   {
//     id: 9, category: "startup", name: "Rohan Mehta", college: "Stanford GSB", rank: "Ex-YC Founder", qualification: "Serial Entrepreneur", experience: "10+ Years", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600", tags: ["Fundraising", "GTM Strategy"], description: "Helps early-stage startups navigate Y-Combinator applications and seed rounds.", expertise: ["Seed Funding", "Scale Strategy", "Founder Mindset"]
//   },
//   {
//     id: 10, category: "startup", name: "Smriti Rao", college: "ISB Hyderabad", rank: "Angel Investor", qualification: "Finance Expert", experience: "8+ Years", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600", tags: ["Financial Modeling", "B2B"], description: "Assists founders in creating bulletproof financial models and B2B sales pipelines.", expertise: ["Venture Capital", "Unit Economics", "B2B Sales"]
//   }
// ];

// export const MentorsSection = () => {
//   const [activeCategory, setActiveCategory] = useState("academic");
//   const [displayedMentors, setDisplayedMentors] = useState(MENTORS_DATA.filter(m => m.category === "academic"));
//   const [expandedId, setExpandedId] = useState<number | null>(null);
//   const sectionRef = useRef(null);
//   const scrollContainerRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     gsap.from(".mentor-header", {
//       scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
//       opacity: 0, y: 30, duration: 1, ease: "power4.out"
//     });
//   }, { scope: sectionRef });

//   const handleCategoryChange = (newCategory: string) => {
//     if (newCategory === activeCategory) return;
//     setExpandedId(null);
//     const tl = gsap.timeline();
//     tl.to(".mentor-card", {
//       opacity: 0,
//       y: -20,
//       filter: "blur(10px)",
//       stagger: 0.05,
//       duration: 0.4,
//       onComplete: () => {
//         setActiveCategory(newCategory);
//         setDisplayedMentors(MENTORS_DATA.filter(m => m.category === newCategory));
//         if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0;
//       }
//     });
//     tl.fromTo(".mentor-card", 
//       { opacity: 0, y: 40, filter: "blur(20px)" },
//       { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.1, duration: 0.8, ease: "power3.out", clearProps: "all" }
//     );
//   };

//   const scroll = (direction: 'left' | 'right') => {
//     if (scrollContainerRef.current) {
//       const { scrollLeft, clientWidth } = scrollContainerRef.current;
//       const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
//       scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
//     }
//   };

//   return (
//     <section ref={sectionRef} className="relative w-full py-8 md:py-10 bg-white overflow-hidden font-sans">
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
//         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-400/5 rounded-full blur-[100px]" />
//         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px]" />
//       </div>

//       <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-12">
//         <div className="mentor-header text-center mb-6 md:mb-8">
//           <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white px-5 py-2 text-slate-700 mb-6 shadow-sm">
//             <Sparkles size={14} className="text-brand-500" />
//             <span className="text-[10px] font-bold uppercase tracking-[0.2em]">India&apos;s Elite Mentor Circle</span>
//           </div>
//           <h2 className="premium-h2 text-slate-900">Meet Your Future Architects</h2>
//           <p className="premium-p max-w-xl mx-auto mt-4 px-4">
//              Learn directly from the students who have cracked India&apos;s toughest exams. Real-world insights from the current Top 1%.
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {MENTOR_CATEGORIES.map((cat) => (
//             <button
//               key={cat.id}
//               onClick={() => handleCategoryChange(cat.id)}
//               className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold transition-all ${activeCategory === cat.id ? "bg-slate-900 text-white shadow-xl" : "bg-white text-slate-600 border border-slate-100"}`}
//             >
//               <cat.icon size={16} className={activeCategory === cat.id ? "text-brand-400" : "text-slate-400"} />
//               {cat.name}
//             </button>
//           ))}
//         </div>

//         <div className="relative group">
//           <button onClick={() => scroll('left')} className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-2xl flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-500 hover:text-white hidden lg:flex">
//             <ChevronLeft size={24} />
//           </button>
//           <button onClick={() => scroll('right')} className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-2xl flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-500 hover:text-white hidden lg:flex">
//             <ChevronRight size={24} />
//           </button>

//           <div ref={scrollContainerRef} className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10 gap-6">
//             {displayedMentors.map((mentor) => (
//               <div key={mentor.id} className="mentor-card relative flex-shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-center bg-white rounded-[2rem] p-4 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_32px_64px_rgba(251,91,46,0.08)] transition-all duration-500">
//                 <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 bg-slate-50">
//                    <Image src={mentor.image} alt={mentor.name} fill className="object-cover transition-transform duration-700 hover:scale-105" />
//                    <div className="absolute top-4 right-4 bg-brand-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">{mentor.rank}</div>
//                 </div>

//                 <div className="px-2">
//                   <h3 className="text-lg font-bold text-slate-900 mb-1">{mentor.name}</h3>
//                   <p className="text-[11px] text-slate-500 font-medium mb-3 line-clamp-2 leading-relaxed">{mentor.description}</p>
                  
//                   <div className="mb-4">
//                     <button onClick={() => setExpandedId(expandedId === mentor.id ? null : mentor.id)} className="flex items-center gap-2 py-1.5 px-3 rounded-full bg-slate-50 hover:bg-brand-50 transition-colors group/btn border border-slate-100/50">
//                       <Trophy size={12} className="text-brand-500" />
//                       <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 group-hover/btn:text-brand-600">Expertise</span>
//                       <ChevronDown size={14} className={`text-slate-400 group-hover/btn:text-brand-400 transition-transform duration-300 ${expandedId === mentor.id ? 'rotate-180' : ''}`} />
//                     </button>
                    
//                     <AnimatePresence mode="wait">
//                       {expandedId === mentor.id && (
//                         <motion.div initial={{ height: 0, opacity: 0, y: -5 }} animate={{ height: "auto", opacity: 1, y: 0 }} exit={{ height: 0, opacity: 0, y: -5 }} transition={{ duration: 0.25, ease: "easeOut" }} className="overflow-hidden">
//                           <div className="pt-3 flex flex-wrap gap-1.5">
//                             {mentor.expertise?.map((exp, i) => (
//                               <span key={i} className="text-[8.5px] font-bold px-2.5 py-1 bg-white text-slate-600 rounded-md border border-slate-100 shadow-sm">{exp}</span>
//                             ))}
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>

//                   <div className="space-y-2.5 pt-4 border-t border-slate-100/60">
//                     <div className="flex items-center gap-2.5">
//                        <GraduationCap size={14} className="text-slate-400" />
//                        <span className="text-[11px] font-bold text-slate-700">{mentor.college}</span>
//                     </div>
//                     <div className="flex items-center gap-2.5">
//                        <Briefcase size={14} className="text-slate-400" />
//                        <span className="text-[11px] font-bold text-slate-700">{mentor.experience} Exp</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="mt-8 text-center">
//             <a href="https://play.google.com/store/apps/details?id=com.support.toppers.mantra&pcampaignid=web_share&pli=1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full text-xs font-bold hover:bg-brand-500 transition-all shadow-xl active:scale-95">
//                View All Mentors in App
//                <Star size={14} fill="currentColor" className="text-brand-400" />
//             </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// ─── TYPES ───────────────────────────────────────────────────────────────────

type Mentor = {
  id: number;
  name: string;
  college: string;
  rank: string;
  qualification: string;
  experience: string;
  image: string;
  tags: string[];
  description: string;
  expertise: string[];
  color: string;
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const MENTORS_DATA: Record<string, Mentor[]> = {
  academic: [
    {
      id: 1, name: "Arjun Sharma", college: "IIT Bombay", rank: "AIR 12",
      qualification: "B.Tech CS", experience: "5+ Years",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
      tags: ["JEE Advanced", "Math Maestro"],
      description: "Expert in Advanced Mathematics with a track record of mentoring top 100 AIR rankers.",
      expertise: ["Advanced Calculus", "Problem Solving", "Exam Strategy"],
      color: "#C8A84B",
    },
    {
      id: 2, name: "Dr. Priya Verma", college: "AIIMS Delhi", rank: "AIR 4",
      qualification: "MBBS", experience: "6+ Years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600",
      tags: ["NEET Biology", "Mind Maps"],
      description: "Simplifies complex physiological concepts through innovative visual learning.",
      expertise: ["Human Physiology", "Anatomy Visualization", "NEET Prep"],
      color: "#29B8A8",
    },
    {
      id: 3, name: "Rahul Gupta", college: "IIM Ahmedabad", rank: "99.98%ile",
      qualification: "MBA", experience: "8+ Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      tags: ["CAT", "Logical Mastery"],
      description: "Strategist focusing on competitive exam psychology and conceptual mastery.",
      expertise: ["Quantitative Aptitude", "Logical Reasoning", "Interview Prep"],
      color: "#7B5EA7",
    },
    {
      id: 4, name: "Sanya Singh", college: "DTU Delhi", rank: "AIR 102",
      qualification: "B.Tech IT", experience: "5+ Years",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      tags: ["Organic Chemistry", "Boards"],
      description: "Specializes in Inorganic Chemistry and high-scoring strategies for Boards.",
      expertise: ["Inorganic Reactions", "Board Exam Patterns", "Score Optimization"],
      color: "#E85090",
    },
  ],
  hackathon: [
    {
      id: 5, name: "Vikram Das", college: "NIT Trichy", rank: "SIH Winner",
      qualification: "Full Stack Dev", experience: "30+ Hackathons",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
      tags: ["Web3", "System Design"],
      description: "Smart India Hackathon winner. Builds scalable MVPs in 24 hours.",
      expertise: ["MERN Stack", "Blockchain Dev", "Rapid Prototyping"],
      color: "#D85A30",
    },
    {
      id: 6, name: "Neha Kapoor", college: "IIIT Hyderabad", rank: "Global Top 10",
      qualification: "AI/ML Engineer", experience: "4+ Years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
      tags: ["AI/ML", "Pitch Deck"],
      description: "Master at integrating AI APIs and delivering winning hacker pitches.",
      expertise: ["NLP Models", "PyTorch", "Pitch Presentation"],
      color: "#3B8FE8",
    },
  ],
  startup: [
    {
      id: 7, name: "Rohan Mehta", college: "Stanford GSB", rank: "Ex-YC Founder",
      qualification: "Serial Entrepreneur", experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600",
      tags: ["Fundraising", "GTM Strategy"],
      description: "Helps early-stage startups navigate Y-Combinator applications and seed rounds.",
      expertise: ["Seed Funding", "Scale Strategy", "Founder Mindset"],
      color: "#2EAF6B",
    },
    {
      id: 8, name: "Smriti Rao", college: "ISB Hyderabad", rank: "Angel Investor",
      qualification: "Finance Expert", experience: "8+ Years",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
      tags: ["Financial Modeling", "B2B"],
      description: "Assists founders in creating bulletproof financial models and B2B sales pipelines.",
      expertise: ["Venture Capital", "Unit Economics", "B2B Sales"],
      color: "#C8A84B",
    },
  ],
};

const COLUMNS = [
  { key: "academic",  label: "Academic" },
  { key: "hackathon", label: "Hackathons" },
  { key: "startup",   label: "Entrepreneurship" },
];

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const PEEK_H = 52;  // px each stacked card peeks above the next
const TOP_H  = 52;  // height of the topmost (last) card

// ─── STACK COLUMN ────────────────────────────────────────────────────────────

function MentorStack({
  mentors,
  onSelect,
}: {
  mentors: Mentor[];
  onSelect: (m: Mentor) => void;
}) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const N = mentors.length;
  const stackH = (N - 1) * PEEK_H + TOP_H + 20;

  return (
    <div className="relative w-full" style={{ height: stackH }}>
      {mentors.map((mentor, i) => {
        const isTop = i === N - 1;
        const isHovered = hoveredId === mentor.id;
        
        // Dynamic positioning: cards above the hovered one shift slightly
        const hoverOffset = (hoveredId !== null && i > mentors.findIndex(m => m.id === hoveredId)) ? -40 : 0;
        const top = i * PEEK_H + hoverOffset;
        
        const cardH = isHovered ? 180 : (isTop ? TOP_H : PEEK_H + 8);

        return (
          <motion.div
            key={mentor.id}
            className="absolute left-0 right-0 overflow-hidden cursor-pointer select-none group"
            style={{
              top,
              zIndex: isHovered ? 50 : i + 1,
              borderRadius: 24,
              background: mentor.color,
            }}
            animate={{ 
              height: cardH,
              top: top,
              scale: isHovered ? 1.04 : 1,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            onMouseEnter={() => setHoveredId(mentor.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => onSelect(mentor)}
          >
            {/* Photo overlay */}
            <div className="absolute inset-0 overflow-hidden rounded-[24px]">
              <Image
                src={mentor.image}
                alt={mentor.name}
                fill
                className="object-cover transition-opacity duration-500"
                style={{ opacity: (isTop || isHovered) ? 0.45 : 0.2 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Content Container */}
            <div
              className="absolute inset-0 flex flex-col justify-end p-4 md:p-5"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span
                  className="relative z-10 text-white font-black leading-tight truncate"
                  style={{ fontSize: isHovered ? 18 : 14 }}
                >
                  {mentor.name}
                </span>
                {(isTop || isHovered) && (
                  <span
                    className="relative z-10 text-[9px] font-black px-2.5 py-1 rounded-full shadow-lg"
                    style={{ background: "rgba(255,255,255,0.25)", color: "white", backdropFilter: "blur(4px)" }}
                  >
                    {mentor.rank}
                  </span>
                )}
              </div>

              {/* Revealable Details */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-2 space-y-3"
                  >
                    <div className="flex flex-col">
                      <span className="text-[10px] text-white/70 font-bold uppercase tracking-widest">College</span>
                      <span className="text-xs text-white font-bold">{mentor.college}</span>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-white/20 pt-3">
                       <span className="text-[9px] text-white/80 font-black uppercase tracking-widest">View Full Profile</span>
                       <ArrowRight size={14} className="text-white" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// ─── MODAL ───────────────────────────────────────────────────────────────────

function MentorModal({
  mentor,
  onClose,
}: {
  mentor: Mentor;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
      style={{ background: "rgba(0,0,0,0.6)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className="relative w-full max-w-sm sm:max-w-md max-h-[90vh] overflow-y-auto rounded-[24px] bg-white shadow-2xl custom-scrollbar"
        initial={{ scale: 0.86, y: 32, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.86, y: 32, opacity: 0 }}
        transition={{ type: "spring", stiffness: 360, damping: 30 }}
      >
        {/* Hero */}
        <div className="relative h-52 w-full">
          <Image
            src={mentor.image}
            alt={mentor.name}
            fill
            className="object-cover"
          />
          {/* Gradient fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-28"
            style={{
              background: `linear-gradient(to top, ${mentor.color}dd, transparent)`,
            }}
          />
          {/* Rank pill */}
          <div
            className="absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full text-white"
            style={{ background: mentor.color }}
          >
            {mentor.rank}
          </div>
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center hover:opacity-70 transition-opacity"
            style={{ background: "rgba(0,0,0,0.32)", color: "white" }}
          >
            <X size={14} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-slate-900">{mentor.name}</h3>
          <p className="text-xs text-slate-400 mt-0.5 mb-3">
            {mentor.college} · {mentor.qualification}
          </p>

          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            {mentor.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {mentor.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold px-3 py-1 rounded-full"
                style={{
                  background: `${mentor.color}18`,
                  color: mentor.color,
                  border: `1px solid ${mentor.color}38`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Expertise */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {mentor.expertise.map((exp) => (
              <span
                key={exp}
                className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-500"
              >
                {exp}
              </span>
            ))}
          </div>

          {/* Meta */}
          <div className="flex items-center gap-5 text-xs text-slate-400 pb-4 mb-4 border-b border-slate-100">
            <span className="flex items-center gap-1.5">
              <GraduationCap size={12} />
              {mentor.college}
            </span>
            <span className="flex items-center gap-1.5">
              <Briefcase size={12} />
              {mentor.experience} exp
            </span>
          </div>

          {/* CTA */}
          <button
            className="w-full py-3 rounded-2xl text-sm font-bold text-white transition-opacity hover:opacity-85 active:scale-[0.98]"
            style={{ background: mentor.color }}
          >
            Book a Session
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────

export const MentorsSection = () => {
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);

  return (
    <section className="relative w-full py-16 bg-white overflow-hidden font-sans">
      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 w-[420px] h-[420px] rounded-full bg-orange-50 blur-[120px] opacity-70" />
        <div className="absolute bottom-0 -left-20 w-[360px] h-[360px] rounded-full bg-purple-50 blur-[100px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 mb-5 shadow-sm">
            <Star size={11} className="text-amber-500" fill="currentColor" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              India&apos;s Elite Mentor Circle
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Meet Your Future Architects
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            Learn directly from students who cracked India&apos;s toughest exams.
            Real insights from the current Top 1%.
          </p>
        </div>

        {/* 3-column stacks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {COLUMNS.map((col) => (
            <div key={col.key}>
              <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-5 text-center">
                {col.label}
              </p>
              <MentorStack
                mentors={MENTORS_DATA[col.key]}
                onSelect={setSelectedMentor}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.support.toppers.mantra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-slate-900 text-white px-8 py-3.5 rounded-full text-xs font-bold hover:bg-slate-700 transition-colors active:scale-95"
          >
            View All Mentors in App
            <Star size={12} fill="currentColor" className="text-amber-400" />
          </a>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMentor && (
          <MentorModal
            mentor={selectedMentor}
            onClose={() => setSelectedMentor(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// --- SCHOOL PARTNERSHIP COMPONENT ---
const PARTNERSHIP_FEATURES = [
  {
    id: 1,
    title: "Market Dominance",
    desc: "Become the only school in your region offering elite mentorship from National AIR Rankers.",
    icon: Trophy,
    size: "lg", 
    color: "from-orange-500 to-brand-600",
    badge: "Exclusive",
    image: "/images/market-dominance-v2.png"
  },
  { id: 2, title: "Elite Admissions", desc: "Attract premium parents with future-ready skills that go beyond standard board exams.", icon: Sparkles, size: "sm", color: "from-blue-500 to-indigo-600" },
  { id: 3, title: "Prestige Metrics", desc: "Improve your school's official topper count and rankers through specialized goal-driven modules.", icon: TrendingUp, size: "sm", color: "from-emerald-500 to-teal-600" },
  { id: 4, title: "Zero Ops Friction", desc: "We deploy the full ecosystem—mentors, platform, and support. Zero work for your staff.", icon: Settings, size: "sm", color: "from-slate-700 to-slate-900" },
  { id: 5, title: "Institutional Value", desc: "Premium mentorship at smart bulk rates. Maximum value for every student in your school.", icon: Tag, size: "sm", color: "from-purple-500 to-violet-600" },
  { id: 6, title: "Validated Legacy", desc: "A partnership built on real success stories. Leverage our proven track record to build yours.", icon: ShieldCheck, size: "lg", color: "from-brand-500 to-rose-600", badge: "Proven", image: "/images/validated-legacy-v2.png" }
];

export const SchoolPartnership = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(".bento-card", {
      scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      opacity: 0, y: 50, filter: "blur(15px)", stagger: 0.1, duration: 1.2, ease: "power4.out", clearProps: "all"
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full py-16 md:py-20 overflow-hidden bg-[#fdfeff]">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-200/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] bg-blue-200/30 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-[180px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-10 md:mb-16 p-8 md:p-12 rounded-[3rem] bg-white/60 backdrop-blur-2xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative group transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)]">
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-start gap-12 md:gap-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-5 py-2 text-white mb-8 shadow-xl">
                <School size={16} className="text-brand-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Institutional Supremacy</span>
              </div>
              <h2 className="premium-h2 text-slate-900">Partner In <span className="text-brand-500">Excellence</span></h2>
            </div>
            <p className="text-slate-500 max-w-xs text-base md:text-lg font-medium leading-relaxed border-l-2 border-brand-500/20 pl-8 pb-1">
              Empowering leading institutions with India&apos;s most elite mentor ecosystem.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 md:gap-6 h-auto">
          {PARTNERSHIP_FEATURES.map((feature) => (
            <div key={feature.id} className={`group relative rounded-[2.5rem] p-6 md:p-8 border border-white bg-white/60 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-500 ${feature.id === 6 ? 'md:col-span-2 lg:col-span-4 lg:row-span-1' : (feature.size === 'lg' ? 'md:col-span-2 lg:row-span-2' : 'col-span-1')} hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:bg-white/80`}>
              <div className="relative z-10 h-full flex flex-col">
                <div className={feature.id === 6 ? "grid md:grid-cols-2 gap-8 items-center h-full" : "h-full flex flex-col"}>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.color} text-white shadow-lg shadow-brand-500/10`}>
                        <feature.icon size={20} strokeWidth={1.5} />
                      </div>
                      {feature.badge && <span className="text-[7px] font-bold uppercase tracking-widest text-slate-400 border border-white/10 px-2 py-0.5 rounded-full">{feature.badge}</span>}
                    </div>
                    <h3 className={`font-bold text-slate-900 leading-tight mb-2 ${feature.size === 'lg' ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}>{feature.title}</h3>
                    <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed font-medium">{feature.desc}</p>
                    {feature.id === 1 && feature.image && <div className="mt-4 relative w-full h-36 md:h-44 rounded-2xl overflow-hidden border border-white/5 shadow-sm shrink-0"><Image src={feature.image} fill className="object-cover" alt={feature.title} /></div>}
                    {feature.size === 'lg' && feature.id !== 6 && <div className="mt-auto pt-6"><div className="flex items-center gap-2 text-brand-500 font-bold text-sm tracking-tight group-hover:gap-4 transition-all">Institutional Proposal <ArrowRight size={18} /></div></div>}
                  </div>
                  {feature.id === 6 && feature.image && <div className="hidden md:block relative w-full h-full min-h-[160px] rounded-2xl overflow-hidden border border-white/5 shadow-sm"><Image src={feature.image} fill className="object-cover" alt={feature.title} /></div>}
                  {feature.id === 6 && <div className="md:hidden mt-4 pt-4 border-t border-white/10"><div className="flex items-center gap-2 text-brand-500 font-bold text-sm tracking-tight">Institutional Proposal <ArrowRight size={18} /></div></div>}
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-50 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-10 border-t border-slate-100 pt-10">
            <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden">
                       <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=school-${i}`} alt="Partner" />
                    </div>
                  ))}
                </div>
                <div>
                   <p className="text-xl font-black text-slate-900 leading-none">Trusted by 50+</p>
                   <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Institutions Nationwide</p>
                </div>
            </div>
            <button className="group flex items-center gap-3 bg-slate-900 text-white font-black py-5 px-12 rounded-full transition-all duration-500 hover:bg-brand-500 hover:shadow-2xl hover:shadow-brand-500/30 scale-100 active:scale-95">
               Begin Institutional Partnership
              <Gem size={20} className="text-brand-400 group-hover:rotate-12 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
};

// --- RESULTS SECTION COMPONENT ---
const RESULTS_STATS = [
  { id: 1, value: 10000, suffix: "+", label: "Students Guided", color: "from-slate-900 via-slate-800 to-brand-500", icon: Globe, meta: "Network: GLOBAL" },
  { id: 2, value: 500, suffix: "+", label: "Elite Mentors", color: "from-slate-900 via-slate-800 to-blue-500", icon: ShieldCheck, meta: "Status: VERIFIED" },
  { id: 3, value: 50, suffix: "+", label: "Partner Schools", color: "from-slate-900 via-slate-800 to-brand-400", icon: Sparkles, meta: "Tier: INSTITUTIONAL" }
];

export const ResultsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(".stat-card", { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: "power2.out" });
          const numbers = document.querySelectorAll(".stat-number");
          numbers.forEach((num) => {
            const target = parseInt(num.getAttribute("data-target") || "0");
            const obj = { val: 0 };
            gsap.to(obj, { val: target, duration: 2.5, ease: "power2.out", onUpdate: () => { num.innerHTML = Math.round(obj.val).toLocaleString(); } });
          });
          if (containerRef.current) observer.unobserve(containerRef.current);
        }
      });
    }, { threshold: 0.2 });
    if (containerRef.current) {
       gsap.set(".stat-card", { opacity: 0, y: 20 });
       observer.observe(containerRef.current);
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full py-10 lg:py-14 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-center">
          {RESULTS_STATS.map((stat, idx) => (
            <div key={stat.id} className={`stat-card flex flex-col items-center text-center px-4 ${idx !== RESULTS_STATS.length - 1 ? 'md:border-r border-slate-100' : ''}`}>
              <div className="mb-6 text-slate-400"><stat.icon size={32} strokeWidth={1.5} /></div>
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span className="stat-number premium-h1 text-slate-900" data-target={stat.value}>0</span>
                <span className="text-2xl lg:text-3xl font-bold text-slate-400">{stat.suffix}</span>
              </div>
              <h3 className="text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{stat.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PRICING TEASER COMPONENT ---
const PRICING_PLANS = [
  { id: "individual", name: "Achiever Pro", tagline: "For ambitious students aiming for the top 1%.", price: "₹1,499", period: "/mo", features: ["1-on-1 Monthly Topper Session", "Unlimited Success Mantras", "Early Access to Hackathons", "Strategic Exam Roadmaps"], buttonText: "Begin Journey", popular: false, gradient: "from-slate-50 to-white" },
  { id: "institutional", name: "Institutional Excellence", tagline: "Complete mentorship ecosystem for your school.", price: "Custom", period: "Pricing", features: ["Dedicated Mentor assigned to school", "Quarterly Strategic Audits", "Bulk Student Onboarding", "Institutional Branding & Support"], buttonText: "Inquire Now", popular: true, gradient: "from-brand-50/50 to-white" }
];

export const PricingTeaser = () => {
  return (
    <section className="relative w-full py-12 lg:py-16 bg-white overflow-hidden font-sans">
      <div className="absolute inset-0 pointer-events-none opacity-20"><div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]" /></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 shadow-sm mb-6"><Star size={14} className="text-brand-500" fill="currentColor" /><span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-800">Investment in Excellence</span></div>
            <h2 className="premium-h2 text-slate-900">Premium Tiers for Extraordinary Goals</h2>
           <p className="premium-p mx-auto px-4">Choose the path that aligns with your ambition. Whether you&apos;re an individual achiever or a leading institution.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 max-w-5xl mx-auto">
           {PRICING_PLANS.map((plan) => (
              <div key={plan.id} className={`relative flex flex-col p-7 lg:p-12 rounded-[2.5rem] border transition-all duration-500 group ${plan.popular ? 'bg-gradient-to-b from-brand-50 to-white border-brand-100 shadow-[0_32px_80px_rgba(251,146,60,0.12)]' : 'bg-white border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_45px_100px_rgba(0,0,0,0.06)]'}`}>
                {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2 whitespace-nowrap"><Sparkles size={11} className="text-brand-400" />Most Popular Choice</div>}
                <div className="mb-8"><h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3><p className="text-slate-400 text-[10px] font-medium uppercase tracking-widest">{plan.tagline}</p></div>
                <div className="mb-8 flex items-baseline gap-1"><span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{plan.price}</span><span className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">{plan.period}</span></div>
                <div className="space-y-4 mb-12 flex-grow">{plan.features.map((feature, idx) => (<div key={idx} className="flex items-center gap-3"><div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-400'}`}><Check size={14} strokeWidth={3} /></div><span className="text-sm font-bold text-slate-600">{feature}</span></div>))}</div>
                <a href="https://play.google.com/store/apps/details?id=com.support.toppers.mantra&pcampaignid=web_share&pli=1" target="_blank" rel="noopener noreferrer" className={`w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn active:scale-[0.98] ${plan.popular ? 'bg-slate-900 text-white shadow-xl hover:bg-brand-500' : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-400'}`}>Download App to Subscribe<ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" /></a>
              </div>
           ))}
        </div>
        <div className="mt-16 text-center"><button className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 hover:text-brand-500 transition-all flex items-center gap-3 mx-auto group"><ShieldCheck size={16} className="text-brand-500" /> View Competitive Bulk Pricing Breakdown<ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></button></div>
      </div>
    </section>
  );
};

// --- FINAL CTA COMPONENT ---
export const FinalCTA = () => {
  return (
    <section className="relative w-full py-10 lg:py-14 bg-slate-950 overflow-hidden font-sans">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent opacity-50" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8"><div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.4em] text-brand-400"><Sparkles size={14} />Your Legacy Begins Here</div></div>
        <h2 className="premium-h1 text-white mb-4">Download the TopperMantra App Today</h2>
        <p className="premium-p max-w-2xl mx-auto mb-10 px-4 md:px-0 text-slate-400">Stop leaving your future to chance. Join India&apos;s most elite mentorship network and secure your place in the top 1%.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a href="https://play.google.com/store/apps/details?id=com.support.toppers.mantra&pcampaignid=web_share&pli=1" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto h-16 px-10 rounded-2xl bg-brand-500 text-white font-bold text-lg shadow-2xl shadow-brand-500/20 hover:bg-brand-600 hover:shadow-brand-500/40 transition-all active:scale-[0.98] overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3 h-full">Get it on Google Play<Rocket size={20} className="transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px]" /></span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
        </div>
        <div className="mt-16 flex items-center justify-center gap-8 opacity-30 text-white">
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /><span className="text-[10px] font-bold uppercase tracking-widest">Admissions Active</span></div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500" /><span className="text-[10px] font-bold uppercase tracking-widest">Global Support</span></div>
        </div>
      </div>
    </section>
  );
};

