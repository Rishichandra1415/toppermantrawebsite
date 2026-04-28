"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Star, Shield, Play, TrendingUp, BookOpen, Sparkles } from "lucide-react";
// import Button from "@/components/common/Button"; // Uncomment if using

const TOPPERS = [
  { id: 1, name: "Arjun M.", rank: "AIR 12", mantra: "Consistency is better than perfection.", x: "15%", y: "15%" },
  { id: 2, name: "Priya S.", rank: "AIR 45", mantra: "Master the basics, the rest will follow.", x: "80%", y: "20%" },
  { id: 3, name: "Rahul K.", rank: "AIR 8", mantra: "Your only limit is your mind.", x: "85%", y: "70%" },
  { id: 4, name: "Sanya V.", rank: "AIR 102", mantra: "Discipline is the bridge between goals.", x: "10%", y: "65%" },
  { id: 5, name: "Ishaan T.", rank: "AIR 24", mantra: "Focus on the process, not the result.", x: "50%", y: "85%" },
];

const HomeHero = () => {
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

      // 🌍 ORBITAL / GLOBE ANIMATION (Ferris Wheel Effect)
      // Rotates the entire wrapper container
      gsap.to(".orbit-wrapper", {
        rotation: 360,
        transformOrigin: "center center",
        duration: 45, // Slow, premium rotation speed
        repeat: -1,
        ease: "linear",
      });

      // Counter-rotates the cards so they always stay upright
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
    <section ref={containerRef} className="relative w-full overflow-hidden bg-slate-950 font-sans pt-6 pb-10 lg:pt-10 lg:pb-12 min-h-[75vh] flex flex-col justify-center border-b border-brand-500/10">

      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-brand-500/10 blur-[100px]" />
        <div className="parallax-bg absolute top-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-orange-400/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">

        {/* Left Content Area (COMPACT) */}
        <div className="z-20 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left flex flex-col items-center lg:items-start">

          <div className="hero-badge inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 mb-5 shadow-[0_0_15px_rgba(255,91,46,0.1)] backdrop-blur-md">
            <Shield className="h-3 w-3 text-brand-400" />
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.1em] text-slate-300">
              India's Premier Mentorship <span className="text-brand-500 mx-1">•</span> JEE <span className="text-brand-400 mx-1">•</span> NEET
            </span>
          </div>

          <h1 ref={titleRef} className="hero-title text-white text-4xl sm:text-5xl lg:text-[60px] font-extrabold leading-[1.05] tracking-tight mb-5">
            Connect with the <br className="hidden sm:block" />
            <span className="text-gradient drop-shadow-[0_0_20px_rgba(255,91,46,0.3)]">
              Top 1%.
            </span> <br />
            Master Your Future.
          </h1>

          <p className="hero-desc mb-6 mx-auto lg:mx-0 max-w-lg text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
            <strong className="text-white font-semibold">TopperMantra</strong> bridges the gap between effort and excellence by connecting you with mentors who have already conquered the summit.
          </p>

          {/* Stats Cards - Compact Mode */}
          <div className="w-full flex flex-row flex-wrap lg:flex-nowrap gap-3 mb-6 border border-slate-800 bg-slate-900/60 rounded-xl p-3 backdrop-blur-md">
            {[
              { icon: BookOpen, color: "text-brand-400", bg: "bg-brand-500/10", num: "500+", label: "Verified Toppers" },
              { icon: Shield, color: "text-orange-400", bg: "bg-orange-500/10", num: "AIR 1+", label: "Rank Holders" },
              { icon: TrendingUp, color: "text-amber-400", bg: "bg-amber-500/10", num: "10k+", label: "Students Guided" },
            ].map((stat, i) => (
              <div key={i} className="hero-stats-card flex-1 min-w-[110px] flex flex-col items-start p-2.5 rounded-lg hover:bg-slate-800/50 transition-colors border border-transparent hover:border-brand-500/20 group">
                <div className={`p-1.5 rounded-md ${stat.bg} mb-2 group-hover:scale-105 transition-transform`}>
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                </div>
                <h3 className="text-white font-bold text-base">{stat.num}</h3>
                <p className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5 group-hover:text-brand-300 transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="hero-ctas flex flex-col w-full sm:w-auto sm:flex-row items-center gap-4 mb-6">
            <a
              href="https://play.google.com/store/apps/details?id=com.support.toppers.mantra&pcampaignid=web_share&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto flex items-center justify-center rounded-lg px-7 py-3 bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(255,91,46,0.3)]"
            >
              Start Learning Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button className="w-full sm:w-auto rounded-lg px-7 py-3 font-semibold text-slate-300 text-sm border border-slate-700 bg-slate-900/50 hover:border-brand-500/50 hover:text-brand-400 transition-colors backdrop-blur-sm">
              Explore Courses
            </button>
          </div>



        </div>

        {/* Right Constellation Area (Shifted UP and Made Circular) */}
        <div ref={constellationRef} className="relative mx-auto mt-6 lg:-mt-10 h-[380px] w-[380px] sm:h-[480px] sm:w-[480px] lg:h-[550px] lg:w-[550px] cursor-grab active:cursor-grabbing">

          {/* Orbital Rings inside square container for perfect circle */}
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

          {/* 🌍 The Rotating Wrapper (Globe) */}
          <div className="orbit-wrapper absolute inset-0 h-full w-full">
            {TOPPERS.map((topper, index) => {
              const neonColors = [
                "border-brand-500/50 shadow-[0_0_15px_rgba(255,91,46,0.2)]",
                "border-orange-400/50 shadow-[0_0_15px_rgba(251,146,60,0.2)]",
                "border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              ];
              const colorClass = neonColors[index % neonColors.length];

              return (
                <div key={topper.id} className="topper-node absolute flex items-center justify-center z-10" style={{ left: topper.x, top: topper.y }}>

                  {/* 🃏 3D FLIP CARD EFFECT */}
                  <div className="group h-[85px] w-[85px] sm:h-[100px] sm:w-[100px] [perspective:1000px] -translate-x-1/2 -translate-y-1/2">
                    <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">

                      {/* Card FRONT: Avatar + Name */}
                      <div className={`absolute inset-0 [backface-visibility:hidden] flex flex-col items-center justify-center rounded-2xl border ${colorClass} bg-slate-900/90 backdrop-blur-md`}>
                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center overflow-hidden rounded-full bg-slate-800 mb-1 border border-slate-700">
                          <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${topper.name}`} alt={topper.name} width={48} height={48} className="object-cover" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-wide">{topper.name}</span>
                      </div>

                      {/* Card BACK: Mantra Note + Rank */}
                      <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center rounded-2xl border border-brand-400 bg-brand-500/10 backdrop-blur-xl shadow-[0_0_20px_rgba(255,91,46,0.4)] p-2">
                        <div className="flex-grow flex items-center justify-center">
                          <p className="text-[9px] sm:text-[10px] font-medium text-slate-200 text-center leading-tight">
                            "{topper.mantra}"
                          </p>
                        </div>
                        <div className="border-t border-brand-500/30 w-full pt-1 text-center mt-1">
                          <span className="text-[10px] font-black text-brand-400 uppercase tracking-wider">{topper.rank}</span>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              )
            })}
          </div>

          {/* Center 'YOU' Node (Stays stationary in the middle) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex flex-col items-center">
            <div className="relative mb-3">
              <div className="absolute inset-0 h-28 w-28 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-brand-500/20 blur-xl sm:h-36 sm:w-36" />

              <div className="group relative z-10 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-brand-500/50 bg-gradient-to-b from-slate-800 to-slate-950 p-2 shadow-[0_0_30px_rgba(255,91,46,0.3)] transition-transform hover:scale-105 hover:border-brand-400 sm:h-36 sm:w-36">
                <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" alt="Student" width={120} height={120} className="object-contain opacity-90" />
              </div>
            </div>

            <div className="relative w-40 sm:w-48 h-10 flex flex-col items-center -mt-5 z-20">
              <div className="w-full h-3 bg-gradient-to-r from-slate-900 via-brand-500/80 to-slate-900 rounded-[50%] shadow-[0_0_15px_rgba(255,91,46,0.4)] z-10" />
              <div className="w-[85%] h-6 bg-gradient-to-b from-slate-800 to-slate-950 rounded-b-full border-b border-brand-500/30 flex items-center justify-center -mt-1.5">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-100 pt-1">Your Rank</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeHero;