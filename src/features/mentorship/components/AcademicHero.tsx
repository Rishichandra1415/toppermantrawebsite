"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Sparkles, ArrowDown, GraduationCap, Target, Zap, BookOpen, Microscope, Atom, PenTool, Code, Rocket, Briefcase, Lightbulb } from "lucide-react";
import Button from "@/components/common/Button";

interface MentorshipHeroProps {
  type?: string;
}

const CONTENT: Record<string, any> = {
  academic: {
    badge: "The Gold Standard of Academic Mentorship",
    title: ["Architect Your", "Academic", "Legacy"],
    desc: "Personalized 1-on-1 roadmaps for JEE and NEET toppers. Join the elite circle where strategy meets consistency.",
    cards: [
      { icon: Atom, title: "JEE Engineering", desc: "Advanced physics and mathematics frameworks from IIT rankers.", color: "text-brand-500", bg: "bg-brand-50" },
      { icon: Microscope, title: "NEET Medical", desc: "Integrated biology and chemistry systems from AIIMS toppers.", color: "text-blue-500", bg: "bg-blue-50" },
      { icon: PenTool, title: "Strategic Mastery", desc: "Precision study plans tailored to your specific rank goals.", color: "text-slate-700", bg: "bg-slate-50" }
    ],
    bgImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=2000"
  },
  hackathon: {
    badge: "Engineering Superiority & Innovation",
    title: ["Build the", "Future of", "Tech"],
    desc: "Master the art of competitive coding and high-impact product building. From ideation to national winning pitches.",
    cards: [
      { icon: Code, title: "Code Excellence", desc: "Master system design and high-performance coding architectures.", color: "text-brand-500", bg: "bg-brand-50" },
      { icon: Rocket, title: "MVP Strategy", desc: "Learn to build and deploy production-ready products in 24 hours.", color: "text-blue-500", bg: "bg-blue-50" },
      { icon: Target, title: "Pitch Mastery", desc: "Perfect your technical storytelling for national hackathons.", color: "text-slate-700", bg: "bg-slate-50" }
    ],
    bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000"
  },
  entrepreneurship: {
    badge: "Turn Ideas into Scalable Ventures",
    title: ["Launch Your", "Startup", "Journey"],
    desc: "Direct mentorship from successful founders and venture experts. Learn the real-world fundamentals of growth.",
    cards: [
      { icon: Lightbulb, title: "Idea Validation", desc: "Stress-test your concepts with experienced startup founders.", color: "text-brand-500", bg: "bg-brand-50" },
      { icon: Briefcase, title: "Growth Engine", desc: "Master GTM strategies and customer acquisition at scale.", color: "text-blue-500", bg: "bg-blue-50" },
      { icon: Target, title: "Fundraising", desc: "Perfect your business model and pitch for seed investment.", color: "text-slate-700", bg: "bg-slate-50" }
    ],
    bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000"
  }
};

const MentorshipHero = ({ type = "academic" }: MentorshipHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const data = CONTENT[type] || CONTENT.academic;

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".hero-content", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power4.out" })
      .fromTo(".hero-card", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }, "-=0.6");

    gsap.fromTo(".svg-path", 
      { strokeDashoffset: 1000, strokeDasharray: 1000 }, 
      { strokeDashoffset: 0, duration: 2, ease: "power2.inOut", stagger: 0.5 }
    );

    gsap.to(".floating-node", {
      y: "random(-40, 40)",
      x: "random(-20, 20)",
      rotation: "random(-15, 15)",
      duration: "random(5, 8)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: { each: 0.4, from: "random" }
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 40;
      const y = (clientY / window.innerHeight - 0.5) * 40;
      gsap.to(".parallax-layer", { x, y, duration: 1.5, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: containerRef, dependencies: [type] });

  return (
    <section ref={containerRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-white pt-0 pb-10">
      
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.15] grayscale pointer-events-none"
          style={{ 
            backgroundImage: `url('${data.bgImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-100/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] bg-blue-50 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="parallax-layer absolute inset-0 overflow-hidden pointer-events-none">
          {/* Contextual SVGs would go here - for brevity using placeholders */}
           <div className="floating-node absolute top-[15%] left-[8%] opacity-20">
             <Atom width={180} height={180} strokeWidth={0.5} className="text-brand-500" />
           </div>
           <div className="floating-node absolute top-[20%] right-[10%] opacity-20">
             <Rocket width={160} height={160} strokeWidth={0.5} className="text-blue-500" />
           </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="hero-content text-center mb-8 font-sans">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 border border-brand-100 px-5 py-2 shadow-[0_8px_20px_rgba(251,91,46,0.1)] backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-brand-600 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-700">{data.badge}</span>
          </div>

          <h1 className="mb-4 font-bold tracking-tight leading-[1.05]">
            {data.title[0]} <br className="hidden md:block" />
            {data.title[1]} <span className="relative inline-block text-brand-500">
              {data.title[2]}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed font-medium">
            {data.desc}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <button className="group relative bg-brand-500 text-white px-10 py-5 rounded-full text-base font-bold shadow-[0_20px_40px_rgba(251,91,46,0.25)] hover:bg-brand-600 hover:shadow-[0_25px_50px_rgba(251,91,46,0.35)] transition-all active:scale-95 flex items-center gap-3">
              Request Mentorship
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <button className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-full text-base font-bold hover:bg-slate-50 transition-all active:scale-95">
              Explore Programs
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto font-sans">
          {data.cards.map((item: any, i: number) => (
            <div key={i} className="hero-card group relative bg-white/60 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2">
              <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipHero;
