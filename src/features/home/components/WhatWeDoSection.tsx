"use client";

import React, { useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronLeft, ChevronRight, Trophy, Code, Rocket, Check } from "lucide-react";

const SERVICES = [
  {
    id: 1,
    title: "Academic Mentorship",
    icon: Trophy,
    description: "Direct access to JEE/NEET toppers, Board exam achievers, and Olympiad winners for strategies, study techniques, and exam mastery.",
    features: [
      "Live sessions with AIR rankers",
      "Board exam toppers' strategies",
      "Olympiad preparation guidance",
      "One-on-one doubt clearing",
      "Time management & study plans"
    ],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=800&fit=crop&crop=center&auto=format"
  },
  {
    id: 2,
    title: "Mock Hackathons",
    icon: Code,
    description: "Real-world coding competitions modeled after iCode and Smart India Hackathon (Junior) to build problem-solving skills and technical confidence.",
    features: [
      "iCode-style challenges",
      "SIH Junior format practice",
      "Team collaboration experience",
      "Real problem statements",
      "Certificate of participation"
    ],
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=800&fit=crop&crop=center&auto=format"
  },
  {
    id: 3,
    title: "Startup Mentorship",
    icon: Rocket,
    description: "Learn entrepreneurship from real founders who have built successful startups. Understand business, innovation, and turning ideas into reality.",
    features: [
      "Mentorship from real founders",
      "Startup ideation workshops",
      "Business model basics",
      "Innovation & problem-solving",
      "Pitch practice sessions"
    ],
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=800&fit=crop&crop=center&auto=format"
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
    
    gsap.fromTo(".main-card-content", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.2 }
    );
    gsap.fromTo(".side-element",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out", stagger: 0.1, delay: 0.2 }
    );
  }, []);

  const navigateToService = (index: number) => {
    gsap.to(".main-card-content", {
      opacity: 0, y: -20, duration: 0.3, ease: "power2.in",
      onComplete: () => {
        setCurrentIndex(index);
        gsap.fromTo(".main-card-content",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
        );
      }
    });

    gsap.to(".side-element", {
      scale: 0.9, opacity: 0.7, duration: 0.2, yoyo: true, repeat: 1, ease: "power2.inOut"
    });
  };

  const handlePrevious = () => navigateToService((currentIndex - 1 + SERVICES.length) % SERVICES.length);
  const handleNext = () => navigateToService((currentIndex + 1) % SERVICES.length);

  return (
    <section className="relative w-full min-h-screen bg-brand-50 pt-16 md:pt-20 pb-20 md:pb-32 overflow-hidden flex flex-col justify-center font-sans">
      
      {/* FIXED: Background SVG Height adjusted for mobile (h-[55%]) and desktop (md:h-[75vh]) */}
      <div className="absolute bottom-0 left-0 w-full h-[55%] md:h-[75%] z-0 pointer-events-none">
        <svg 
          viewBox="0 0 1440 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="premiumOrangeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff8a5b" />   {/* brand-400 */}
              <stop offset="50%" stopColor="#ff5b2e" />  {/* brand-500 */}
              <stop offset="100%" stopColor="#e64a1f" /> {/* brand-600 */}
            </linearGradient>
          </defs>
          <path 
            d="M0,50 C400,50 400,480 720,480 C1040,480 1040,50 1440,50 L1440,600 L0,600 Z" 
            fill="url(#premiumOrangeGrad)"
          />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-8 md:mt-12">
        
        {/* Section Heading */}
        <div className="section-heading text-center mb-16 md:mb-16">
          <span className="text-brand-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-3 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-accent-900 mb-3 md:mb-4 tracking-tight">
            What We Do
          </h2>
          <p className="text-accent-600 max-w-2xl mx-auto text-sm md:text-lg px-4">
            Empowering students with comprehensive learning experiences across academics, technology, and entrepreneurship.
          </p>
        </div>

        {/* Carousel / Cards Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 lg:gap-16">
          
          {/* Left Side: Desktop Only */}
          <div className="hidden md:flex flex-col items-center gap-6 shrink-0 mt-6 lg:mt-10">
            <div 
              onClick={handlePrevious}
              className="side-element relative w-32 h-32 lg:w-44 lg:h-44 rounded-full overflow-hidden shadow-[0_10px_30px_rgba(230,74,31,0.3)] cursor-pointer hover:scale-105 transition-transform border-[5px] border-white"
            >
              <Image src={prevService.image} alt={prevService.title} fill className="object-cover" />
            </div>
            
            <button
              onClick={handlePrevious}
              className="side-element shrink-0 w-12 h-12 rounded-full border-2 border-white/60 bg-transparent items-center justify-center text-white hover:bg-white hover:text-brand-600 hover:scale-105 transition-all shadow-lg z-20 flex"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          {/* Center Main Card */}
          <div className="relative w-full max-w-[460px] shrink-0 z-30 px-2 sm:px-0 mt-6 md:mt-0">
            {/* FIXED: Padding adjusted for mobile (`pt-20` vs `md:pt-24`) */}
            <div className="bg-gradient-to-b from-white via-white to-brand-50 rounded-[30px] md:rounded-[40px] pt-16 md:pt-24 pb-8 md:pb-10 px-5 md:px-10 text-center shadow-[0_20px_50px_rgba(230,74,31,0.15)] border border-brand-100/50">
              
              {/* FIXED: Image size scaled down for mobile (`w-28 h-28`, `-top-14`) so it doesn't look overly huge */}
              <div className="absolute -top-14 md:-top-20 left-1/2 -translate-x-1/2 w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-2xl border-4 md:border-[6px] border-white z-20 bg-white">
                <Image 
                  src={currentService.image} 
                  alt={currentService.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text & Details Content */}
              <div className="main-card-content flex flex-col items-center mt-4 md:mt-2">
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4 w-full">
                  <currentService.icon className="w-6 h-6 md:w-7 md:h-7 text-brand-500 shrink-0 hidden md:block" />
                  <h3 className="text-xl md:text-[28px] font-extrabold text-accent-900 leading-tight">
                    {currentService.title}
                  </h3>
                </div>
                
                <p className="text-accent-600 text-sm md:text-[15px] leading-relaxed mb-6 md:mb-8 px-1">
                  {currentService.description}
                </p>

                {/* Features List */}
                <div className="w-full text-left bg-white/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-5 shadow-sm border border-brand-100/50 mb-2 space-y-2.5 md:space-y-3">
                  {currentService.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 md:w-3.5 md:h-3.5 text-brand-600" />
                      </div>
                      <span className="text-accent-700 text-[13px] md:text-sm font-medium leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Desktop Only */}
          <div className="hidden md:flex flex-col items-center gap-6 shrink-0 mt-6 lg:mt-10">
            <div 
              onClick={handleNext}
              className="side-element relative w-32 h-32 lg:w-44 lg:h-44 rounded-full overflow-hidden shadow-[0_10px_30px_rgba(230,74,31,0.3)] cursor-pointer hover:scale-105 transition-transform border-[5px] border-white"
            >
              <Image src={nextService.image} alt={nextService.title} fill className="object-cover" />
            </div>

            <button
              onClick={handleNext}
              className="side-element shrink-0 w-12 h-12 rounded-full border-2 border-white/60 bg-transparent items-center justify-center text-white hover:bg-white hover:text-brand-600 hover:scale-105 transition-all shadow-lg z-20 flex"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="flex md:hidden justify-center gap-8 mt-10 z-20 relative">
          <button onClick={handlePrevious} className="w-12 h-12 rounded-full border-2 border-white/80 bg-brand-500 items-center justify-center text-white flex shadow-lg hover:bg-brand-600 active:scale-95 transition-transform">
            <ChevronLeft size={24} />
          </button>
          <button onClick={handleNext} className="w-12 h-12 rounded-full border-2 border-white/80 bg-brand-500 items-center justify-center text-white flex shadow-lg hover:bg-brand-600 active:scale-95 transition-transform">
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDoSection;