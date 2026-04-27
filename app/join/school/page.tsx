"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { 
  GraduationCap, 
  Users, 
  LineChart, 
  ShieldCheck, 
  CheckCircle2,
  ArrowRight,
  School,
  Sparkles,
  Building2,
  Mail,
  Phone
} from "lucide-react";

// Animation Variants for Premium Feel
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const SchoolJoinPage = () => {
  // Smooth Mouse Tracking for High-End Interactivity
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  // Tilt effects for the central hub
  const rotateX = useTransform(dy, [-400, 400], [12, -12]);
  const rotateY = useTransform(dx, [-400, 400], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] selection:bg-brand-500 selection:text-white pt-24 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section 
        className="relative py-20 lg:py-32 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Premium Animated Background */}
        <div className="absolute inset-0 -z-10 bg-white">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/50 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-100/40 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex-1 space-y-8 z-20"
            >
              <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100">
                <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Institutional Partnership</span>
              </motion.div>
              
              <motion.h1 variants={fadeUpVariant} className="text-5xl lg:text-[72px] font-bold text-slate-900 leading-[1.1] tracking-tight">
                Empower Your <br/> Students with <span className="text-brand-500 relative">
                  Elite Mentorship
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-300 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" />
                  </svg>
                </span>
              </motion.h1>
              
              <motion.p variants={fadeUpVariant} className="text-lg text-slate-500 max-w-xl leading-relaxed font-medium">
                Partner with TopperMantra to bring India's top 1% achievers directly to your campus. Bridge the gap between academic theory and competitive success.
              </motion.p>
              
              <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-5 pt-4">
                <button className="relative group overflow-hidden rounded-full bg-slate-900 text-white px-8 py-4 font-semibold shadow-2xl transition-all hover:shadow-[0_0_40px_rgba(15,23,42,0.3)] hover:-translate-y-1">
                  <div className="absolute inset-0 bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center gap-2">
                    Partner With Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="rounded-full bg-white text-slate-700 px-8 py-4 font-semibold border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
            
            {/* Right Interactive Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex-1 relative flex justify-center items-center h-[500px] lg:h-[650px] perspective-1000"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Magnetic Central Hub */}
                <motion.div 
                  style={{ rotateX, rotateY }}
                  className="relative z-10 w-56 h-56 bg-white/80 backdrop-blur-xl rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex items-center justify-center border border-white/50 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="absolute inset-0 bg-brand-400/20 rounded-[40px] blur-3xl animate-pulse" />
                  <div className="bg-gradient-to-br from-slate-800 to-slate-950 w-36 h-36 rounded-[28px] flex items-center justify-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-20 mix-blend-overlay"></div>
                    <School size={64} strokeWidth={1.5} className="relative z-10 text-brand-100" />
                  </div>
                </motion.div>

                {/* Interactive Orbiting Icons */}
                {[
                  { icon: GraduationCap, label: "Mentorship", color: "text-brand-500", bg: "bg-brand-50", x: -180, y: -140 },
                  { icon: Sparkles, label: "Success", color: "text-slate-900", bg: "bg-slate-50", x: 200, y: -100 },
                  { icon: Users, label: "Growth", color: "text-brand-500", bg: "bg-brand-50", x: 60, y: 200 },
                  { icon: LineChart, label: "Results", color: "text-slate-900", bg: "bg-slate-50", x: -200, y: 150 }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.15, type: "spring", stiffness: 200 }}
                    style={{ 
                      x: useTransform(dx, [-500, 500], [item.x - 30, item.x + 30]),
                      y: useTransform(dy, [-500, 500], [item.y - 30, item.y + 30])
                    }}
                    className="absolute p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-white flex flex-col items-center gap-3 cursor-pointer group"
                    whileHover={{ scale: 1.1, y: -5, zIndex: 30 }}
                  >
                    <div className={`p-3 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
                      <item.icon size={26} strokeWidth={2} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-800 transition-colors">
                      {item.label}
                    </span>
                  </motion.div>
                ))}

                {/* Floating Badges */}
                <motion.div 
                  style={{ 
                    x: useTransform(dx, [-500, 500], [-10, 10]),
                    y: useTransform(dy, [-500, 500], [10, -10])
                  }}
                  className="absolute bottom-4 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 z-20 flex items-center gap-4"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-400 rounded-full blur opacity-40 animate-pulse"></div>
                    <CheckCircle2 size={32} className="text-green-500 relative z-10 bg-white rounded-full" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900 tracking-tight">50+</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Partner Schools</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- WHY US SECTION --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Why Partner with Us?</h2>
            <p className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto font-medium">
              We provide more than just mentorship; we offer a <span className="text-slate-900 font-semibold">complete ecosystem</span> for student excellence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: ShieldCheck, title: "Proven Methodology", desc: "Our service is proven across 50+ institutions, focusing on measurable student outcomes and crystal-clear conceptual clarity." },
              { icon: LineChart, title: "Data-Driven Insights", desc: "Track every student's progress through our proprietary institutional dashboard, providing real-time engagement analytics." },
              { icon: Sparkles, title: "Elite Network Access", desc: "Give your students direct access to top AIR rankers and alumni who provide insights that standard coaching simply lacks." }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative p-10 rounded-[32px] bg-slate-50 hover:bg-white border border-slate-100 hover:border-brand-100 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm mb-8 border border-slate-100 group-hover:bg-brand-50 group-hover:scale-110 transition-all">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FORM SECTION (Premium Minimalist Look) --- */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Image with Premium Overlay */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="/images/form-bg.png" 
            alt="Campus Background" 
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[40px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col lg:flex-row"
          >
            {/* Form Left Side (Branding Info) */}
            <div className="lg:w-2/5 bg-slate-50/50 p-10 lg:p-14 border-r border-slate-100 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Let's Build the Future</h2>
                <p className="text-slate-500 leading-relaxed font-medium">
                  Fill out the form and our institutional head will reach out to you within <span className="text-brand-500 font-bold underline decoration-brand-100 underline-offset-4">24 hours</span>.
                </p>
              </div>

              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform"><Mail size={20} className="text-brand-500"/></div>
                  <div><p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Email Us</p><p className="font-bold text-slate-900">partner@toppermantra.com</p></div>
                </div>
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform"><Phone size={20} className="text-brand-500"/></div>
                  <div><p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">Call Us</p><p className="font-bold text-slate-900">+91 98765 43210</p></div>
                </div>
              </div>
            </div>

            {/* Form Right Side (Inputs) */}
            <div className="lg:w-3/5 p-10 lg:p-14 bg-white">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">School Name</label>
                    <input type="text" placeholder="Enter school name" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none placeholder:text-slate-400" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Contact Person</label>
                    <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none placeholder:text-slate-400" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" placeholder="school@example.com" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none placeholder:text-slate-400" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none placeholder:text-slate-400" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">How can we help?</label>
                  <textarea 
                    className="w-full px-6 py-5 bg-slate-50 border-none rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none min-h-[140px] resize-none placeholder:text-slate-400"
                    placeholder="Briefly describe your requirements..."
                  />
                </div>

                <button type="button" className="w-full group relative overflow-hidden rounded-2xl bg-slate-900 text-white py-5 font-bold text-base shadow-[0_20px_40px_rgba(15,23,42,0.1)] transition-all hover:shadow-[0_25px_50px_rgba(15,23,42,0.2)] hover:-translate-y-1">
                  <div className="absolute inset-0 bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Submit Partnership Request
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default SchoolJoinPage;