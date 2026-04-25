"use client";

import React, { useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight, Trophy, Code, Rocket, Check, Sparkles } from "lucide-react";

const SERVICES = [
  {
    id: 1,
    title: "Elite Mentorship",
    icon: Trophy,
    description: "Access the unwritten roadmaps of AIR 1-100 rankers. Master complex subjects with frameworks used by India's top 1% achievers.",
    features: [
      "Live Strategy with AIR Rankers",
      "Conceptual Clarity Frameworks",
      "National Topper Study Blueprints",
      "One-on-One Mastery Sessions",
      "Psychology of Top Performance"
    ],
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "Hackathon Dominance",
    icon: Code,
    description: "Real-world engineering challenges designed to build technical superiority and problem-solving skills for future innovators.",
    features: [
      "National Format Code Sprints",
      "Smart India Hackathon Blueprints",
      "High-Impact Project Building",
      "Team Leadership Experience",
      "Certificate of Engineering Excellence"
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 3,
    title: "Entrepreneurial Path",
    icon: Rocket,
    description: "Master the art of innovation. Learn the fundamentals of startups and business growth directly from successful founders.",
    features: [
      "Mentorship from Real Founders",
      "Ideation to MVP Blueprint",
      "Pitching & Investor Readiness",
      "Innovation Problem Solving",
      "Real-World Business Modeling"
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200"
  }
];

const WhatWeDoSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentService = SERVICES[currentIndex];
  const prevService = SERVICES[(currentIndex - 1 + SERVICES.length) % SERVICES.length];
  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];

  useGSAP(() => {
    gsap.fromTo(".section-heading",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
    
    gsap.fromTo(".main-card-container", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const navigateToService = (index: number) => {
    const tl = gsap.timeline();
    
    tl.to(".main-card-content", {
      opacity: 0, x: index > currentIndex ? -20 : 20, duration: 0.3, ease: "power2.in",
      onComplete: () => {
        setCurrentIndex(index);
        gsap.fromTo(".main-card-content",
          { opacity: 0, x: index > currentIndex ? 20 : -20 },
          { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }
        );
      }
    });

    gsap.to(".side-card", {
      scale: 0.95, opacity: 0.5, duration: 0.2, yoyo: true, repeat: 1
    });
  };

  const handlePrevious = () => navigateToService((currentIndex - 1 + SERVICES.length) % SERVICES.length);
  const handleNext = () => navigateToService((currentIndex + 1) % SERVICES.length);

  return (
    <section className="relative w-full py-12 md:py-20 bg-brand-50 overflow-hidden flex flex-col justify-center font-sans focus:outline-none">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-brand-50 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-50 rounded-full blur-[120px] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.15]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        
        {/* Section Heading */}
        <div className="section-heading text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-4 py-1.5 text-slate-700 mb-5 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-brand-500" />
            <span className="text-xs font-bold uppercase tracking-widest">Our Expertise</span>
          </div>
          <h2>
            What We Do Best
          </h2>
          <p className="max-w-xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed px-4">
            Empowering students with comprehensive learning experiences across academics, technology, and entrepreneurship.
          </p>
        </div>

        {/* Improved Main Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          
          {/* Left Navigation Card (Desktop) */}
          <div 
            onClick={handlePrevious}
            className="hidden lg:block side-card group relative w-44 h-60 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 border border-slate-100 shadow-xl opacity-40 hover:opacity-100"
          >
            <Image src={prevService.image} alt={prevService.title} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
              <span className="text-white text-[10px] font-bold uppercase tracking-wider">{prevService.title}</span>
            </div>
          </div>

          {/* Main Focused Card */}
          <div className="main-card-container relative w-full max-w-4xl z-30">
            <div className="bg-white/80 backdrop-blur-md rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-white/50 grid md:grid-cols-2 lg:min-h-[480px]">
              
              {/* Image Side */}
              <div className="relative h-64 md:h-auto overflow-hidden">
                <Image 
                  src={currentService.image} 
                  alt={currentService.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-600/10 mix-blend-overlay" />
              </div>

              {/* Content Side */}
              <div className="main-card-content p-6 md:p-8 lg:p-12 flex flex-col">
                <div className="hidden md:flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center">
                    <currentService.icon className="w-6 h-6 text-brand-500" />
                  </div>
                  <span className="text-brand-500 font-bold text-xs uppercase tracking-widest">Service 0{currentIndex + 1}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5 leading-tight">
                  {currentService.title}
                </h3>
                
                <p className="text-accent-600 text-base md:text-lg leading-relaxed mb-8">
                  {currentService.description}
                </p>

                <div className="space-y-4 mb-10">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand-500 transition-colors">
                        <Check className="w-3.5 h-3.5 text-brand-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-accent-700 text-sm md:text-base font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 md:mt-auto flex items-center justify-between md:justify-start gap-4 border-t border-accent-100 pt-6 md:border-none md:pt-0">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={handlePrevious}
                      className="w-12 h-12 rounded-full border border-accent-200 flex items-center justify-center text-accent-400 hover:bg-brand-500 hover:border-brand-500 hover:text-white transition-all shadow-sm active:scale-95"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="w-12 h-12 rounded-full border border-accent-200 flex items-center justify-center text-accent-400 hover:bg-brand-500 hover:border-brand-500 hover:text-white transition-all shadow-sm active:scale-95"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                  <div className="flex gap-2">
                    {SERVICES.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1.5 transition-all duration-300 rounded-full ${i === currentIndex ? 'w-8 bg-brand-500' : 'w-2 bg-accent-200'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Navigation Card (Desktop) */}
          <div 
            onClick={handleNext}
            className="hidden lg:block side-card group relative w-48 h-64 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 border border-accent-100 shadow-xl opacity-40 hover:opacity-100"
          >
            <Image src={nextService.image} alt={nextService.title} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
              <span className="text-white text-xs font-bold uppercase tracking-wider">{nextService.title}</span>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default WhatWeDoSection;