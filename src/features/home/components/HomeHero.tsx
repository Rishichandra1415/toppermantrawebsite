// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ArrowRight, Star, Sparkles } from "lucide-react";
// import Button from "@/components/common/Button";

// const TOPPERS = [
//   { id: 1, name: "Arjun M.", rank: "AIR 12", mantra: "Consistency is better than perfection.", x: "10%", y: "15%" },
//   { id: 2, name: "Priya S.", rank: "AIR 45", mantra: "Master the basics, the rest will follow.", x: "75%", y: "10%" },
//   { id: 3, name: "Rahul K.", rank: "AIR 8", mantra: "Your only limit is your mind.", x: "85%", y: "55%" },
//   { id: 4, name: "Sanya V.", rank: "AIR 102", mantra: "Discipline is the bridge between goals.", x: "5%", y: "65%" },
//   { id: 5, name: "Ishaan T.", rank: "AIR 24", mantra: "Focus on the process, not the result.", x: "50%", y: "85%" },
// ];

// const HomeHero = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const constellationRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline();
//       tl.fromTo(".hero-badge", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
//         .fromTo(".hero-title-word", { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 1.2, ease: "expo.out" }, "-=0.4")
//         .fromTo(".hero-underline", { scaleX: 0 }, { scaleX: 1, duration: 1, ease: "power4.inOut" }, "-=0.6")
//         .fromTo(".hero-desc", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.8")
//         .fromTo(".hero-ctas", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.8")
//         .fromTo(".hero-stats", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.8");

//       gsap.to(".topper-node", {
//         y: "random(-10, 10)",
//         x: "random(-8, 8)",
//         duration: "random(3, 5)",
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//         stagger: { each: 0.5, from: "random" },
//       });

//       const handleMouseMove = (e: MouseEvent) => {
//         if (window.innerWidth < 1024) return;
//         const { clientX, clientY } = e;
//         const xPos = (clientX / window.innerWidth - 0.5) * 30;
//         const yPos = (clientY / window.innerHeight - 0.5) * 30;
//         gsap.to(".parallax-bg", { x: xPos * 0.5, y: yPos * 0.5, duration: 1, ease: "power2.out" });
//         gsap.to(".constellation-layer", { x: -xPos, y: -yPos, duration: 1.5, ease: "power3.out" });
//       };

//       window.addEventListener("mousemove", handleMouseMove);
//       return () => window.removeEventListener("mousemove", handleMouseMove);
//     }, containerRef);

//     return () => ctx.revert();
//   }, { scope: containerRef });

//   return (
//     <section ref={containerRef} className="overflow-hidden bg-brand-50 font-sans">
//       <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//         <div className="parallax-bg absolute -top-20 left-0 h-[300px] w-[300px] rounded-full bg-brand-100/50 opacity-60 blur-[80px] sm:h-[400px] sm:w-[400px] lg:left-1/4 lg:blur-[100px]" />
//         <div className="parallax-bg absolute right-[-10%] top-1/2 h-[250px] w-[250px] rounded-full bg-brand-50/60 opacity-70 blur-[70px] sm:h-[350px] sm:w-[350px] lg:bottom-1/4 lg:right-1/4 lg:blur-[90px]" />
//       </div>

//       <div className="relative z-10 mx-auto mt-[-20px] grid w-full max-w-[1440px] items-center gap-8 px-4 sm:px-6 lg:mt-0 lg:grid-cols-2 lg:gap-12 lg:px-8">
//         <div className="z-20 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left">
//           <div className="hero-badge mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200/50 bg-white/80 px-3 py-1.5 text-brand-600 shadow-sm backdrop-blur-sm sm:px-4 sm:py-2 lg:mb-6">
//             <Sparkles className="h-3.5 w-3.5 text-brand-500 sm:h-4 sm:w-4" />
//             <span className="text-[11px] font-bold uppercase tracking-widest sm:text-sm">India&apos;s Leading Topper Network</span>
//           </div>

