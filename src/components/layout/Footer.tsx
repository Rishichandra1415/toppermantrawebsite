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
    <footer className="relative bg-[#020617] text-white overflow-hidden pt-10 pb-10 font-sans">
      {/* --- PREMIUM BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* --- MAIN LINKS SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-10 border-b border-white/5">

          {/* Column 1: Brand & App (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-brand-500/50 transition-colors shadow-2xl">
                  <Star size={20} fill="#ff5b2e" className="text-brand-500 animate-pulse" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tighter uppercase leading-none">Topper<span className="text-brand-500">Mantra</span></span>
                  <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-slate-500 mt-1">Elite Mentorship</span>
                </div>
              </div>
            </Link>

            <p className="text-slate-400 text-[13px] leading-relaxed max-w-[320px] font-medium">
              Bridging the gap between academic theory and competitive success through India&apos;s top 1% rankers.
            </p>

            {/* Bottom Trust Row */}
            <div className="trust-badge flex flex-wrap items-center justify-center lg:justify-start gap-4 border border-white/5 bg-white/5 rounded-full px-5 py-2 backdrop-blur-md mb-6">
              <div className="flex items-center gap-2.5 border-r border-white/10 pr-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <img key={i} src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`} className="w-6 h-6 rounded-full border border-slate-900 bg-slate-800" alt="user" />
                  ))}
                  <div className="w-6 h-6 rounded-full border border-slate-900 bg-brand-500 flex items-center justify-center text-[7px] font-bold text-white">50K+</div>
                </div>
                <div className="text-left">
                  <p className="text-white text-[11px] font-semibold">Trusted by 50,000+</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <div className="text-left">
                  <p className="text-white text-[11px] font-semibold">4.8/5 Rating</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.support.toppers.mantra&pcampaignid=web_share&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-500 hover:bg-brand-600 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-brand-500/20"
              >
                <Download size={16} />
                Download App
              </a>
              <div className="flex items-center gap-3">
                {[
                  { icon: Users, href: "#" },
                  { icon: X, href: "#" },
                  { icon: Globe, href: "#" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-all duration-300"
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>



          {/* Column 2, 3, 4: Quick Links (5 cols total) */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-6">
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500">Platform</h4>
              <ul className="space-y-3">
                {footerLinks.platform.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors font-medium text-[13px]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500">Links</h4>
              <ul className="space-y-3">
                {footerLinks.institution.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors font-medium text-[13px]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500">Community</h4>
              <ul className="space-y-3">
                {footerLinks.student.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-slate-400 hover:text-white transition-colors font-medium text-[13px]">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 5: Map & Address (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500">Find Us</h4>
            <div className="space-y-4">
              <div className="relative w-full h-24 rounded-xl overflow-hidden grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.31057410065!2d77.6366533!3d12.9519543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae140c8853b755%3A0x6739665671182289!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714316000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin size={14} className="text-brand-500 shrink-0" />
                  <span className="text-xs font-medium">TopperMantra HQ, Level 5, Tech Park, Indiranagar, Bangalore - 560038</span>
                </div>
                <div className="flex flex-col gap-4 py-3 border-t border-white/5">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Mail size={14} className="text-brand-500 shrink-0" />
                    <span className="text-xs font-bold">hello@toppermantra.com</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Phone size={14} className="text-brand-500 shrink-0" />
                    <span className="text-xs font-bold whitespace-nowrap">+91 98765 43210</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-8">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              © {currentYear} TopperMantra
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-slate-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy</Link>
              <Link href="/terms" className="text-slate-500 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Terms</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <ShieldCheck size={12} className="text-brand-500" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Encrypted</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
              <GraduationCap size={12} className="text-brand-500" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
