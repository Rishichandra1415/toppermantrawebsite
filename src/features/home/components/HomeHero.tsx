
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import Button from "@/components/common/Button";

const TOPPERS = [
  { id: 1, name: "Arjun M.", rank: "AIR 12", mantra: "Consistency is better than perfection.", x: "10%", y: "15%" },
  { id: 2, name: "Priya S.", rank: "AIR 45", mantra: "Master the basics, the rest will follow.", x: "75%", y: "10%" },
  { id: 3, name: "Rahul K.", rank: "AIR 8", mantra: "Your only limit is your mind.", x: "85%", y: "55%" },
  { id: 4, name: "Sanya V.", rank: "AIR 102", mantra: "Discipline is the bridge between goals.", x: "5%", y: "65%" },
  { id: 5, name: "Ishaan T.", rank: "AIR 24", mantra: "Focus on the process, not the result.", x: "50%", y: "85%" },
];

const HomeHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const constellationRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(".hero-badge", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
        .fromTo(".hero-title-word", { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 1.2, ease: "expo.out" }, "-=0.4")
        .fromTo(".hero-underline", { scaleX: 0 }, { scaleX: 1, duration: 1, ease: "power4.inOut" }, "-=0.6")
        .fromTo(".hero-desc", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.8")
        .fromTo(".hero-ctas", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.8")
        .fromTo(".hero-stats", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.8");

      gsap.to(".topper-node", {
        y: "random(-10, 10)",
        x: "random(-8, 8)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.5, from: "random" },
      });

      const handleMouseMove = (e: MouseEvent) => {
        if (window.innerWidth < 1024) return;
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 30;
        const yPos = (clientY / window.innerHeight - 0.5) * 30;
        gsap.to(".parallax-bg", { x: xPos * 0.5, y: yPos * 0.5, duration: 1, ease: "power2.out" });
        gsap.to(".constellation-layer", { x: -xPos, y: -yPos, duration: 1.5, ease: "power3.out" });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#fafafa] font-sans py-12 lg:py-20">
      
      {/* Premium Background Orbs - Mobile Optimized */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="parallax-bg absolute -top-10 -left-10 h-[250px] w-[250px] rounded-full bg-brand-300/20 opacity-70 blur-[60px] sm:h-[400px] sm:w-[400px] lg:top-[-10%] lg:left-[10%] lg:blur-[100px]" />
        <div className="parallax-bg absolute bottom-0 right-[-10%] h-[200px] w-[200px] rounded-full bg-accent-300/20 opacity-60 blur-[50px] sm:h-[350px] sm:w-[350px] lg:bottom-[10%] lg:right-[15%] lg:blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12">
        
        {/* Left Content Area */}
        <div className="z-20 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left mt-8 lg:mt-0">
          
          <h1 ref={titleRef}>
            Connect with the <span className="text-brand-500">Top 1%</span>. <br className="hidden sm:block" />
            Master Your Future.
          </h1>

          <p className="hero-desc mb-8 mx-auto max-w-xl text-slate-600">
            TopperMantra bridges the gap between effort and excellence by connecting you with mentors who have already conquered the summit.
          </p>

          <div className="hero-ctas flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 lg:justify-start">
            <Button variant="primary" size="lg" className="rounded-full px-8 shadow-lg shadow-brand-500/20">
              Explore Mentors <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Stats Section - Professional & Clean */}
          <div className="hero-stats mt-10 flex flex-wrap items-center justify-center gap-10 lg:justify-start pt-8 border-t border-slate-200">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-2xl font-bold text-slate-900">500+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Verified Toppers</span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-2xl font-bold text-slate-900">AIR 1+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Rank Holders</span>
            </div>
          </div>
        </div>

        {/* Right Constellation Area */}
        <div ref={constellationRef} className="relative mx-auto mt-6 h-[380px] w-full max-w-[500px] cursor-grab active:cursor-grabbing sm:mt-8 sm:h-[450px] lg:h-[600px] lg:max-w-none">
          <div className="constellation-layer absolute inset-0">
            {TOPPERS.map((topper) => (
              <div key={topper.id} className="topper-node group absolute flex flex-col items-center z-10 hover:z-50" style={{ left: topper.x, top: topper.y }}>
                
                {/* Avatar */}
                <div className="relative z-20 flex h-12 w-12 items-center justify-center rounded-full border-[2px] border-white bg-white shadow-lg transition-all duration-400 group-hover:scale-110 group-hover:border-brand-400 sm:h-14 sm:w-14 md:h-16 md:w-16">
                  <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-slate-50">
                    <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${topper.name}`} alt={topper.name} width={64} height={64} className="object-cover" />
                  </div>

                  {/* Tooltip - Now Mobile Friendly with Tap (group-active) */}
                  <div className="absolute bottom-full z-50 mb-3 w-[150px] -translate-x-1/2 left-1/2 translate-y-3 opacity-0 pointer-events-none transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-active:translate-y-0 group-active:opacity-100 sm:w-[200px]">
                    <div className="relative rounded-2xl bg-slate-900/95 p-3.5 text-center text-white shadow-2xl backdrop-blur-sm border border-slate-700">
                      <p className="text-[10px] font-medium leading-relaxed sm:text-[11px]">&quot;{topper.mantra}&quot;</p>
                      <div className="mt-2.5 flex items-center justify-between border-t border-slate-700/50 pt-2">
                        <span className="text-[9px] font-black uppercase tracking-widest text-brand-400">{topper.rank}</span>
                        <div className="flex gap-0.5">
                          {[1, 2, 3].map((i) => (
                            <Star key={i} className="h-2.5 w-2.5 fill-brand-400 text-brand-400" />
                          ))}
                        </div>
                      </div>
                      <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-slate-900/95" />
                    </div>
                  </div>
                </div>

                <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 transition-colors group-hover:text-slate-900 bg-white/60 px-2 py-0.5 rounded-full backdrop-blur-sm">{topper.name}</span>
              </div>
            ))}

            {/* Center 'YOU' Node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
              <div className="relative">
                <div className="absolute inset-0 h-24 w-24 animate-ping rounded-full bg-brand-400/20 sm:h-32 sm:w-32" />
                <div className="group relative z-10 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-[3px] border-white bg-white/80 p-1 shadow-2xl backdrop-blur-md transition-all hover:border-brand-300 hover:scale-105 sm:h-32 sm:w-32 sm:p-1.5">
                  <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" alt="Student" width={110} height={110} className="object-contain" />
                  <div className="absolute bottom-2.5 rounded-full bg-slate-900 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white shadow-lg sm:bottom-4 sm:px-4 sm:text-[10px]">YOU</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeHero;