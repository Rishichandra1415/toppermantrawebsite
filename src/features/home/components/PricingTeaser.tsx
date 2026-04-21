"use client";

import React from "react";
import { Check, Star, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

const PLANS = [
  {
    id: "individual",
    name: "Achiever Pro",
    tagline: "For ambitious students aiming for the top 1%.",
    price: "₹1,499",
    period: "/mo",
    features: [
      "1-on-1 Monthly Topper Session",
      "Unlimited Success Mantras",
      "Early Access to Hackathons",
      "Strategic Exam Roadmaps"
    ],
    buttonText: "Begin Journey",
    popular: false,
    gradient: "from-slate-50 to-white"
  },
  {
    id: "institutional",
    name: "Institutional Excellence",
    tagline: "Complete mentorship ecosystem for your school.",
    price: "Custom",
    period: "Pricing",
    features: [
      "Dedicated Mentor assigned to school",
      "Quarterly Strategic Audits",
      "Bulk Student Onboarding",
      "Institutional Branding & Support"
    ],
    buttonText: "Inquire Now",
    popular: true,
    gradient: "from-brand-50/50 to-white"
  }
];

const PricingTeaser = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden font-sans">
      
      {/* Editorial Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 shadow-sm mb-6">
              <Star size={14} className="text-brand-500" fill="currentColor" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-800">Investment in Excellence</span>
           </div>
            <h2>
               Premium Tiers for Extraordinary Goals
            </h2>
           <p className="text-slate-400 text-sm md:text-base font-medium max-w-xl mx-auto">
              Choose the path that aligns with your ambition. Whether you&apos;re an individual achiever or a leading institution.
           </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 max-w-5xl mx-auto">
           {PLANS.map((plan) => (
              <div 
                key={plan.id}
                className={`
                    relative flex flex-col p-7 lg:p-12 rounded-[2.5rem] border transition-all duration-500 group
                    ${plan.popular 
                        ? 'bg-gradient-to-b from-brand-50 to-white border-brand-100 shadow-[0_32px_80px_rgba(251,146,60,0.12)]' 
                        : 'bg-white border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_45px_100px_rgba(0,0,0,0.06)]'
                    }
                `}
              >
                {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2 whitespace-nowrap">
                        <Sparkles size={11} className="text-brand-400" />
                        Most Popular Choice
                    </div>
                )}

                <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <p className="text-slate-400 text-[10px] font-medium uppercase tracking-widest">{plan.tagline}</p>
                </div>

                <div className="mb-8 flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">{plan.price}</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">{plan.period}</span>
                </div>

                <div className="space-y-4 mb-12 flex-grow">
                    {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                                <Check size={14} strokeWidth={3} />
                            </div>
                            <span className="text-sm font-bold text-slate-600">{feature}</span>
                        </div>
                    ))}
                </div>

                <button className={`
                    w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn active:scale-[0.98]
                    ${plan.popular 
                        ? 'bg-slate-900 text-white shadow-xl hover:bg-brand-500' 
                        : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-400'
                    }
                `}>
                    {plan.buttonText}
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
           ))}
        </div>

        {/* Global CTA Link */}
        <div className="mt-16 text-center">
            <button className="text-xs font-black uppercase tracking-[0.3em] text-slate-400 hover:text-brand-500 transition-all flex items-center gap-3 mx-auto group">
                <ShieldCheck size={16} className="text-brand-500" /> 
                View Competitive Bulk Pricing Breakdown
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default PricingTeaser;
