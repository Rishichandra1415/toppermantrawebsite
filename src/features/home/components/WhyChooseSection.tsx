"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Users, 
  School, 
  Target, 
  Zap, 
  TrendingUp, 
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Trophy,
  Star,
  Activity,
  Award,
  Crown
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhyChooseSection = () => {
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
    <section ref={sectionRef} className="relative w-full py-20 md:py-32 bg-slate-50 overflow-hidden font-sans">
      
      {/* Premium Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="floating-blob absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]" />
        <div className="floating-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[150px]" />
        <div className="floating-blob absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-amber-400/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        
        {/* Centralized Header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <div className="reveal-header inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 backdrop-blur-md px-5 py-2.5 text-slate-800 mb-6 shadow-sm">
            <Crown className="h-4 w-4 text-amber-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">One Elite Platform. Two Paths.</span>
          </div>
          <h2 className="reveal-header text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
            The TopperMantra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Ecosystem</span>
          </h2>
          <p className="reveal-header max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed px-4">
            Whether you are an ambitious student taking charge of your future, or a visionary school empowering your entire campus, the destination is the same: <b>Top 1% Results.</b>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* B2C: Direct Student Side */}
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
              <Image 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200" 
                alt="Intense Student Focus"
                fill
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
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

            <a 
              href="/join/student"
              className="relative w-full inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-brand-500 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 active:scale-[0.98]"
            >
               Explore More
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* B2B2C: School Partnership Side */}
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
              <Image 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Institutional Collaboration"
                fill
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out opacity-90"
              />
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

            <a 
              href="/join/school"
              className="relative w-full inline-flex items-center justify-center gap-3 bg-white hover:bg-brand-500 text-slate-900 hover:text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 active:scale-[0.98]"
            >
               Explore More
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

// Simple User Icon fallback since it wasn't in original imports
const UserIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default WhyChooseSection;