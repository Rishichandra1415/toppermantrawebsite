"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { 
  Target, 
  Users, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  GraduationCap,
  Globe,
  Award,
  Zap,
  Cpu,
  Rocket,
  LayoutDashboard,
  FileBarChart
} from "lucide-react";

const AboutPage = () => {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans pt-16">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.2]" />
          <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-brand-50/30 blur-[120px] rounded-full -mr-[25%]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.div 
                initial="hidden" animate="visible" variants={fadeUpVariant}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-6 shadow-sm"
              >
                <Sparkles size={12} />
                Revolutionizing Education
              </motion.div>
              <motion.h1 
                initial="hidden" animate="visible" variants={fadeUpVariant}
                className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6"
              >
                Connecting Ambition with <span className="text-brand-500">Proven Results</span>
              </motion.h1>
              <motion.p 
                initial="hidden" animate="visible" variants={fadeUpVariant}
                className="text-lg text-slate-600 leading-relaxed font-medium mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                TopperMantra is an independent student community platform dedicated to peer-learning, academic mentorship, and holistic student development. We bridge the gap between hard work and smart work.
              </motion.p>
              
              <motion.div 
                initial="hidden" animate="visible" variants={fadeUpVariant}
                className="flex flex-wrap justify-center lg:justify-start gap-4"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">1-to-1 Mentorship</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Verified IIT/AIIMS Toppers</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 relative"
            >
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border-[8px] border-white">
                <img 
                  src="/mentorship_hero_premium.png" 
                  alt="TopperMantra Mentorship"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- THE THREE PILLARS --- */}
      <section className="py-20 bg-[#FAFAFA] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Our Three Pillars of Excellence</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg">
              We don't just teach; we transform students into winners through a structured development model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: GraduationCap, 
                title: "Academic Mentorship", 
                desc: "Get 1-on-1 personalized guidance from verified toppers of IITs, AIIMS, and national exams. Learn the strategies that actually work.",
                color: "brand"
              },
              { 
                icon: Cpu, 
                title: "Hackathon & Innovation", 
                desc: "Master the art of problem-solving. We prepare you for national and international hackathons with guided innovation training.",
                color: "blue"
              },
              { 
                icon: Rocket, 
                title: "Entrepreneurship", 
                desc: "Turn your ideas into reality. Our founder-mentors help you progress from ideation to developing your first MVP.",
                color: "slate"
              }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
                className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${
                  pillar.color === 'brand' ? 'bg-brand-50 text-brand-600' : 
                  pillar.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-900'
                }`}>
                  <pillar.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMMUNITY SECTION --- */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="flex-1">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-6"
              >
                <Users size={12} />
                Student Ecosystem
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">A Global Community of <span className="text-brand-500">Learners</span></h2>
              
              <div className="space-y-6">
                {[
                  { title: "Smart Feed", desc: "Discover study tips, real-life topper experiences, and actionable insights from fellow learners daily.", icon: Zap },
                  { title: "Study Groups", desc: "Join topic-based groups to collaborate, exchange strategies, and maintain consistency in your preparation.", icon: Users },
                  { title: "Peer-to-Peer Chat", desc: "Privately connect with mentors and high-performing peers to share notes and stay motivated.", icon: MessageCircle }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
                    className="flex gap-5 group"
                  >
                    <div className="mt-1 w-10 h-10 shrink-0 rounded-lg bg-slate-50 flex items-center justify-center text-brand-600 group-hover:bg-brand-500 group-hover:text-white transition-all">
                      <feature.icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-slate-500 text-sm font-medium">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-slate-50">
                <img src="/toppermantra_community.png" alt="TopperMantra Community" className="w-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- INSTITUTIONAL MASTERY --- */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden rounded-[4rem] mx-6 mb-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.1),transparent_40%)]" />
        <div className="max-w-7xl mx-auto px-10 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Empowering Schools & Coaching</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
              We provide a premium digital-hybrid ecosystem for institutions to track and supercharge student performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: LayoutDashboard, title: "Custom Dashboards", desc: "Real-time visibility into student engagement and progress." },
              { icon: FileBarChart, title: "Monthly Reports", desc: "Detailed performance analysis for every single batch." },
              { icon: ShieldCheck, title: "Quality Control", desc: "Verified content and mentor interaction monitoring." },
              { icon: Award, title: "Excellence Awards", desc: "Recognizing and incentivizing top institutional performers." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all text-center">
                <div className="w-12 h-12 bg-brand-500/20 rounded-xl flex items-center justify-center text-brand-500 mx-auto mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-8"
          >
            Ready to join the <span className="text-brand-500">elite?</span>
          </motion.h2>
          <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto font-medium">
            Don't just work hard. Work smart with the guidance of those who have already conquered the summit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-brand-500 text-white px-12 py-5 rounded-full font-extrabold text-lg hover:bg-brand-600 transition-all shadow-2xl shadow-brand-500/40 transform hover:-translate-y-1">
              Join the Community
            </button>
            <button className="w-full sm:w-auto bg-slate-900 text-white px-12 py-5 rounded-full font-extrabold text-lg hover:bg-slate-800 transition-all shadow-2xl transform hover:-translate-y-1">
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};

// Simple MessageCircle icon replacement
const MessageCircle = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
  </svg>
);

export default AboutPage;