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
  ChevronDown
} from "lucide-react";

const ContactPage = () => {
  const [activeForm, setActiveForm] = useState<"student" | "school">("student");
  const [openFaq, setOpenFaq] = useState<number | null>(0); // 0 means first FAQ is open by default

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const formVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    enter: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3, ease: "easeIn" } }
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
    <main className="min-h-screen bg-white font-sans pt-16 selection:bg-brand-100 selection:text-brand-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-16 overflow-hidden bg-slate-50/30">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.3]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUpVariant}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-6 shadow-sm"
          >
            <MessageCircle size={12} className="text-brand-500" />
            Contact Us
          </motion.div>
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUpVariant}
            className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight mb-4 font-serif"
          >
            Let's Start a <span className="text-gradient">Conversation</span>
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUpVariant}
            className="text-lg text-slate-500 font-medium max-w-2xl mx-auto"
          >
            Whether you're a student looking for guidance or an institution seeking partnership, our team is ready to assist you.
          </motion.p>
        </div>
      </section>

      {/* --- CONTACT CONTENT --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left side: Info Cards */}
            <div className="lg:col-span-5 space-y-6 sticky top-24">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</h3>
                    <p className="text-xl font-bold text-slate-900">hello@toppermantra.com</p>
                    <p className="text-slate-500 text-sm mt-1">We typically reply within 4 hours.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</h3>
                    <p className="text-xl font-bold text-slate-900">+91 98765 43210</p>
                    <p className="text-slate-500 text-sm mt-1">Mon-Sat, 10am - 7pm IST.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 group-hover:scale-110 transition-transform">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Working Hours</h3>
                    <p className="text-xl font-bold text-slate-900">24/7 Digital Support</p>
                    <p className="text-slate-500 text-sm mt-1">Our mentors are active across timezones.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]"
              >
                {/* Form Toggle Switch */}
                <div className="flex p-1.5 bg-slate-100/80 rounded-2xl w-fit mx-auto mb-10">
                  <button 
                    onClick={() => setActiveForm("student")}
                    className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-colors z-10 ${activeForm === "student" ? "text-brand-600" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    {activeForm === "student" && (
                      <motion.div layoutId="activeTab" className="absolute inset-0 bg-white shadow-sm rounded-xl -z-10" />
                    )}
                    <GraduationCap size={18} />
                    I am a Student
                  </button>
                  <button 
                    onClick={() => setActiveForm("school")}
                    className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-colors z-10 ${activeForm === "school" ? "text-brand-600" : "text-slate-500 hover:text-slate-700"}`}
                  >
                    {activeForm === "school" && (
                      <motion.div layoutId="activeTab" className="absolute inset-0 bg-white shadow-sm rounded-xl -z-10" />
                    )}
                    <Building size={18} />
                    I represent a School
                  </button>
                </div>

                {/* Animated Form Container */}
                <div className="relative min-h-[400px]">
                  <AnimatePresence mode="wait">
                    
                    {/* --- STUDENT FORM --- */}
                    {activeForm === "student" && (
                      <motion.form 
                        key="student-form"
                        variants={formVariants}
                        initial="hidden" animate="enter" exit="exit"
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                            <input type="text" placeholder="Rahul Sharma" className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-slate-900 text-sm focus:border-brand-500/20 focus:ring-4 focus:ring-brand-500/10 focus:bg-white transition-all outline-none" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                            <input type="email" placeholder="rahul@example.com" className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-slate-900 text-sm focus:border-brand-500/20 focus:ring-4 focus:ring-brand-500/10 focus:bg-white transition-all outline-none" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Current Class / Target Exam</label>
                          <input type="text" placeholder="e.g. Class 12 / JEE Mains" className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-slate-900 text-sm focus:border-brand-500/20 focus:ring-4 focus:ring-brand-500/10 focus:bg-white transition-all outline-none" />
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">How can we help you?</label>
                          <textarea placeholder="I am looking for mentorship in..." className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-slate-900 text-sm focus:border-brand-500/20 focus:ring-4 focus:ring-brand-500/10 focus:bg-white transition-all outline-none min-h-[120px] resize-none" />
                        </div>

                        <button type="button" className="w-full group relative overflow-hidden rounded-2xl bg-slate-900 text-white py-4 font-bold shadow-lg transition-all hover:bg-brand-600 hover:-translate-y-0.5">
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            Request Mentorship
                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </span>
                        </button>
                      </motion.form>
                    )}

                    {/* --- SCHOOL FORM --- */}
                    {activeForm === "school" && (
                      <motion.form 
                        key="school-form"
                        variants={formVariants}
                        initial="hidden" animate="enter" exit="exit"
                        className="space-y-6"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">School/Institute Name</label>
                            <input type="text" placeholder="Delhi Public School" className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-slate-900 text-sm focus:border-brand-500/20 focus:ring-4 focus:ring-brand-500/10 focus:bg-white transition-all outline-none" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Contact Person</label>
                            <input type="text" placeholder="Principal / Coordinator Name" className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-slate-900 text-sm focus:border-brand-500/20 focus:ring-4 focus:ring-brand-500/10 focus:bg-white transition-all outline-none" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Official Email</label>
                            <input type="email" placeholder="admin@school.com" className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-slate-900 text-sm focus:border-brand-500/20 focus:ring-4 focus:ring-brand-500/10 focus:bg-white transition-all outline-none" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                            <input type="tel" placeholder="+91 00000 00000" className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-slate-900 text-sm focus:border-brand-500/20 focus:ring-4 focus:ring-brand-500/10 focus:bg-white transition-all outline-none" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Partnership Inquiry Details</label>
                          <textarea placeholder="Tell us about your institution's requirements..." className="w-full px-5 py-4 bg-slate-50 border border-transparent rounded-2xl text-slate-900 text-sm focus:border-brand-500/20 focus:ring-4 focus:ring-brand-500/10 focus:bg-white transition-all outline-none min-h-[120px] resize-none" />
                        </div>

                        <button type="button" className="w-full group relative overflow-hidden rounded-2xl bg-slate-900 text-white py-4 font-bold shadow-lg transition-all hover:bg-brand-600 hover:-translate-y-0.5">
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            Submit Inquiry
                            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </span>
                        </button>
                      </motion.form>
                    )}

                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- PREMIUM FAQ SECTION --- */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 font-serif">Frequently Asked Questions</h2>
            <p className="text-slate-500 font-medium">Everything you need to know about our services and process.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              
              return (
                <motion.div 
                  key={index}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? "border-brand-200 shadow-md shadow-brand-500/5" : "border-slate-100 shadow-sm hover:border-slate-200"}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                  >
                    <h4 className={`font-bold pr-6 text-base md:text-lg transition-colors ${isOpen ? "text-brand-600" : "text-slate-800"}`}>
                      {faq.q}
                    </h4>
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-brand-50 text-brand-600" : "bg-slate-50 text-slate-400"}`}
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
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 md:pb-8 px-6 md:px-8 pt-0 text-slate-500 text-sm md:text-base leading-relaxed font-medium">
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