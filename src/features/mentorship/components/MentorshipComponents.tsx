"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  Sparkles, ArrowDown, GraduationCap, Target, Zap, 
  Microscope, Atom, PenTool, Code, Rocket, Briefcase, Lightbulb,
  CheckCircle2, ShieldCheck, Trophy, Cpu, Search, Users, BarChart,
  MessageCircle, Star, ArrowRight 
} from "lucide-react";

// --- MENTOR CARD COMPONENT ---
interface MentorCardProps {
  mentor: {
    name: string;
    role: string;
    image: string;
    tags: string[];
    bio: string;
    stats?: { label: string; value: string; icon: any }[];
  };
}

export const MentorCard = ({ mentor }: MentorCardProps) => {
  const defaultStats = [
    { label: "Students", value: "150+", icon: Users },
    { label: "Rating", value: "4.9/5", icon: Star },
    { label: "Exp", value: "4+ Yrs", icon: GraduationCap },
  ];

  const stats = mentor.stats || defaultStats;

  return (
    <div className="group relative bg-white rounded-[2rem] border border-black/5 p-5 sm:p-6 flex flex-col md:flex-row gap-6 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06)] hover:border-[#FF6B35]/20 transition-all duration-400 font-sans w-full">
      <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-[1.5rem] overflow-hidden shadow-md border-[3px] border-white group-hover:scale-105 transition-transform duration-500">
          <Image 
            src={mentor.image} 
            alt={mentor.name} 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="flex md:flex-col gap-2 w-full justify-center md:justify-start">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#FAFAF8] border border-black/5">
              <stat.icon className="w-3.5 h-3.5 text-[#FF6B35]" strokeWidth={2.5} />
              <div className="flex flex-col">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">{stat.label}</span>
                <span className="text-[10px] font-bold text-[#0D0D0D] leading-tight">{stat.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-between">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <h3 className="font-serif text-2xl text-[#0D0D0D]">{mentor.name}</h3>
                <CheckCircle2 className="w-4 h-4 text-blue-500" fill="#E0E7FF" />
              </div>
              <p className="text-[#FF6B35] font-semibold text-xs tracking-wide uppercase">{mentor.role}</p>
            </div>
            
            <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D0D0D] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#FF6B35] transition-colors shadow-lg active:scale-95 shrink-0">
              <MessageCircle className="w-3.5 h-3.5" /> Connect
            </button>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {mentor.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 rounded-md bg-[#FAFAF8] text-slate-600 text-[10px] font-semibold border border-black/5"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-slate-500 text-xs leading-relaxed font-light max-w-lg">
            {mentor.bio}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-black/5">
          <button className="text-slate-400 text-xs font-semibold flex items-center gap-1.5 hover:text-[#0D0D0D] transition-colors group/btn w-max">
            View Complete Profile <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- MENTOR LIST COMPONENT ---
const MOCK_MENTORS = [
  {
    name: "Yugansh Sharma",
    role: "Founder at Dosaka Hospitality Pvt. Ltd.",
    type: "entrepreneurship",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yugansh",
    tags: ["Career Advice", "Idea Validation", "Growth Marketing"],
    bio: "Passionate restaurateur and entrepreneur. Driving force behind DOSAKA, Rajasthan's biggest South Indian dining chain. Expert in scaling hospitality ventures from 0 to 1.",
  },
  {
    name: "Ananya Iyer",
    role: "IIT Delhi | AIR 42 JEE Advanced",
    type: "academic",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
    tags: ["JEE Strategy", "Physics Mastery", "Mindset Coaching"],
    bio: "Helping students navigate the intense pressure of competitive exams. My focus is on conceptual clarity and building a winning mindset that survives the toughest exam days.",
  },
  {
    name: "Vikram Das",
    role: "Full Stack Lead | SIH Winner",
    type: "hackathon",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    tags: ["Web3", "System Design", "Pitching"],
    bio: "Smart India Hackathon winner and veteran of 30+ hackathons. Expert in building scalable MVPs and delivering winning technical pitches under pressure.",
  }
];

interface MentorListProps {
  type?: string;
}

export const MentorList = ({ type = "academic" }: MentorListProps) => {
  const filteredMentors = MOCK_MENTORS.filter(m => m.type === type);

  return (
    <section className="py-10 bg-slate-50/50 font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-6 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600">Expert Network</span>
          </div>
          <h2 className="font-bold">Connect with {type.charAt(0).toUpperCase() + type.slice(1)} Experts</h2>
          <p className="text-slate-500 text-sm font-medium leading-relaxed">
            Choose from a curated network of mentors who have successfully navigated the exact paths you are aiming to conquer.
          </p>
        </div>

        <div className="space-y-8">
          {filteredMentors.map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs mb-6">Didn't find what you're looking for?</p>
          <button className="px-10 py-4 rounded-full border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all transform hover:scale-105 active:scale-95">
            View All Mentors
          </button>
        </div>
      </div>
    </section>
  );
};

// --- ACADEMIC DETAILS COMPONENT ---
const DETAILS_CONTENT: Record<string, any> = {
  academic: {
    badge: "The TopperMantra Framework",
    title: ["A Strategic Roadmap", "To Academic Mastery."],
    desc: "We provide a proven architecture for success, built on the exact habits and mental models used by AIR rankers.",
    features: [
      { icon: Search, title: "Strategic Audit", desc: "Identify high-yield topics to maximize your scores with precision." },
      { icon: Cpu, title: "Mental Models", desc: "Frameworks for rapid data retention and advanced problem solving." },
      { icon: Trophy, title: "Exam Mastery", desc: "Psychological conditioning to perform under extreme pressure." },
      { icon: ShieldCheck, title: "Daily Success", desc: "A rigorous feedback loop that keeps you on the target trajectory." }
    ],
    stats: [
      { label: "Success Velocity", val: "94%", desc: "Average percentile jump in 6 months." },
      { label: "Elite Mentors", val: "100+", desc: "Exclusively AIR rankers and toppers." },
      { label: "Personalized Support", val: "24/7", desc: "Always available for critical doubt clearing." }
    ],
    cta: "Start Your Success Audit"
  },
  hackathon: {
    badge: "The Builder Framework",
    title: ["Mastering Product", "Innovation at Speed."],
    desc: "Our hackathon mentorship focus on turning raw code into award-winning products through engineering excellence.",
    features: [
      { icon: Code, title: "Architecture", desc: "Learn to design scalable systems that impress technical judges." },
      { icon: Zap, title: "Rapid MVP", desc: "Frameworks for building complex features in hours, not days." },
      { icon: Rocket, title: "Winning Pitch", desc: "Master the art of presenting technical value to non-tech judges." },
      { icon: ShieldCheck, title: "Code Audit", desc: "Continuous review of your codebase for performance and security." }
    ],
    stats: [
      { label: "Wins", val: "85%", desc: "Of our students make it to the grand finales." },
      { label: "Products", val: "200+", desc: "Live products deployed during our mentorship." },
      { label: "Prize Pool", val: "₹50L+", desc: "Cumulative prizes won by our mentored teams." }
    ],
    cta: "Join the Hacker Cohort"
  },
  entrepreneurship: {
    badge: "The Founder's Journey",
    title: ["Scaling Ideas", "Into Reality."],
    desc: "We bridge the gap between a side project and a scalable business venture through real-world experience.",
    features: [
      { icon: Lightbulb, title: "Validation", desc: "Rigorous testing of your business model and market fit." },
      { icon: Users, title: "GTM Strategy", desc: "Learn to acquire your first 1000 users with zero budget." },
      { icon: BarChart, title: "Scaling", desc: "Frameworks for unit economics and sustainable growth." },
      { icon: Trophy, title: "Fundraising", desc: "Direct access to seed networks and pitch preparation." }
    ],
    stats: [
      { label: "Startups", val: "30+", desc: "Live startups founded by our mentored students." },
      { label: "Funding", val: "$2M+", desc: "Total seed funding raised by our alumni." },
      { label: "Success Rate", val: "10x", desc: "Higher probability of surviving the first year." }
    ],
    cta: "Launch Your Startup"
  }
};

const DetailItem = ({ icon: Icon, title, desc, index }: { icon: any, title: string, desc: string, index: number }) => (
  <div className="flex gap-4 group p-4 sm:p-5 rounded-[1.5rem] bg-white border border-black/5 hover:border-[#FF6B35]/30 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 font-sans">
    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#FAFAF8] border border-black/5 flex items-center justify-center group-hover:bg-[#FF6B35] group-hover:border-[#FF6B35] transition-all duration-300 shadow-sm">
      <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
    </div>
    <div>
      <div className="text-[9px] font-bold text-[#FF6B35] uppercase tracking-[0.2em] mb-0.5 opacity-60 group-hover:opacity-100 transition-opacity">Phase 0{index + 1}</div>
      <h4 className="font-serif text-lg text-[#0D0D0D]">{title}</h4>
      <p className="text-slate-500 text-xs font-light leading-relaxed mt-1.5">{desc}</p>
    </div>
  </div>
);

export const AcademicDetails = ({ type = "academic" }: { type?: string }) => {
  const data = DETAILS_CONTENT[type] || DETAILS_CONTENT.academic;

  return (
    <section className="py-16 bg-[#FAFAF8] relative overflow-hidden border-t border-black/5">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0000000a_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
        <div className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] bg-[#FF6B35]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -left-6 top-2 w-[3px] h-16 bg-[#FF6B35]/30 rounded-full hidden lg:block" />
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-black/5 text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-4 shadow-sm">
              {data.badge}
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#0D0D0D] leading-[1.05]">
              {data.title[0]} <br />
              <span className="text-[#FF6B35]">{data.title[1]}</span>
            </h2>
            <p className="text-slate-500 mt-4 mb-8 max-w-md text-sm leading-relaxed font-light">
              {data.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.features.map((feature: any, i: number) => (
                <DetailItem key={i} index={i} icon={feature.icon} title={feature.title} desc={feature.desc} />
              ))}
            </div>
          </div>

          <div className="relative group perspective-1000 mt-6 lg:mt-0">
            <div className="absolute inset-0 bg-[#FF6B35]/5 blur-[60px] rounded-full scale-95 group-hover:scale-105 transition-transform duration-700" />
            <div className="relative bg-white rounded-[2rem] p-8 md:p-10 border border-black/5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAFAF8] rounded-bl-[4rem] -z-0" />
               <h3 className="mb-6 flex items-center gap-3 font-serif text-2xl text-[#0D0D0D] relative z-10">
                  <div className="w-10 h-10 bg-[#0D0D0D] rounded-xl flex items-center justify-center shadow-md">
                    <Zap className="w-5 h-5 text-[#FF6B35]" />
                  </div>
                  Performance Mastery
               </h3>
               
               <div className="space-y-6 relative z-10">
                 {data.stats.map((stat: any, i: number) => (
                   <div key={i} className="flex items-center gap-6 group/stat p-3 rounded-2xl hover:bg-[#FAFAF8] transition-colors">
                     <div className="font-serif text-3xl text-[#0D0D0D] group-hover/stat:text-[#FF6B35] transition-colors w-20">{stat.val}</div>
                     <div>
                       <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">{stat.label}</p>
                       <p className="text-xs text-slate-500 font-light mt-0.5">{stat.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>

               <div className="mt-8 pt-6 border-t border-black/5 relative z-10">
                 <button className="w-full bg-[#0D0D0D] text-white font-semibold py-4 rounded-xl hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all text-sm flex items-center justify-center gap-2 hover:-translate-y-0.5">
                   {data.cta} <ShieldCheck className="w-4 h-4 text-[#FF6B35]" />
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- ACADEMIC HERO COMPONENT ---
const HERO_CONTENT: Record<string, any> = {
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

export const AcademicHero = ({ type = "academic" }: { type?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const data = HERO_CONTENT[type] || HERO_CONTENT.academic;

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
