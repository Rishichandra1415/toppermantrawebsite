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
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: "power2.out" }
          );

          // Animate numbers
          const numbers = document.querySelectorAll(".stat-number");
          numbers.forEach((num) => {
            const target = parseInt(num.getAttribute("data-target") || "0");
            const obj = { val: 0 };
            gsap.to(obj, { 
                val: target,
                duration: 2.5,
                ease: "power2.out",
                onUpdate: () => {
                   num.innerHTML = Math.round(obj.val).toLocaleString();
                }
            });
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
    <section ref={containerRef} className="relative w-full py-16 lg:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-center">
          {STATS.map((stat, idx) => (
            <div 
              key={stat.id} 
              className={`
                stat-card flex flex-col items-center text-center px-4
                ${idx !== STATS.length - 1 ? 'md:border-r border-slate-100' : ''}
              `}
            >
              {/* Icon */}
              <div className="mb-6 text-slate-400">
                <stat.icon size={32} strokeWidth={1.5} />
              </div>

              {/* Number */}
              <div className="flex items-baseline justify-center gap-1 mb-2">
                <span 
                  className="stat-number text-5xl lg:text-6xl font-bold tracking-tight text-slate-900"
                  data-target={stat.value}
                >
                  0
                </span>
                <span className="text-2xl lg:text-3xl font-bold text-slate-400">{stat.suffix}</span>
              </div>
              
              {/* Label */}
              <h3 className="text-xs lg:text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
