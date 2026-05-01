"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { 
  Mail, 
  Phone, 
  Send, 
  MessageCircle,
  Clock,
  GraduationCap,
  Building,
  ChevronDown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  MapPin
} from "lucide-react";

const ContactPage = () => {
  const [activeForm, setActiveForm] = useState<"student" | "school">("student");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const accent = "#FF6B35";

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const faqs = [
    { 
      q: "How soon can I start with the mentorship?", 
      a: "Mentorship sessions can typically be scheduled within 24 hours of registration. Once you submit the form, our team will immediately reach out to match you with the perfect mentor based on your academic goals." 
    },
    { 
      q: "Do you partner with schools and institutions?", 
      a: "Yes! We run dedicated offline and online workshops for our partner schools. We offer custom bulk enrollment plans and tailored curriculum support to enhance the school's existing academic structure." 
    },
    { 
      q: "Are the sessions 1-on-1 or group based?", 
      a: "We primarily focus on highly personalized 1-on-1 sessions to ensure maximum attention and improvement. However, we also conduct exclusive weekend group masterclasses for broader topics and exam strategies." 
    },
    { 
      q: "What is your refund or cancellation policy?", 
      a: "We believe in the quality of our mentorship. If you are not completely satisfied with your first session, we offer a 100% no-questions-asked refund policy." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAFAF8] font-sans pt-24 selection:bg-[#0D0D0D] selection:text-white">
      <style dangerouslySetInnerHTML={{ __html: `
        .contact-glass {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.04);
        }
        .text-gradient {
          background: linear-gradient(135deg, #FF6B35 0%, #4F46E5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      ` }} />

      {/* --- HERO SECTION --- */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-[0.06] -top-40 -right-20 bg-[#FF6B35]" />
          <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-[0.04] bottom-0 left-0 bg-[#4F46E5]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" animate="visible" variants={staggerContainer}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-black/5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8 shadow-sm">
                <MessageCircle size={12} className="text-[#FF6B35]" />
                Get in Touch
              </motion.div>
              
              <motion.h1 variants={fadeUpVariant} className="premium-h1 text-[#0D0D0D] mb-8">
                Let's Start a <br />
                <span className="relative whitespace-nowrap inline-block mt-2">
                  <span className="text-gradient">Conversation</span>
                  <div
                    className="absolute w-[110%] h-[8px] -bottom-1 -left-[5%] z-0 opacity-30 blur-[0.5px]"
                    style={{ 
                      background: 'linear-gradient(90deg, transparent 0%, #FF6B35 50%, transparent 100%)',
                      transform: 'rotate(-2deg) skewX(-15deg)',
                      borderRadius: '20% 80% 20% 80% / 50%'
                    }}
                  />
                </span>
              </motion.h1>
              
              <motion.p variants={fadeUpVariant} className="premium-p max-w-xl mx-auto lg:mx-0 mb-10">
                Whether you're an ambitious student looking for a mentor or an institution seeking to empower your students, our team is here to help you navigate the path to success.
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
                <motion.div variants={fadeUpVariant} className="contact-glass p-6 rounded-3xl group hover:border-[#FF6B35]/20 transition-all">
                  <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#FF6B35] mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Email Us</div>
                  <div className="text-sm font-black text-[#0D0D0D]">hello@toppermantra.com</div>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="contact-glass p-6 rounded-3xl group hover:border-[#4F46E5]/20 transition-all">
                  <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center text-[#4F46E5] mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <Phone size={18} />
                  </div>
                  <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Call Support</div>
                  <div className="text-sm font-black text-[#0D0D0D]">+91 98765 43210</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Visual Contact Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-black/5 shadow-[0_40px_100px_rgba(0,0,0,0.06)] relative z-10">
                {/* Form Toggle Switch */}
                <div className="flex p-1.5 bg-slate-100/50 rounded-2xl w-fit mx-auto mb-10 border border-black/[0.03]">
                  <button 
                    onClick={() => setActiveForm("student")}
                    className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors z-10 ${activeForm === "student" ? "text-white" : "text-slate-400 hover:text-slate-600"}`}
                  >
                    {activeForm === "student" && (
                      <motion.div layoutId="activeFormTab" className="absolute inset-0 bg-[#0D0D0D] rounded-xl -z-10 shadow-lg" />
                    )}
                    <GraduationCap size={14} /> Student
                  </button>
                  <button 
                    onClick={() => setActiveForm("school")}
                    className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors z-10 ${activeForm === "school" ? "text-white" : "text-slate-400 hover:text-slate-600"}`}
                  >
                    {activeForm === "school" && (
                      <motion.div layoutId="activeFormTab" className="absolute inset-0 bg-[#0D0D0D] rounded-xl -z-10 shadow-lg" />
                    )}
                    <Building size={14} /> School
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {activeForm === "student" ? (
                    <motion.form 
                      key="student"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                          <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-[#0D0D0D] text-sm font-medium focus:bg-white focus:border-[#FF6B35]/20 focus:ring-4 focus:ring-[#FF6B35]/5 transition-all outline-none" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Email</label>
                          <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-[#0D0D0D] text-sm font-medium focus:bg-white focus:border-[#FF6B35]/20 focus:ring-4 focus:ring-[#FF6B35]/5 transition-all outline-none" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Target Exam / Goal</label>
                        <input type="text" placeholder="JEE Mains / NEET / Career" className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-[#0D0D0D] text-sm font-medium focus:bg-white focus:border-[#FF6B35]/20 focus:ring-4 focus:ring-[#FF6B35]/5 transition-all outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                        <textarea placeholder="Tell us how we can help you..." className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-[#0D0D0D] text-sm font-medium focus:bg-white focus:border-[#FF6B35]/20 focus:ring-4 focus:ring-[#FF6B35]/5 transition-all outline-none min-h-[120px] resize-none" />
                      </div>
                      <button className="w-full py-4 rounded-2xl bg-[#0D0D0D] text-white font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#FF6B35] transition-all shadow-xl active:scale-[0.98]">
                        Send Message <ArrowRight size={16} />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.form 
                      key="school"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-5"
                    >
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Institute Name</label>
                        <input type="text" placeholder="DPS / Heritage / Private Coachings" className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-[#0D0D0D] text-sm font-medium focus:bg-white focus:border-[#4F46E5]/20 focus:ring-4 focus:ring-[#4F46E5]/5 transition-all outline-none" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Official Email</label>
                          <input type="email" placeholder="admin@institute.com" className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-[#0D0D0D] text-sm font-medium focus:bg-white focus:border-[#4F46E5]/20 focus:ring-4 focus:ring-[#4F46E5]/5 transition-all outline-none" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                          <input type="tel" placeholder="+91 00000 00000" className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-[#0D0D0D] text-sm font-medium focus:bg-white focus:border-[#4F46E5]/20 focus:ring-4 focus:ring-[#4F46E5]/5 transition-all outline-none" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest ml-1">Inquiry Details</label>
                        <textarea placeholder="Tell us about your requirements..." className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-[#0D0D0D] text-sm font-medium focus:bg-white focus:border-[#4F46E5]/20 focus:ring-4 focus:ring-[#4F46E5]/5 transition-all outline-none min-h-[120px] resize-none" />
                      </div>
                      <button className="w-full py-4 rounded-2xl bg-[#0D0D0D] text-white font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#4F46E5] transition-all shadow-xl active:scale-[0.98]">
                        Submit Inquiry <Send size={16} />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* Decorative background elements for form */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#FF6B35]/10 blur-2xl rounded-full animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#4F46E5]/10 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUpVariant} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-black/5 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">
              <Sparkles size={12} className="text-amber-400" />
              Support Center
            </motion.div>
            <motion.h2 variants={fadeUpVariant} className="premium-h2 text-[#0D0D0D] mb-4">Common Questions</motion.h2>
            <motion.p variants={fadeUpVariant} className="premium-p">Everything you need to know about our mentorship process.</motion.p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div 
                  key={index}
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
                  className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${isOpen ? "bg-[#FAF9F6] border-[#0D0D0D]/5 shadow-sm" : "bg-white border-black/[0.03] hover:border-black/[0.08]"}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-8 text-left outline-none"
                  >
                    <span className={`text-sm md:text-base font-black transition-colors ${isOpen ? "text-[#0D0D0D]" : "text-slate-600"}`}>
                      {faq.q}
                    </span>
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-[#0D0D0D] text-white" : "bg-slate-50 text-slate-400"}`}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-8 pb-8 text-slate-500 text-xs md:text-sm leading-relaxed font-medium max-w-2xl">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      
    </main>
  );
};

export default ContactPage;
