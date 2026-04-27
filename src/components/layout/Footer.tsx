"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  X, 
  Globe, 
  Users, 
  ArrowUpRight,
  Download,
  ShieldCheck,
  Zap,
  Star,
  GraduationCap,
  Sparkles,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: "Academic Mentorship", href: "/mentorship" },
      { name: "Research Papers", href: "#" },
      { name: "Topper Blueprints", href: "#" },
      { name: "Global Rankings", href: "/results" }
    ],
    institution: [
      { name: "Partner Schools", href: "/join/school" },
      { name: "University Programs", href: "#" },
      { name: "Corporate CSR", href: "#" },
      { name: "Institutional Dashboard", href: "#" }
    ],
    student: [
      { name: "Join Circle", href: "/join/student" },
      { name: "Student Community", href: "#" },
      { name: "Scholarships", href: "#" },
      { name: "Mobile App", href: "#download" }
    ]
  };

  return (
    <footer className="relative bg-[#020617] text-white overflow-hidden pt-32 pb-12 font-sans">
      {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
        
        {/* Artistic Gradients */}
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
     

        {/* --- MAIN LINKS SECTION --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 py-24">
          
          {/* Logo Column */}
          <div className="col-span-2 space-y-8">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-brand-500/50 transition-colors shadow-2xl">
                  <Star size={24} fill="#ff5b2e" className="text-brand-500 animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black tracking-tighter uppercase leading-none">Topper<span className="text-brand-500">Mantra</span></span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-500 mt-1">Elite Mentorship</span>
                </div>
              </div>
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-[280px] font-medium">
              Bridging the gap between academic theory and competitive success through India's top 1% rankers.
            </p>

            <div className="flex items-center gap-3">
              {[
                { icon: Users, href: "#" },
                { icon: X, href: "#" },
                { icon: Globe, href: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href}
                  className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-brand-500 hover:text-white hover:border-brand-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-500">Platform</h4>
            <ul className="space-y-4">
              {footerLinks.platform.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors font-medium text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-500">Institution</h4>
            <ul className="space-y-4">
              {footerLinks.institution.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors font-medium text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-500">Community</h4>
            <ul className="space-y-4">
              {footerLinks.student.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors font-medium text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-500">Support</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-500/10 transition-colors">
                  <Mail size={16} className="text-brand-500" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Email Us</p>
                  <p className="text-sm font-bold text-slate-200">hello@toppermantra.com</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-500/10 transition-colors">
                  <Phone size={16} className="text-brand-500" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Call Us</p>
                  <p className="text-sm font-bold text-slate-200">+91 98765 43210</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-10">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
              © {currentYear} TopperMantra
            </p>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/privacy" className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Privacy</Link>
              <Link href="/terms" className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Terms</Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
             <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck size={14} className="text-brand-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Encrypted</span>
             </div>
             <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <GraduationCap size={14} className="text-brand-500" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Certified Mentors</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