//           <h1 ref={titleRef} className="hero-title mb-5 overflow-hidden pb-2 text-[2.4rem] font-extrabold leading-[1.15] tracking-tight text-accent-800 sm:mb-6 sm:text-6xl sm:leading-[1.1] lg:text-[4.2rem] lg:leading-[1.05]">
//             <span className="hero-title-word inline-block">Connect</span>{" "}
//             <span className="hero-title-word inline-block">With</span>{" "}
//             <span className="hero-title-word inline-block pr-1 font-serif italic text-brand-500">Top</span>{" "}
//             <span className="hero-title-word inline-block">1%.</span>{" "}
//             <br className="hidden sm:block" />
//             <span className="hero-title-word mt-1 inline-block sm:mt-0">Master</span>{" "}
//             <span className="hero-title-word inline-block">Your</span>{" "}
//             <span className="hero-title-word relative inline-block">
//               Future.
//               <svg className="hero-underline absolute bottom-[-2px] left-0 h-2 w-full origin-left text-brand-400 opacity-60 sm:h-3" viewBox="0 0 100 20" preserveAspectRatio="none">
//                 <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
//               </svg>
//             </span>
//           </h1>

//           <p className="hero-desc mb-8 mx-auto max-w-[90%] text-sm font-medium leading-relaxed text-accent-500 sm:max-w-lg sm:text-base md:text-xl lg:mx-0">
//             TopperMantra bridges the gap between effort and excellence by connecting you with mentors who have already conquered the summit.
//           </p>

//           <div className="hero-ctas flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5 lg:justify-start">
//             <Button size="md" className="w-full rounded-full bg-brand-500 px-8 py-3.5 text-[14px] font-bold text-white shadow-[0_8px_20px_rgb(251,146,60,0.25)] transition-all hover:bg-brand-600 hover:shadow-[0_8px_25px_rgb(251,146,60,0.35)] sm:w-auto sm:px-10 sm:py-4 sm:text-[15px]">
//               Explore Mantras
//               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Button>
//           </div>

//           <div className="hero-stats mt-8 flex items-center justify-center gap-6 border-t border-accent-200/60 pt-6 sm:mt-10 sm:gap-8 lg:justify-start">
//             <div className="flex flex-col">
//               <span className="text-xl font-black text-accent-800 sm:text-2xl">500+</span>
//               <span className="mt-0.5 text-[9px] font-bold uppercase tracking-widest text-accent-400 sm:text-[10px]">Toppers</span>
//             </div>
//             <div className="h-8 w-px bg-accent-200" />
//             <div className="flex flex-col">
//               <span className="text-xl font-black text-accent-800 sm:text-2xl">AIR 1+</span>
//               <span className="mt-0.5 text-[9px] font-bold uppercase tracking-widest text-accent-400 sm:text-[10px]">Rank Holders</span>
//             </div>
//           </div>
//         </div>

//         <div ref={constellationRef} className="relative mx-auto mt-4 h-[320px] w-full max-w-[500px] cursor-grab active:cursor-grabbing sm:mt-0 sm:h-[400px] lg:h-[550px] lg:max-w-none">
//           <div className="constellation-layer absolute inset-0">
//             {TOPPERS.map((topper) => (
//               <div key={topper.id} className="topper-node group absolute flex flex-col items-center" style={{ left: topper.x, top: topper.y }}>
//                 <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-accent-100 bg-white p-1 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:border-brand-400 sm:h-12 sm:w-12 md:h-14 md:w-14">
//                   <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-accent-50">
//                     <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${topper.name}`} alt={topper.name} width={56} height={56} className="object-cover" />
//                   </div>

//                   <div className="absolute bottom-full z-30 mb-2 hidden w-40 translate-y-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:mb-3 sm:block sm:w-48">
//                     <div className="relative rounded-xl bg-accent-800 p-3 text-center text-white shadow-xl">
//                       <p className="text-[11px] font-medium leading-relaxed">&quot;{topper.mantra}&quot;</p>
//                       <div className="mt-2 flex items-center justify-between">
//                         <span className="text-[9px] font-bold uppercase tracking-widest text-brand-400">{topper.rank}</span>
//                         <div className="flex gap-0.5">
//                           {[1, 2, 3].map((i) => (
//                             <Star key={i} className="h-2.5 w-2.5 fill-brand-400 text-brand-400" />
//                           ))}
//                         </div>
//                       </div>
//                       <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-accent-800" />
//                     </div>
//                   </div>
//                 </div>

//                 <span className="mt-1.5 text-[9px] font-bold uppercase tracking-tight text-accent-400 transition-colors group-hover:text-accent-800 sm:mt-2 sm:text-[10px]">{topper.name}</span>
//               </div>
//             ))}

//             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
//               <div className="relative">
//                 <div className="absolute inset-0 h-20 w-20 animate-ping rounded-full bg-brand-500/10 sm:h-28 sm:w-28" />
//                 <div className="group relative z-10 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-accent-50 bg-white/90 p-1.5 shadow-2xl backdrop-blur-sm transition-colors hover:border-brand-300 sm:h-28 sm:w-28 sm:p-2">
//                   <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" alt="Student" width={100} height={100} className="object-contain" />
//                   <div className="absolute bottom-2 rounded-full bg-brand-500 px-2.5 py-0.5 text-[8px] font-black uppercase tracking-widest text-white shadow-md sm:bottom-3 sm:px-3 sm:py-1 sm:text-[9px]">YOU</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeHero;


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
          
          <div className="hero-badge mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 px-4 py-2 text-slate-700 shadow-sm backdrop-blur-md sm:px-5 sm:py-2.5">
            <Sparkles className="h-3.5 w-3.5 text-brand-500 sm:h-4 sm:w-4" />
            <span className="text-[10px] font-black uppercase tracking-[0.15em] sm:text-xs">India&apos;s Leading Topper Network</span>
          </div>

          <h1 ref={titleRef} className="hero-title mb-6 overflow-hidden pb-2 text-4xl font-black leading-[1.15] tracking-tighter text-slate-900 sm:text-6xl sm:leading-[1.1] lg:text-[4.5rem] lg:leading-[1.05]">
            <span className="hero-title-word inline-block">Connect</span>{" "}
            <span className="hero-title-word inline-block">With</span>{" "}
            <span className="hero-title-word inline-block pr-1 font-serif italic text-brand-500">Top</span>{" "}
            <span className="hero-title-word inline-block">1%.</span>{" "}
            <br className="hidden sm:block" />
            <span className="hero-title-word mt-2 inline-block sm:mt-0">Master</span>{" "}
            <span className="hero-title-word inline-block">Your</span>{" "}
            <span className="hero-title-word relative inline-block">
              Future.
              <svg className="hero-underline absolute bottom-[-4px] left-0 h-2.5 w-full origin-left text-brand-400 opacity-70 sm:h-3.5" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="hero-desc mb-8 mx-auto max-w-[95%] text-sm font-medium leading-relaxed text-slate-500 sm:max-w-lg sm:text-base md:text-lg lg:mx-0">
            TopperMantra bridges the gap between effort and excellence by connecting you with mentors who have already conquered the summit.
          </p>

          <div className="hero-ctas flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 lg:justify-start">
            <Button size="md" className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-slate-900 px-8 py-4 text-[14px] font-bold text-white shadow-xl shadow-slate-900/20 transition-all hover:bg-brand-500 hover:shadow-brand-500/30 sm:px-10 sm:text-[15px]">
              <span className="relative z-10 flex items-center justify-center">
                Explore Mantras
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </span>
            </Button>
          </div>

          {/* Stats Section - Premium Glass Card on Mobile */}
          <div className="hero-stats mt-10 flex flex-wrap items-center justify-center gap-6 rounded-2xl bg-white/40 p-5 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sm:mt-12 sm:gap-10 lg:justify-start lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none lg:border-none lg:border-t lg:border-slate-200 lg:pt-8 lg:rounded-none">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-2xl font-black text-slate-800 sm:text-3xl">500+</span>
              <span className="mt-1 text-[9px] font-black uppercase tracking-widest text-slate-400 sm:text-[10px]">Toppers</span>
            </div>
            <div className="h-10 w-px bg-slate-200/80" />
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-2xl font-black text-slate-800 sm:text-3xl">AIR 1+</span>
              <span className="mt-1 text-[9px] font-black uppercase tracking-widest text-slate-400 sm:text-[10px]">Rank Holders</span>
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