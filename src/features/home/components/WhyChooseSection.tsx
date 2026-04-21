"use client";

import React from "react";
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
  Award
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhyChooseSection = () => {
  const sectionRef = React.useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      }
    });

    tl.from(".reveal-item", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "expo.out"
    });

    gsap.to(".floating-blob", {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="premium-why-container relative w-full py-16 md:py-24 bg-white overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="floating-blob absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-brand-50/50 rounded-full blur-[120px]" />
        <div className="floating-blob absolute bottom-[10%] right-[5%] w-[500px] h-[500px] bg-accent-50/80 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="reveal-item inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white px-5 py-2 text-slate-700 mb-6 shadow-sm">
            <Sparkles className="h-4 w-4 text-brand-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">The Elite Advantage</span>
          </div>
          <h2 className="reveal-item">The TopperMantra Edge</h2>
          <p className="reveal-item max-w-xl mx-auto">
            We don&apos;t just teach; we transform. Our strategic approach ensures that every student reaches their full potential.
          </p>
        </div>

        {/* Split Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-stretch">
          
          {/* Individual Students Side */}
          <div className="reveal-item relative group flex flex-col p-8 md:p-12 lg:pr-20 border-b lg:border-b-0 lg:border-r border-slate-100">
            <div className="flex flex-col mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-500/5 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-brand-500" fill="currentColor" />
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">FOR INDIVIDUALS</span>
              </div>
              <h2>Meet Your Future Architects</h2>
              <p className="max-w-xl mx-auto">
                Learn directly from the students who have cracked India&apos;s toughest exams. Real-world insights from the current Top 1%.
              </p>
            </div>

            <div className="relative w-full h-80 mb-12 overflow-hidden rounded-[2rem] shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200" 
                alt="Intense Student Focus"
                fill
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
              />
            </div>

            <div className="space-y-10 mb-14">
              {[
                { 
                  icon: Trophy, 
                  title: "Private Ranker Blueprints", 
                  desc: "Connect with AIR 1-100 achievers. Get the exact, unwritten rules of success that textbooks never mention." 
                },
                { 
                  icon: Target, 
                  title: "Peak Performance Mastery", 
                  desc: "Learn to control stress, master time allocation, and approach every exam with a winning psychological edge." 
                },
                { 
                  icon: Award, 
                  title: "Elite College Heritage", 
                  desc: "Network with alumni from India's most prestigious institutions—IITs, AIIMS, and IIMs—early in your journey." 
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start group/li">
                  <div className="w-12 h-12 rounded-xl border border-slate-100 bg-slate-50/50 flex items-center justify-center shrink-0 group-hover/li:bg-slate-900 group-hover/li:border-slate-900 transition-all duration-500">
                    <item.icon className="w-5 h-5 text-slate-600 group-hover/li:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group/btn relative inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-brand-500 text-white font-bold py-5 px-10 rounded-full transition-all duration-500 w-full md:w-fit active:scale-95">
               Start Your Ascent
               <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* School Partnership Side */}
          <div className="reveal-item relative group flex flex-col p-10 md:p-16 lg:pl-24 bg-slate-50/50">
            <div className="flex flex-col mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105 group-hover:-rotate-3 duration-500">
                  <School className="w-7 h-7 text-brand-500" />
                </div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">FOR INSTITUTIONS</span>
              </div>
              <h3 className="text-[2.2rem] md:text-[2.8rem] font-black text-slate-900 leading-none mb-6">
                Institutional <br />
                <span className="text-brand-500 italic font-serif font-medium">Supremacy.</span>
              </h3>
              <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-md">
                 Modernize your legacy. Integrate India's most advanced topper platform directly into your institution's DNA.
              </p>
            </div>

            <div className="relative w-full h-80 mb-12 overflow-hidden rounded-[2rem] shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Institutional Collaboration"
                fill
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
              />
            </div>

            <div className="space-y-10 mb-14">
              {[
                { 
                  icon: TrendingUp, 
                  title: "Prestige Elevation", 
                  desc: "Dramatically increase your institution's AIR rankers and topper count with our specialized modules." 
                },
                { 
                  icon: Zap, 
                  title: "Efficiency Integration", 
                  desc: "Provide national-level mentorship and future-ready hackathon skills without the operational hassle." 
                },
                { 
                  icon: ShieldCheck, 
                  title: "Flexible Partnership", 
                  desc: "A custom-tailored model that blends seamlessly with your school's existing vision and values." 
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start group/li">
                  <div className="w-12 h-12 rounded-xl border border-slate-200 bg-white flex items-center justify-center shrink-0 group-hover/li:bg-slate-900 group-hover/li:border-slate-900 transition-all duration-500">
                    <item.icon className="w-5 h-5 text-slate-600 group-hover/li:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="group/btn relative inline-flex items-center justify-center gap-3 bg-brand-500 hover:bg-slate-900 text-white font-bold py-5 px-10 rounded-full transition-all duration-500 w-full md:w-fit active:scale-95 shadow-xl shadow-brand-500/20">
               Elevate Your School
               <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;
