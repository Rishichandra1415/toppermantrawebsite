"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Clock,
  Sparkles,
  ArrowRight
} from "lucide-react";

const ContactPage = () => {
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans pt-16">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-12 overflow-hidden bg-slate-50/50">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.2]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial="hidden" animate="visible" variants={fadeUpVariant}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-brand-600 uppercase tracking-widest mb-6 shadow-sm"
          >
            <MessageCircle size={12} />
            Contact Us
          </motion.div>
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUpVariant}
            className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-4"
          >
            Let's Start a <span className="text-brand-500">Conversation</span>
          </motion.h1>
          <motion.p 
            initial="hidden" animate="visible" variants={fadeUpVariant}
            className="text-lg text-slate-500 font-medium max-w-2xl mx-auto"
          >
            Have questions about our mentorship programs? Our team of experts is here to help you navigate your academic journey.
          </motion.p>
        </div>
      </section>

      {/* --- CONTACT CONTENT --- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left side: Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</h3>
                    <p className="text-xl font-bold text-slate-900">support@toppermantra.com</p>
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
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Call Us</h3>
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
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Working Hours</h3>
                    <p className="text-xl font-bold text-slate-900">24/7 Digital Support</p>
                    <p className="text-slate-500 text-sm mt-1">Our mentors are active across timezones.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side: Contact Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.05)]"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">Send us a message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Subject</label>
                    <select className="w-full px-6 py-4 bg-slate-50 border-none rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none appearance-none cursor-pointer">
                      <option>Academic Mentorship Inquiry</option>
                      <option>Institutional Partnership</option>
                      <option>Technical Support</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                    <textarea placeholder="Tell us how we can help..." className="w-full px-6 py-5 bg-slate-50 border-none rounded-2xl text-slate-900 text-sm focus:ring-2 focus:ring-brand-500/20 focus:bg-white transition-all outline-none min-h-[150px] resize-none" />
                  </div>

                  <button className="w-full group relative overflow-hidden rounded-2xl bg-slate-900 text-white py-5 font-bold shadow-xl transition-all hover:bg-brand-600 hover:-translate-y-1">
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </button>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FAQ PREVIEW --- */}
      <section className="py-16 bg-[#FAFAFA] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Common Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { q: "How soon can I start?", a: "Mentorship sessions can typically be scheduled within 24 hours of registration." },
              { q: "Can I choose my mentor?", a: "Yes! You can browse our expert network and select a mentor that fits your goals." },
              { q: "Do you offer group sessions?", a: "We primarily focus on 1-on-1 sessions, but group masterclasses are available." }
            ].map((faq, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white border border-slate-100 text-left shadow-sm hover:shadow-md transition-all">
                <h4 className="font-bold text-brand-600 mb-3 text-lg">{faq.q}</h4>
                <p className="text-slate-600 text-base leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default ContactPage;
