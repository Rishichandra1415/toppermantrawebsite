"use client";
import React from "react";
import { CheckCircle2, ShieldCheck, Zap, Trophy, Cpu, Search, Code, Rocket, Lightbulb, Users, BarChart } from "lucide-react";

interface MentorshipDetailsProps {
  type?: string;
}

const CONTENT: Record<string, any> = {
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
  <div className="flex gap-6 group p-6 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 font-sans">
    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-brand-500 group-hover:border-brand-500 transition-all duration-500 shadow-sm">
      <Icon className="w-7 h-7 text-slate-400 group-hover:text-white transition-colors duration-500" />
    </div>
    <div>
      <div className="text-[10px] font-bold text-brand-500 uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity">Phase 0{index + 1}</div>
      <h4 className="font-bold">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed mt-2">{desc}</p>
    </div>
  </div>
);

const MentorshipDetails = ({ type = "academic" }: MentorshipDetailsProps) => {
  const data = CONTENT[type] || CONTENT.academic;

  return (
    <section className="py-10 bg-[#FAFAFA] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.2]" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-brand-100/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -left-10 top-0 w-1 h-24 bg-brand-500/20 hidden lg:block" />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-brand-600 uppercase tracking-wider mb-4 shadow-sm">
              {data.badge}
            </div>
            <h2 className="font-bold">
              {data.title[0]} <br />
              <span className="text-brand-500">{data.title[1]}</span>
            </h2>
            <p className="text-slate-600 mt-4 mb-6 max-w-lg text-lg leading-relaxed font-medium">
              {data.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.features.map((feature: any, i: number) => (
                <DetailItem 
                  key={i}
                  index={i}
                  icon={feature.icon}
                  title={feature.title}
                  desc={feature.desc}
                />
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-brand-500/10 blur-[80px] rounded-full scale-90 group-hover:scale-110 transition-transform duration-1000" />
            <div className="relative bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-brand-50/50 rounded-bl-[5rem] -z-0" />
               <h3 className="mb-8 flex items-center gap-4 font-bold">
                  <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  Performance Mastery
               </h3>
               
               <div className="space-y-8">
                 {data.stats.map((stat: any, i: number) => (
                   <div key={i} className="flex items-start gap-8 group/stat">
                     <div className="text-4xl font-bold text-slate-900 group-hover/stat:text-brand-500 transition-colors">{stat.val}</div>
                     <div className="pt-1">
                       <p className="text-sm font-bold text-slate-950 uppercase tracking-wide">{stat.label}</p>
                       <p className="text-xs text-slate-500 mt-1 leading-relaxed">{stat.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>

               <div className="mt-12 pt-8 border-t border-slate-100">
                 <button className="w-full bg-slate-950 text-white font-bold py-5 rounded-2xl hover:bg-brand-600 transition-all text-base shadow-2xl shadow-slate-200 flex items-center justify-center gap-3">
                   {data.cta}
                   <ShieldCheck className="w-5 h-5" />
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipDetails;
