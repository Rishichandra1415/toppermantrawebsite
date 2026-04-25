"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  GraduationCap, 
  Briefcase, 
  Star, 
  ExternalLink, 
  CheckCircle2,
  Sparkles,
  Search,
  Code,
  Rocket,
  BookOpen,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CATEGORIES = [
  { id: "academic", name: "Academic Mentorship", icon: BookOpen },
  { id: "hackathon", name: "Hackathons", icon: Code },
  { id: "startup", name: "Startup Mentorship", icon: Rocket },
];

const MENTORS = [
  {
    id: 1, category: "academic", name: "Arjun Sharma", college: "IIT Bombay", rank: "AIR 12", qualification: "B.Tech CS", experience: "5+ Years", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600", tags: ["JEE Advanced", "Math Maestro"], description: "Expert in Advanced Mathematics with a track record of mentoring top 100 AIR rankers."
  },
  {
    id: 2, category: "academic", name: "Dr. Priya Verma", college: "AIIMS Delhi", rank: "AIR 4", qualification: "MBBS", experience: "6+ Years", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600", tags: ["NEET Biology", "Mind Maps"], description: "Simplifies complex physiological concepts through innovative visual learning."
  },
  {
    id: 3, category: "academic", name: "Rahul Gupta", college: "IIM Ahmedabad", rank: "99.98%ile", qualification: "MBA", experience: "8+ Years", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600", tags: ["CAT", "Logical Mastery"], description: "Strategist focusing on competitive exam psychology and conceptual mastery."
  },
  {
    id: 4, category: "academic", name: "Sanya Singh", college: "DTU Delhi", rank: "AIR 102", qualification: "B.Tech IT", experience: "5+ Years", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600", tags: ["Organic Chemistry", "Boards"], description: "Specializes in Inorganic Chemistry and high-scoring strategies for Boards."
  },
  {
    id: 5, category: "hackathon", name: "Vikram Das", college: "NIT Trichy", rank: "SIH Winner", qualification: "Full Stack Dev", experience: "30+ Hackathons", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600", tags: ["Web3", "System Design"], description: "Smart India Hackathon winner. Helps you build scalable MVPs in 24 hours."
  },
  {
    id: 6, category: "hackathon", name: "Neha Kapoor", college: "IIIT Hyderabad", rank: "Global Top 10", qualification: "AI/ML Engineer", experience: "4+ Years", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600", tags: ["AI/ML", "Pitch Deck"], description: "Master at integrating AI APIs and delivering winning hacker pitches."
  },
  {
    id: 9, category: "startup", name: "Rohan Mehta", college: "Stanford GSB", rank: "Ex-YC Founder", qualification: "Serial Entrepreneur", experience: "10+ Years", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600", tags: ["Fundraising", "GTM Strategy"], description: "Helps early-stage startups navigate Y-Combinator applications and seed rounds."
  },
  {
    id: 10, category: "startup", name: "Smriti Rao", college: "ISB Hyderabad", rank: "Angel Investor", qualification: "Finance Expert", experience: "8+ Years", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600", tags: ["Financial Modeling", "B2B"], description: "Assists founders in creating bulletproof financial models and B2B sales pipelines."
  }
];

const MentorsSection = () => {
  const [activeCategory, setActiveCategory] = useState("academic");
  const [displayedMentors, setDisplayedMentors] = useState(MENTORS.filter(m => m.category === "academic"));
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".mentor-header", {
      scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      opacity: 0, y: 30, duration: 1, ease: "power4.out"
    });
  }, { scope: sectionRef });

  const handleCategoryChange = (newCategory: string) => {
    if (newCategory === activeCategory) return;
    const tl = gsap.timeline();
    tl.to(".mentor-card", {
      opacity: 0,
      y: -20,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 0.4,
      onComplete: () => {
        setActiveCategory(newCategory);
        setDisplayedMentors(MENTORS.filter(m => m.category === newCategory));
        if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = 0;
      }
    });
    tl.fromTo(".mentor-card", 
      { opacity: 0, y: 40, filter: "blur(20px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.1, duration: 0.8, ease: "power3.out", clearProps: "all" }
    );
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full py-12 md:py-16 bg-white overflow-hidden font-sans">
      
      {/* Decroative Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-400/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-12">
        
        {/* Header */}
        <div className="mentor-header text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white px-5 py-2 text-slate-700 mb-6 shadow-sm">
            <Sparkles size={14} className="text-brand-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">India&apos;s Elite Mentor Circle</span>
          </div>
          <h2>Meet Your Future Architects</h2>
          <p className="max-w-xl mx-auto mt-4 text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed px-4">
             Learn directly from the students who have cracked India&apos;s toughest exams. Real-world insights from the current Top 1%.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold transition-all ${activeCategory === cat.id ? "bg-slate-900 text-white shadow-xl" : "bg-white text-slate-600 border border-slate-100"}`}
            >
              <cat.icon size={16} className={activeCategory === cat.id ? "text-brand-400" : "text-slate-400"} />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Scroll Container Wrapper */}
        <div className="relative group">
          
          {/* Navigation Arrows - Desktop Only */}
          <button 
            onClick={() => scroll('left')}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-2xl flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-500 hover:text-white hidden lg:flex"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-white shadow-2xl flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-all hover:bg-brand-500 hover:text-white hidden lg:flex"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10 gap-6"
          >
            {displayedMentors.map((mentor) => (
              <div 
                key={mentor.id} 
                className="mentor-card relative flex-shrink-0 w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-center bg-white rounded-[2rem] p-4 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_32px_64px_rgba(251,91,46,0.08)] transition-all duration-500"
              >
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-6 bg-slate-50">
                   <Image src={mentor.image} alt={mentor.name} fill className="object-cover transition-transform duration-700 hover:scale-105" />
                   <div className="absolute top-4 right-4 bg-brand-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">{mentor.rank}</div>
                </div>

                <div className="px-2">
                  <div className="flex items-center gap-2 mb-2 text-brand-500">
                    <CheckCircle2 size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Verified Topper</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{mentor.name}</h3>
                  <p className="text-xs text-slate-500 font-medium mb-6 line-clamp-2">{mentor.description}</p>
                  
                  <div className="space-y-3 pt-6 border-t border-slate-50">
                    <div className="flex items-center gap-3">
                       <GraduationCap size={16} className="text-slate-400" />
                       <span className="text-xs font-bold text-slate-700">{mentor.college}</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <Briefcase size={16} className="text-slate-400" />
                       <span className="text-xs font-bold text-slate-700">{mentor.experience} Exp</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All */}
        <div className="mt-8 text-center">
            <a 
              href="https://play.google.com/store/apps/details?id=com.support.toppers.mantra&pcampaignid=web_share&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full text-xs font-bold hover:bg-brand-500 transition-all shadow-xl active:scale-95"
            >
                View All Mentors in App
                <Star size={14} fill="currentColor" className="text-brand-400" />
            </a>
        </div>

      </div>
    </section>
  );
};

export default MentorsSection;