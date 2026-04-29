"use client";

import React, { useState, useEffect } from "react";
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
  Phone,
  LayoutDashboard,
  BrainCircuit,
  BookOpen,
  Target,
  BarChart3
} from "lucide-react";

// --- Animation Variants ---
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

// --- Sub-components for Hook Safety (Hero Section) ---
const OrbitingIcon = ({ item, idx, dx, dy, isMobile }: { item: any, idx: number, dx: any, dy: any, isMobile: boolean }) => {
  const scale = isMobile ? 0.6 : 1;
  const xTransform = useTransform(dx, [-500, 500], [item.x - 30, item.x + 30]);
  const yTransform = useTransform(dy, [-500, 500], [item.y - 30, item.y + 30]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={isMobile ? { 
        opacity: 1, scale: 1, y: [item.y * scale, (item.y * scale) - 10, item.y * scale],
        transition: { y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }, opacity: { delay: 0.6 + idx * 0.15 }, scale: { delay: 0.6 + idx * 0.15 } }
      } : { opacity: 1, scale: 1 }}
      transition={{ delay: 0.6 + idx * 0.15, type: "spring", stiffness: 200 }}
      style={{ x: isMobile ? item.x * scale : xTransform, y: isMobile ? item.y * scale : yTransform }}
      className="absolute p-3 sm:p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-white flex flex-col items-center gap-2 sm:gap-3 cursor-pointer group"
      whileHover={{ scale: 1.1, y: -5, zIndex: 30 }}
    >
      <div className={`p-2 sm:p-3 rounded-xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform`}>
        <item.icon size={isMobile ? 20 : 26} strokeWidth={2} />
      </div>
      <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-800 transition-colors">
        {item.label}
      </span>
    </motion.div>
  );
};

const InteractiveBadge = ({ dx, dy, isMobile }: { dx: any, dy: any, isMobile: boolean }) => {
  const xTransform = useTransform(dx, [-500, 500], [-10, 10]);
  const yTransform = useTransform(dy, [-500, 500], [10, -10]);

  return (
    <motion.div 
      style={{ x: isMobile ? 0 : xTransform, y: isMobile ? 0 : yTransform }}
      className="absolute bottom-4 left-0 sm:-left-8 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-50 z-20 flex items-center gap-3 sm:gap-4"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-400 rounded-full blur opacity-40 animate-pulse"></div>
        <CheckCircle2 size={isMobile ? 24 : 32} className="text-green-500 relative z-10 bg-white rounded-full" />
      </div>
      <div>
        <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">50+</div>
        <div className="text-[8px] sm:text-[10px] text-slate-500 font-bold uppercase tracking-widest">Partner Schools</div>
      </div>
    </motion.div>
  );
};

const SchoolJoinPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);
  const rotateX = useTransform(dy, [-400, 400], [12, -12]);
  const rotateY = useTransform(dx, [-400, 400], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
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
    <main className="min-h-screen bg-[#FAFAFA] selection:bg-brand-500 selection:text-white pt-16 font-sans overflow-x-hidden">
      
      {/* =========================================
          SECTION 1: HERO (UNTOUCHED LOGIC)
      ========================================= */}
      <section 
        className="relative pt-10 pb-16 md:pb-24 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute inset-0 -z-10 bg-[#FAFAFA]">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200/40 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-200/40 rounded-full blur-[120px] mix-blend-multiply" />
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex-1 space-y-6 z-20">
              <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-xs font-bold text-slate-800 uppercase tracking-widest">Institutional Partnership</span>
              </motion.div>
              
              <motion.h1 variants={fadeUpVariant} className="text-4xl sm:text-5xl lg:text-[72px] font-extrabold text-slate-900 leading-[1.05] tracking-tight text-center lg:text-left">
                Empower Your <br/> Students with <span className="text-orange-500 relative">
                  Elite Mentorship
                  <svg className="absolute w-full h-3 -bottom-2 left-0 text-orange-200 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                  </svg>
                </span>
              </motion.h1>
              
              <motion.p variants={fadeUpVariant} className="text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed font-medium text-center lg:text-left mx-auto lg:mx-0">
                Partner with TopperMantra to bring India's top 1% achievers directly to your campus. Bridge the gap between academic theory and competitive success.
              </motion.p>
              
              <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 pt-4">
                <button className="w-full sm:w-auto relative group overflow-hidden rounded-full bg-slate-900 text-white px-8 py-4 font-semibold shadow-2xl transition-all hover:shadow-[0_0_40px_rgba(15,23,42,0.3)] hover:-translate-y-1">
                  <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Partner With Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button className="w-full sm:w-auto rounded-full bg-white text-slate-700 px-8 py-4 font-semibold border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                  Learn More
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="flex-1 relative flex justify-center items-center h-[350px] sm:h-[450px] lg:h-[550px] perspective-1000 w-full">
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div style={{ rotateX, rotateY }} className="relative z-10 w-40 h-40 sm:w-56 sm:h-56 bg-white/80 backdrop-blur-xl rounded-[32px] sm:rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex items-center justify-center border border-white/50 cursor-pointer" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                  <div className="absolute inset-0 bg-orange-400/20 rounded-[32px] sm:rounded-[40px] blur-3xl animate-pulse" />
                  <div className="bg-gradient-to-br from-slate-800 to-slate-950 w-24 h-24 sm:w-36 sm:h-36 rounded-[20px] sm:rounded-[28px] flex items-center justify-center text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
                    <School size={isMobile ? 40 : 64} strokeWidth={1.5} className="relative z-10 text-orange-100" />
                  </div>
                </motion.div>
                {[
                  { icon: GraduationCap, label: "Mentorship", color: "text-orange-500", bg: "bg-orange-50", x: -180, y: -140 },
                  { icon: Sparkles, label: "Success", color: "text-slate-900", bg: "bg-slate-50", x: 160, y: -100 },
                  { icon: Users, label: "Growth", color: "text-blue-500", bg: "bg-blue-50", x: 60, y: 160 },
                  { icon: LineChart, label: "Results", color: "text-emerald-500", bg: "bg-emerald-50", x: -160, y: 120 }
                ].map((item, idx) => (
                  <OrbitingIcon key={idx} item={item} idx={idx} dx={dx} dy={dy} isMobile={isMobile} />
                ))}
                <InteractiveBadge dx={dx} dy={dy} isMobile={isMobile} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: WHAT WE PROVIDE (NEW - BENTO GRID)
      ========================================= */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-16">
            <motion.div variants={fadeUpVariant}>
              <span className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-orange-100 bg-orange-50">What You Get</span>
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className="mt-6 text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              A Complete Ecosystem for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Your School</span>
            </motion.h2>
            <motion.p variants={fadeUpVariant} className="mt-5 text-lg text-slate-500 max-w-2xl mx-auto font-medium">
              We don't just guide students; we empower your institution with technology, data, and elite human capital.
            </motion.p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Big Feature Card */}
            <motion.div variants={fadeUpVariant} className="lg:col-span-2 p-10 md:p-12 rounded-[2rem] bg-slate-50 border border-slate-100 relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl group-hover:bg-orange-200/50 transition-colors" />
              <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 relative z-10">1-on-1 Personalized Mentorship</h3>
              <p className="text-slate-500 text-lg leading-relaxed max-w-lg relative z-10">
                Every student is mapped to an elite mentor (IIT/AIIMS toppers). They receive customized study plans, weekly check-ins, and strategy sessions that align perfectly with your school's curriculum.
              </p>
            </motion.div>

            {/* Feature Card 2 */}
            <motion.div variants={fadeUpVariant} className="p-10 md:p-12 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden group hover:shadow-2xl transition-all">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/30 rounded-full blur-2xl" />
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform">
                <LayoutDashboard size={32} className="text-blue-400"/>
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Institutional Dashboard</h3>
              <p className="text-slate-300 leading-relaxed relative z-10 font-light">
                Get a bird's-eye view of your entire school's performance. Track mentor-mentee engagement, identify weak subjects, and download monthly progression reports.
              </p>
            </motion.div>

            {/* Feature Card 3 */}
            <motion.div variants={fadeUpVariant} className="p-10 rounded-[2rem] bg-white border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:border-blue-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Live Masterclasses</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                Exclusive weekend seminars by national-level achievers on exam psychology, time management, and handling academic pressure.
              </p>
            </motion.div>

            {/* Feature Card 4 */}
            <motion.div variants={fadeUpVariant} className="p-10 rounded-[2rem] bg-white border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:border-emerald-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Doubt Resolution Engine</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                24/7 access to our premium doubt-solving network. Students are never stuck on a concept, accelerating their learning curve outside school hours.
              </p>
            </motion.div>

            {/* Feature Card 5 */}
            <motion.div variants={fadeUpVariant} className="p-10 rounded-[2rem] bg-white border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:border-purple-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Brand Elevation</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                Position your school as a forward-thinking institution. Use our partnership to boost admissions and show parents you invest in elite resources.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: STUDENT IMPACT (NEW - THE JOURNEY)
      ========================================= */}
      <section className="py-20 md:py-32 bg-[#FAFAFA] relative overflow-hidden border-t border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex-1 w-full">
              <motion.div variants={fadeUpVariant}>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-blue-100 bg-blue-50">Student Impact</span>
              </motion.div>
              <motion.h2 variants={fadeUpVariant} className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-8">
                How We Transform <br/> Your Students
              </motion.h2>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.1rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                {[
                  { title: "Academic Clarity", desc: "No more confusion about syllabus weightage. Students get clear, actionable roadmaps.", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-100" },
                  { title: "Psychological Resilience", desc: "Mentors help students manage exam anxiety, handle failures, and build a winning mindset.", icon: BrainCircuit, color: "text-orange-500", bg: "bg-orange-100" },
                  { title: "Higher Success Rates", desc: "Consistent guidance translates directly into better board results and higher competitive exam ranks.", icon: BarChart3, color: "text-emerald-500", bg: "bg-emerald-100" }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUpVariant} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FAFAFA] bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                      <div className={`w-3 h-3 rounded-full ${item.bg}`} />
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <item.icon size={20} className={item.color} />
                        <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="flex-1 w-full relative"
            >
              <div className="aspect-square max-w-[500px] mx-auto relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full blur-[80px] opacity-50" />
                <img src="/student-impact.png" alt="Student Impact" className="w-full h-full object-contain relative z-10" 
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center bg-white/50 backdrop-blur-md border border-slate-200 rounded-[3rem] shadow-xl"><div class="text-6xl mb-4">🎓</div><div class="text-2xl font-bold text-slate-900">Student Success</div></div>`;
                  }}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: WHY PARTNER WITH US (UPGRADED)
      ========================================= */}
      <section className="py-20 md:py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.1),transparent_40%)]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">The TopperMantra Advantage</h2>
            <p className="mt-5 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-light">
              We provide more than just mentorship; we offer a complete, data-backed ecosystem for institutional excellence.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: ShieldCheck, title: "Proven Methodology", desc: "Trusted by 50+ leading schools. Our framework focuses on measurable academic outcomes and concept retention.", color: "text-orange-400", bg: "bg-orange-400/10" },
              { icon: LineChart, title: "Data-Driven Approach", desc: "No more guesswork. Get precise analytics on every student's weak points and track their improvement trajectory.", color: "text-blue-400", bg: "bg-blue-400/10" },
              { icon: Target, title: "Zero Operational Overhead", desc: "We manage the mentors, the tech, and the scheduling. Your teachers focus on teaching; we handle the personalization.", color: "text-emerald-400", bg: "bg-emerald-400/10" }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group relative p-8 sm:p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${feature.color} ${feature.bg} mb-8 border border-white/5 group-hover:scale-110 transition-transform`}>
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: PARTNERSHIP FORM (PREMIUM)
      ========================================= */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="bg-white rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col lg:flex-row"
          >
            {/* Form Left Side (Branding Info) */}
            <div className="lg:w-2/5 bg-slate-900 p-10 lg:p-14 flex flex-col justify-between text-white relative overflow-hidden">
              <div className="absolute top-[-20%] left-[-20%] w-64 h-64 bg-brand-500 rounded-full blur-[100px] opacity-30" />
              
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Let's Build the Future</h2>
                <p className="text-slate-400 text-base leading-relaxed font-light">
                  Fill out the form and our institutional relations head will reach out to you within <span className="text-brand-400 font-semibold">24 hours</span>.
                </p>
              </div>

              <div className="mt-16 space-y-8 relative z-10">
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-brand-500 group-hover:border-brand-500 transition-all"><Mail size={20} className="text-white"/></div>
                  <div><p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Email Us</p><p className="font-semibold text-white tracking-wide">partner@toppermantra.com</p></div>
                </div>
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-brand-500 group-hover:border-brand-500 transition-all"><Phone size={20} className="text-white"/></div>
                  <div><p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Call Us</p><p className="font-semibold text-white tracking-wide">+91 98765 43210</p></div>
                </div>
              </div>
            </div>

            {/* Form Right Side (Inputs) */}
            <div className="lg:w-3/5 p-10 lg:p-14 bg-white">
              <form className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">School Name</label>
                    <input type="text" placeholder="Enter school name" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none placeholder:text-slate-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Contact Person</label>
                    <input type="text" placeholder="Your Name" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none placeholder:text-slate-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" placeholder="school@example.com" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none placeholder:text-slate-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none placeholder:text-slate-300" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">How can we help?</label>
                  <textarea 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none min-h-[120px] resize-none placeholder:text-slate-300"
                    placeholder="Briefly describe your student count and requirements..."
                  />
                </div>

                <button type="button" className="w-full group relative overflow-hidden rounded-2xl bg-slate-900 text-white py-5 font-bold text-sm tracking-wide shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="absolute inset-0 bg-brand-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Submit Partnership Request
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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