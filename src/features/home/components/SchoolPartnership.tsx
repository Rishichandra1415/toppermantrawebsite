"use client";

import React from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Trophy, 
  Users, 
  TrendingUp, 
  Settings, 
  Tag, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  School,
  Gem
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
  {
    id: 2,
    title: "Elite Admissions",
    desc: "Attract premium parents with future-ready skills that go beyond standard board exams.",
    icon: Sparkles,
    size: "sm",
    color: "from-blue-500 to-indigo-600"
  },
  {
    id: 3,
    title: "Prestige Metrics",
    desc: "Improve your school's official topper count and rankers through specialized goal-driven modules.",
    icon: TrendingUp,
    size: "sm",
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 4,
    title: "Zero Ops Friction",
    desc: "We deploy the full ecosystem—mentors, platform, and support. Zero work for your staff.",
    icon: Settings,
    size: "sm",
    color: "from-slate-700 to-slate-900"
  },
  {
    id: 5,
    title: "Institutional Value",
    desc: "Premium mentorship at smart bulk rates. Maximum value for every student in your school.",
    icon: Tag,
    size: "sm",
    color: "from-purple-500 to-violet-600"
  },
  {
    id: 6,
    title: "Validated Legacy",
    desc: "A partnership built on real success stories. Leverage our proven track record to build yours.",
    icon: ShieldCheck,
    size: "lg",
    color: "from-brand-500 to-rose-600",
    badge: "Proven",
    image: "/images/validated-legacy-v2.png"
  }
];

const SchoolPartnership = () => {
  const sectionRef = React.useRef(null);

  useGSAP(() => {
    gsap.from(".bento-card", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
      opacity: 0,
      y: 50,
      filter: "blur(15px)",
      stagger: 0.1,
      duration: 1.2,
      ease: "power4.out",
      clearProps: "all"
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full py-16 md:py-20 overflow-hidden bg-[#fdfeff]">
      {/* --- VIBRANT TECH-LIGHT BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Multi-color Blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-200/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] bg-blue-200/30 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-[180px]" />
        
        {/* Clean Technical Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- PREMIUM LIGHT GLASS HEADER --- */}
        <div className="mb-10 md:mb-16 p-8 md:p-12 rounded-[3rem] bg-white/60 backdrop-blur-2xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative group transition-all duration-500 hover:shadow-[0_30px_70px_rgba(0,0,0,0.06)]">
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-start gap-12 md:gap-20">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-5 py-2 text-white mb-8 shadow-xl">
                <School size={16} className="text-brand-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Institutional Supremacy</span>
              </div>
              <h2 className="text-slate-900 text-4xl md:text-6xl tracking-tighter leading-none">
                Partner In <span className="text-brand-500">Excellence</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-xs text-base md:text-lg font-medium leading-relaxed border-l-2 border-brand-500/20 pl-8 pb-1">
              Empowering leading institutions with India&apos;s most elite mentor ecosystem.
            </p>
          </div>
        </div>

        {/* --- LIGHT GLASS BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 md:gap-6 h-auto">
          {PARTNERSHIP_FEATURES.map((feature) => (
            <div 
              key={feature.id}
              className={`
                group relative rounded-[2.5rem] p-6 md:p-8 border border-white bg-white/60 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-500
                ${feature.id === 6 ? 'md:col-span-2 lg:col-span-4 lg:row-span-1' : (feature.size === 'lg' ? 'md:col-span-2 lg:row-span-2' : 'col-span-1')}
                hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:bg-white/80
              `}
            >
              <div className="relative z-10 h-full flex flex-col">
                
                {/* Wrap in a grid for ID 6 specifically to handle side-by-side image */}
                <div className={feature.id === 6 ? "grid md:grid-cols-2 gap-8 items-center h-full" : "h-full flex flex-col"}>
                  
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.color} text-white shadow-lg shadow-brand-500/10`}>
                        <feature.icon size={20} strokeWidth={1.5} />
                      </div>
                      {feature.badge && (
                        <span className="text-[7px] font-bold uppercase tracking-widest text-slate-400 border border-white/10 px-2 py-0.5 rounded-full">
                          {feature.badge}
                        </span>
                      )}
                    </div>
                    
                    <h3 className={`font-bold text-slate-900 leading-tight mb-2 ${feature.size === 'lg' ? 'text-xl md:text-2xl' : 'text-base md:text-lg'}`}>
                      {feature.title}
                    </h3>
                    
                    <p className="text-slate-500 text-[13px] md:text-sm leading-relaxed font-medium">
                      {feature.desc}
                    </p>

                    {/* Image for ID 1 (Market Dominance) - Below text */}
                    {feature.id === 1 && feature.image && (
                      <div className="mt-4 relative w-full h-36 md:h-44 rounded-2xl overflow-hidden border border-white/5 shadow-sm shrink-0">
                        <Image src={feature.image} fill className="object-cover" alt={feature.title} />
                      </div>
                    )}

                    {feature.size === 'lg' && feature.id !== 6 && (
                       <div className="mt-auto pt-6">
                          <div className="flex items-center gap-2 text-brand-500 font-bold text-sm tracking-tight group-hover:gap-4 transition-all">
                            Institutional Proposal <ArrowRight size={18} />
                          </div>
                       </div>
                    )}
                  </div>

                  {/* Image for ID 6 (Validated Legacy) - Beside text on desktop */}
                  {feature.id === 6 && feature.image && (
                    <div className="hidden md:block relative w-full h-full min-h-[160px] rounded-2xl overflow-hidden border border-white/5 shadow-sm">
                      <Image src={feature.image} fill className="object-cover" alt={feature.title} />
                    </div>
                  )}

                  {/* ID 6 Proposal link for mobile or integrated in side-by-side */}
                  {feature.id === 6 && (
                    <div className="md:hidden mt-4 pt-4 border-t border-white/10">
                       <div className="flex items-center gap-2 text-brand-500 font-bold text-sm tracking-tight">
                         Institutional Proposal <ArrowRight size={18} />
                       </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Interaction Decor */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-50 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          ))}
        </div>

        {/* High-End Social Proof Footer */}
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

export default SchoolPartnership;
