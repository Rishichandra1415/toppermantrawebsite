"use client";

import React from "react";
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
    badge: "Exclusive"
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
    badge: "Proven"
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
    <section ref={sectionRef} className="relative w-full py-16 md:py-24 bg-[#fafafa] overflow-hidden font-sans">
      
      {/* Editorial Luxury Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] bg-brand-200/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-[5%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-0">
        
        {/* Deep Premium Header */}
        <div className="mb-20 md:mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-5 py-2 text-white mb-8 shadow-2xl">
                <School size={16} className="text-brand-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Institutional Supremacy</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-4">
                Partner In <br />
                <span className="text-brand-500 italic font-serif font-medium">Excellence.</span>
              </h2>
            </div>
            <p className="text-slate-500 max-w-xs text-base md:text-lg font-medium leading-relaxed border-l-2 border-slate-200 pl-8 pb-1">
              Empowering leading institutions with India's most elite mentor ecosystem.
            </p>
          </div>
        </div>

        {/* 3D Glass Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 md:gap-6 h-auto">
          {PARTNERSHIP_FEATURES.map((feature) => (
            <div 
              key={feature.id}
              className={`
                bento-card group relative rounded-[2.5rem] p-7 md:p-9 border border-white bg-white/40 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden transition-all duration-700
                ${feature.size === 'lg' ? 'md:col-span-2 lg:row-span-2' : 'col-span-1'}
                hover:shadow-[0_45px_100px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:bg-white
              `}
            >
              <div className="relative z-10 h-full flex flex-col">
                
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${feature.color} text-white shadow-lg shadow-brand-500/10`}>
                    <feature.icon size={22} strokeWidth={1.5} />
                  </div>
                  {feature.badge && (
                    <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400 border border-slate-200 px-2.5 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  )}
                </div>
                
                <h3 className={`font-bold text-slate-900 leading-tight mb-3 ${feature.size === 'lg' ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
                  {feature.title}
                </h3>
                
                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                  {feature.desc}
                </p>

                {feature.size === 'lg' && (
                   <div className="mt-auto pt-12">
                      <div className="flex items-center gap-3 text-brand-500 font-bold text-base tracking-tight group-hover:gap-5 transition-all">
                        Institutional Proposal <ArrowRight size={20} />
                      </div>
                   </div>
                )}
              </div>

              {/* Interaction Decor */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-slate-50 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          ))}
        </div>

        {/* High-End Social Proof Footer */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-10 border-t border-slate-100 pt-16">
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
