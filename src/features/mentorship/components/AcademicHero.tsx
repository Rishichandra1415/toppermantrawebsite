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
      { icon: Atom, title: "JEE Engineering", desc: "Advanced physics and mathematics frameworks from IIT rankers.", color: "text-[#FF6B35]", bg: "bg-[#FF6B35]/10" },
      { icon: Microscope, title: "NEET Medical", desc: "Integrated biology and chemistry systems from AIIMS toppers.", color: "text-[#4F46E5]", bg: "bg-[#4F46E5]/10" },
      { icon: PenTool, title: "Strategic Mastery", desc: "Precision study plans tailored to your specific rank goals.", color: "text-slate-700", bg: "bg-slate-100" }
    ],
    bgImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=2000"
  },
  hackathon: {
    badge: "Engineering Superiority & Innovation",
    title: ["Build the", "Future of", "Tech"],
    desc: "Master the art of competitive coding and high-impact product building. From ideation to national winning pitches.",
    cards: [
      { icon: Code, title: "Code Excellence", desc: "Master system design and high-performance coding architectures.", color: "text-[#FF6B35]", bg: "bg-[#FF6B35]/10" },
      { icon: Rocket, title: "MVP Strategy", desc: "Learn to build and deploy production-ready products in 24 hours.", color: "text-[#4F46E5]", bg: "bg-[#4F46E5]/10" },
      { icon: Target, title: "Pitch Mastery", desc: "Perfect your technical storytelling for national hackathons.", color: "text-slate-700", bg: "bg-slate-100" }
    ],
    bgImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000"
  },
  entrepreneurship: {
    badge: "Turn Ideas into Scalable Ventures",
    title: ["Launch Your", "Startup", "Journey"],
    desc: "Direct mentorship from successful founders and venture experts. Learn the real-world fundamentals of growth.",
    cards: [
      { icon: Lightbulb, title: "Idea Validation", desc: "Stress-test your concepts with experienced startup founders.", color: "text-[#FF6B35]", bg: "bg-[#FF6B35]/10" },
      { icon: Briefcase, title: "Growth Engine", desc: "Master GTM strategies and customer acquisition at scale.", color: "text-[#4F46E5]", bg: "bg-[#4F46E5]/10" },
      { icon: Target, title: "Fundraising", desc: "Perfect your business model and pitch for seed investment.", color: "text-slate-700", bg: "bg-slate-100" }
    ],
    bgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000"
  }
};

const MentorshipHero = ({ type = "academic" }: MentorshipHeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const data = CONTENT[type] || CONTENT.academic;

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(".hero-content", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
      .fromTo(".hero-card", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, "-=0.4");

    gsap.fromTo(".svg-path", 
      { strokeDashoffset: 1000, strokeDasharray: 1000 }, 
      { strokeDashoffset: 0, duration: 2, ease: "power2.inOut", stagger: 0.5 }
    );

    gsap.to(".floating-node", {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      rotation: "random(-8, 8)",
      duration: "random(4, 6)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: { each: 0.2, from: "random" }
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 25;
      const y = (clientY / window.innerHeight - 0.5) * 25;
      gsap.to(".parallax-layer", { x, y, duration: 1, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: containerRef, dependencies: [type] });

  return (
    <section ref={containerRef} className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[#FAFAF8] pt-12 pb-16">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600;700&display=swap');
        .font-serif { font-family: 'DM Serif Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; letter-spacing: -0.01em; }
        .hero-grain::before { content: ''; position: absolute; inset: 0; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E"); pointer-events: none; mix-blend-mode: multiply; }
      `}</style>
      
      <div className="absolute inset-0 z-0 hero-grain">
        <div className="absolute inset-0 opacity-[0.08] grayscale pointer-events-none" style={{ backgroundImage: `url('${data.bgImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-[#FF6B35]/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-5%] w-[600px] h-[600px] bg-[#4F46E5]/15 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="parallax-layer absolute inset-0 overflow-hidden pointer-events-none">
           <div className="floating-node absolute top-[15%] left-[10%] opacity-[0.15]">
             <Atom width={120} height={120} strokeWidth={1} className="text-[#FF6B35]" />
           </div>
           <div className="floating-node absolute top-[25%] right-[12%] opacity-[0.15]">
             <Rocket width={100} height={100} strokeWidth={1} className="text-[#4F46E5]" />
           </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="hero-content text-center mb-10 font-sans">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white border border-black/5 px-4 py-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B35] animate-pulse" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-600">{data.badge}</span>
          </div>

          <h1 className="mb-4 font-serif text-5xl md:text-[64px] tracking-tight leading-[1.0] text-[#0D0D0D]">
            {data.title[0]} <br className="hidden md:block" />
            {data.title[1]} <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#f98a60]">
              {data.title[2]}
              <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-[#FF6B35]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-500 leading-relaxed font-light text-sm md:text-base">
            {data.desc}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3.5">
            <button className="group relative bg-[#0D0D0D] text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-lg hover:shadow-[0_15px_30px_rgba(255,107,53,0.25)] transition-all active:scale-95 flex items-center justify-center gap-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#f98a60] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">Request Mentorship <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" /></span>
            </button>
            <button className="bg-white text-[#0D0D0D] border border-black/10 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-slate-50 hover:border-black/20 transition-all shadow-sm active:scale-95">
              Explore Programs
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto font-sans">
          {data.cards.map((item: any, i: number) => (
            <div key={i} className="hero-card group relative bg-white/70 backdrop-blur-xl p-6 rounded-[1.5rem] border border-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-400 hover:-translate-y-1">
              <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,1)]`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <h3 className="font-serif text-xl text-[#0D0D0D] mb-2">{item.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipHero;