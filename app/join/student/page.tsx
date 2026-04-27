"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import { 
  Trophy, 
  Target, 
  Smartphone, 
  Zap, 
  CheckCircle2,
  ArrowRight,
  Download,
  Star,
  GraduationCap,
  Sparkles,
  Rocket
} from "lucide-react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

// Premium Animation Variants
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
    transition: { staggerChildren: 0.1 }
  }
};

const StudentJoinPage = () => {
  // Magnetic Interaction Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

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
      {/* Hero Section */}
      <section 
        className="relative py-20 lg:py-32 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Background Image with Branding */}
        <div className="absolute inset-0 -z-10">
          <img 
            src="/images/student-bg.png" 
            alt="Student Study" 
            className="w-full h-full object-cover opacity-10 grayscale-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col lg:flex-row items-center gap-16"
          >
            <div className="flex-1 space-y-8 z-20">
              <motion.div 
                variants={fadeUpVariant}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 border border-brand-100 shadow-sm"
              >
                <Rocket size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">Join India's Most Elite Student Circle</span>
              </motion.div>
              
              <motion.h1 
                variants={fadeUpVariant}
                className="text-5xl lg:text-[72px] font-bold text-slate-900 leading-[1.1] tracking-tight"
              >
                Your Journey to <span className="text-brand-500 underline decoration-brand-200 underline-offset-8">Top Ranks</span> Starts Here
              </motion.h1>
              
              <motion.p 
                variants={fadeUpVariant}
                className="text-lg text-slate-500 max-w-xl leading-relaxed font-medium"
              >
                Stop studying hard, start studying smart. Get direct access to the strategies, 
                notes, and mentorship of India's top 1% rankers.
              </motion.p>
              
              <motion.div 
                variants={fadeUpVariant}
                className="flex flex-wrap gap-5 pt-4"
              >
                <a 
                  href="#download" 
                  className="group relative overflow-hidden rounded-full bg-brand-500 text-white px-8 py-4 font-bold shadow-xl transition-all hover:shadow-[0_0_40px_rgba(251,146,60,0.4)] hover:-translate-y-1 inline-flex items-center gap-2"
                >
                  <Download size={20} className="group-hover:bounce" />
                  Download App Now
                </a>
                <a 
                  href="#form" 
                  className="rounded-full bg-white text-slate-700 px-8 py-4 font-bold border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm inline-flex items-center gap-2"
                >
                  Talk to a Mentor <ArrowRight size={18} />
                </a>
              </motion.div>
            </div>
            
            <motion.div 
              variants={fadeUpVariant}
              className="flex-1 relative flex justify-center items-center h-[500px] lg:h-[650px] perspective-1000"
            >
              {/* Magnetic Student Ecosystem Animation */}
              <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Magnetic App Frame */}
                <motion.div 
                  style={{ rotateX, rotateY }}
                  className="relative z-10 w-56 h-[450px] bg-slate-900 rounded-[3rem] border-[10px] border-slate-800 shadow-[0_40px_100px_rgba(0,0,0,0.3)] overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img 
                    src="/images/student-hero.png" 
                    alt="App Interface" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-500/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap size={16} fill="white" className="text-white" />
                      <span className="text-xs font-black uppercase tracking-tighter">Live Mentorship</span>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Interactive Perks */}
                {[
                  { icon: Trophy, label: "Top Ranks", color: "text-brand-500", x: -180, y: -140 },
                  { icon: Target, label: "Precision", color: "text-slate-900", x: 190, y: -100 },
                  { icon: Star, label: "AIR 1 Notes", color: "text-brand-500", x: 60, y: 190 },
                  { icon: Smartphone, label: "24/7 Support", color: "text-slate-900", x: -190, y: 150 }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    style={{ 
                      x: useTransform(dx, [-500, 500], [item.x - 20, item.x + 20]),
                      y: useTransform(dy, [-500, 500], [item.y - 20, item.y + 20])
                    }}
                    className="absolute p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white flex flex-col items-center gap-2 group cursor-pointer"
                    whileHover={{ scale: 1.15, zIndex: 30 }}
                  >
                    <div className={`p-2 rounded-xl bg-slate-50 ${item.color}`}>
                      <item.icon size={24} />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                      {item.label}
                    </span>
                  </motion.div>
                ))}

                {/* Dynamic Grid Overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.1]">
                  <defs>
                    <pattern id="grid-student" width="50" height="50" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.5" fill="#FB923C" />
                    </pattern>
                  </defs>
                  <motion.rect 
                    width="100%" height="100%" fill="url(#grid-student)" 
                    style={{ 
                      x: useTransform(dx, [-500, 500], [-15, 15]),
                      y: useTransform(dy, [-500, 500], [-15, 15])
                    }}
                  />
                </svg>

                {/* Orbiting Particles */}
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    style={{ 
                      x: useTransform(dx, [-500, 500], [(i - 5) * 50, (i - 5) * -50]),
                      y: useTransform(dy, [-500, 500], [(i - 5) * 50, (i - 5) * -50]),
                      top: `${10 + (i * 9)}%`, 
                      left: `${15 + (i * 8)}%` 
                    }}
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ 
                      duration: 4 + i % 2, 
                      repeat: Infinity, 
                      delay: i * 0.3 
                    }}
                    className="absolute w-2 h-2 bg-brand-300 rounded-full blur-[1px]"
                  />
                ))}
              </div>

              {/* Success Badge */}
              <motion.div 
                style={{ 
                  x: useTransform(dx, [-500, 500], [-8, 8]),
                  y: useTransform(dy, [-500, 500], [-8, 8])
                }}
                className="absolute -bottom-8 right-0 lg:right-10 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 z-20 flex items-center gap-4"
              >
                <div className="p-3 bg-brand-50 text-brand-600 rounded-xl">
                  <Sparkles size={24} />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-slate-900">AIR 1 Strategies</div>
                  <div className="text-[10px] text-brand-500 font-black uppercase tracking-widest">Available Now</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">Unlock Your Full Potential</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
              We bridge the gap between hard work and smart work with features designed for winners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                color: "text-brand-600",
                bg: "bg-brand-50",
                title: "Instant Mentorship",
                desc: "Get your doubts resolved within minutes by India's top scorers."
              },
              {
                icon: Target,
                color: "text-slate-900",
                bg: "bg-slate-50",
                title: "Personalized Roadmaps",
                desc: "Customized study schedules tailored to your unique goals and weaknesses."
              },
              {
                icon: Smartphone,
                color: "text-brand-600",
                bg: "bg-brand-50",
                title: "Modern App",
                desc: "Experience seamless learning with a world-class UI designed for focus."
              },
              {
                icon: CheckCircle2,
                color: "text-slate-900",
                bg: "bg-slate-50",
                title: "Premium Resources",
                desc: "Hand-picked notes and toppers' strategies to give you the ultimate edge."
              }
            ].map((benefit, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -8 }}
                className="space-y-4 p-8 bg-slate-50/50 hover:bg-white hover:shadow-xl rounded-[2.5rem] border border-transparent hover:border-slate-100 transition-all duration-300"
              >
                <div className={`w-14 h-14 ${benefit.color} rounded-2xl flex items-center justify-center`}>
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{benefit.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 bg-slate-900 relative overflow-hidden rounded-[3rem] lg:rounded-[4rem] mx-4 md:mx-12 mb-24">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8">Ready to transform your learning?</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-medium">
            Join thousands of students who are already using TopperMantra to achieve their dreams. 
            Download the app and get your first mentorship session free!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://play.google.com/store/apps/details?id=com.support.toppers.mantra&pcampaignid=web_share&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-4 hover:bg-slate-50 transition-all shadow-2xl active:scale-95 group"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
            </a>
            <div className="text-slate-500 text-sm font-semibold tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 bg-slate-700 rounded-full" />
              Coming soon on iOS
            </div>
          </div>
        </div>
      </section>

      {/* --- FORM SECTION (Premium Minimalist Look) --- */}
      <section id="form" className="py-24 relative overflow-hidden">
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
            className="bg-white rounded-[40px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] border border-slate-100 p-8 md:p-16"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight">Request a Career Session</h2>
              <p className="mt-5 text-slate-500 font-medium max-w-2xl mx-auto text-lg italic">
                Not sure where to start? Let our experts guide you to the right mentorship path.
              </p>
            </div>
            
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" placeholder="Your Name" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none placeholder:text-slate-400" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                  <input type="email" placeholder="you@example.com" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none placeholder:text-slate-400" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none placeholder:text-slate-400" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Current Class</label>
                  <input type="text" placeholder="Class 10, 12, etc." className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none placeholder:text-slate-400" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Board / Exam</label>
                  <input type="text" placeholder="CBSE, JEE, NEET, etc." className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none placeholder:text-slate-400" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Target Goal</label>
                  <input type="text" placeholder="Engineer, Doctor, etc." className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none placeholder:text-slate-400" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Anything else?</label>
                <textarea 
                  className="w-full px-6 py-5 bg-slate-50 border-none rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none min-h-[140px] resize-none placeholder:text-slate-400"
                  placeholder="Share your goals or doubts..."
                />
              </div>

              <button type="button" className="w-full group relative overflow-hidden rounded-2xl bg-slate-900 text-white py-5 font-bold text-lg shadow-[0_20px_40px_rgba(15,23,42,0.1)] transition-all hover:shadow-[0_25px_50px_rgba(15,23,42,0.2)] hover:-translate-y-1">
                <div className="absolute inset-0 bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Join Student Circle
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default StudentJoinPage;
