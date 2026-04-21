"use client";

import React from "react";
import { MessageSquare, ArrowRight, Sparkles, Rocket } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative w-full py-20 lg:py-32 bg-slate-950 overflow-hidden font-sans">
      
      {/* Cinematic Glow Accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent opacity-50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        
        {/* Prestige Badge */}
        <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-md text-[10px] font-black uppercase tracking-[0.4em] text-brand-400">
                <Sparkles size={14} />
                Your Legacy Begins Here
            </div>
        </div>

        {/* The Closer Headline */}
        <h2 className="text-white">
            Start Your Academic Journey Today
        </h2>

        <p className="text-slate-400 text-[13px] md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed px-4 md:px-0">
            Stop leaving your future to chance. Join India&apos;s most elite mentorship network and secure your place in the top 1%.
        </p>

        {/* Conversion Hub */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <button className="group relative w-full sm:w-auto h-16 px-10 rounded-2xl bg-brand-500 text-white font-bold text-lg shadow-2xl shadow-brand-500/20 hover:bg-brand-600 hover:shadow-brand-500/40 transition-all active:scale-[0.98] overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-3">
                    Get Mentorship
                    <Rocket size={20} className="transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px]" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>

            <button className="group w-full sm:w-auto h-16 px-10 rounded-2xl bg-transparent border border-slate-800 text-white font-bold text-lg hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                Talk to Us
                <MessageSquare size={20} className="text-slate-500 group-hover:text-slate-950" />
            </button>
        </div>

        {/* Fine Print Trust */}
        <div className="mt-16 flex items-center justify-center gap-8 opacity-30 text-white">
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Admissions Active</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Global Support</span>
            </div>
        </div>

      </div>

      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1) translate(-2%, -2%); }
          50% { opacity: 0.2; transform: scale(1.1) translate(2%, 2%); }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;
