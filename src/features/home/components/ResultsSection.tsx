"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, TrendingUp, ShieldCheck, Globe } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { 
    id: 1, 
    value: 10000, 
    suffix: "+", 
    label: "Students Guided", 
    color: "from-slate-900 via-slate-800 to-brand-500", 
    icon: Globe,
    meta: "Network: GLOBAL"
  },
  { 
    id: 2, 
    value: 500, 
    suffix: "+", 
    label: "Elite Mentors", 
    color: "from-slate-900 via-slate-800 to-blue-500", 
    icon: ShieldCheck,
    meta: "Status: VERIFIED"
  },
  { 
    id: 3, 
    value: 50, 
    suffix: "+", 
    label: "Partner Schools", 
    color: "from-slate-900 via-slate-800 to-brand-400", 
    icon: Sparkles,
    meta: "Tier: INSTITUTIONAL"
  }
];

const ResultsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate cards
          gsap.fromTo(".stat-card", 
            { opacity: 0, y: 50, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, stagger: 0.15, duration: 1.4, ease: "expo.out" }
          );

          // Animate deco lines
          gsap.fromTo(".deco-line", 
            { width: 0 },
            { width: 96, stagger: 0.2, duration: 2, ease: "power2.inOut", clearProps: "width" }
          );

          // Animate numbers
          const numbers = document.querySelectorAll(".stat-number");
          numbers.forEach((num) => {
            const target = parseInt(num.getAttribute("data-target") || "0");
            const obj = { val: 0 };
            gsap.to(obj, { 
                val: target,
                duration: 3,
                ease: "back.out(1.2)",
                onUpdate: () => {
                   num.innerHTML = Math.round(obj.val).toString();
                }
            });
          });

          if (containerRef.current) observer.unobserve(containerRef.current);
        }
      });
    }, { threshold: 0.2 });

    if (containerRef.current) {
       // Ensure elements are initially hidden before observer fires
       gsap.set(".stat-card", { opacity: 0 });
       observer.observe(containerRef.current);
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full py-12 lg:py-24 bg-white overflow-hidden font-sans border-y border-slate-50">
      
      {/* Editorial Luxury Background */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[40%] h-full bg-slate-50/30 skew-x-[-12deg] translate-x-[20%]" />
         <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.2]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        
        {/* Section Identity */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-4 px-4 md:px-0">
            <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 text-brand-500">
                    <TrendingUp size={14} />
                    <span className="text-[9px] font-black uppercase tracking-[0.3em]">IMPACT REPORT 2026</span>
                </div>
                <h2>
                    Performance At Scale
                </h2>
            </div>
        </div>

        {/* Global Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-100 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-white/50 backdrop-blur-sm shadow-xl shadow-slate-200/40 mx-4 md:mx-0">
           {STATS.map((stat, idx) => (
             <div 
                key={stat.id} 
                className={`
                    stat-card relative group flex flex-col p-6 sm:p-8 lg:p-16 transition-all duration-700 hover:bg-slate-50/80
                    ${idx !== 2 ? 'md:border-r border-slate-100 border-b md:border-b-0' : ''}
                `}
             >
                {/* Precision Floating Labels */}
                <div className="absolute top-6 left-6 text-[8px] font-bold text-slate-300 group-hover:text-slate-500 transition-colors uppercase tracking-widest">
                    {stat.meta}
                </div>

                <div className="flex flex-col mt-4 lg:mt-12">
                    <div className="flex items-baseline gap-1 mb-3">
                        <span 
                            className={`stat-number text-5xl lg:text-8xl font-bold tracking-tighter bg-gradient-to-br bg-clip-text text-transparent transition-all duration-500 ${stat.color}`}
                            data-target={stat.value}
                        >
                            0
                        </span>
                        <span className="text-2xl lg:text-4xl font-bold text-slate-300 group-hover:text-brand-500 transition-all">{stat.suffix}</span>
                    </div>
                    
                    <div className="deco-line h-[1px] w-24 bg-slate-100 mb-6 group-hover:bg-brand-500 group-hover:w-32 transition-all duration-700" />
                    
                    <h3 className="text-xs lg:text-sm font-bold uppercase tracking-[0.3em] text-slate-400 group-hover:text-slate-900 transition-colors">
                        {stat.label}
                    </h3>
                    
                    <p className="mt-4 text-[10px] lg:text-[11px] font-medium text-slate-300 opacity-0 group-hover:opacity-100 transition-all duration-500 leading-tight translate-y-4 group-hover:translate-y-0 max-w-[120px]">
                        Verified institutional metrics provided by audit partner 2026.
                    </p>
                </div>

                {/* Bottom Number - Precision Index */}
                <div className="absolute bottom-6 right-8 text-[9px] font-black text-slate-100 italic group-hover:text-slate-200 transition-colors">
                    REF-0{stat.id}
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
