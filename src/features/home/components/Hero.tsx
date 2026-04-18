// // "use client";

// // import React, { useRef } from "react";
// // import Image from "next/image";
// // import { gsap } from "gsap";
// // import { useGSAP } from "@gsap/react";
// // import { ArrowRight, Star, Sparkles } from "lucide-react";
// // import Button from "@/components/common/Button";

// // // Mock data for the "Topper Nodes"
// // const TOPPERS = [
// //   { id: 1, name: "Arjun M.", rank: "AIR 12", mantra: "Consistency is better than perfection.", x: "15%", y: "20%" },
// //   { id: 2, name: "Priya S.", rank: "AIR 45", mantra: "Master the basics, the rest will follow.", x: "75%", y: "15%" },
// //   { id: 3, name: "Rahul K.", rank: "AIR 8", mantra: "Your only limit is your mind.", x: "85%", y: "60%" },
// //   { id: 4, name: "Sanya V.", rank: "AIR 102", mantra: "Discipline is the bridge between goals.", x: "10%", y: "70%" },
// //   { id: 5, name: "Ishaan T.", rank: "AIR 24", mantra: "Focus on the process, not the result.", x: "50%", y: "85%" },
// // ];

// // const Hero = () => {
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const titleRef = useRef<HTMLHeadingElement>(null);
// //   const constellationRef = useRef<HTMLDivElement>(null);

// //   useGSAP(() => {
// //     const ctx = gsap.context(() => {
// //       // 1. Entrance Stagger for Text
// //       const tl = gsap.timeline();
// //       tl.from(".hero-badge", { opacity: 0, scale: 0.8, duration: 0.8, ease: "back.out(1.7)" })
// //         .from(".hero-title span", {
// //           y: 40,
// //           opacity: 0,
// //           stagger: 0.1,
// //           duration: 0.8,
// //           ease: "power4.out",
// //         }, "-=0.4")
// //         .from(".hero-desc", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
// //         .from(".hero-ctas", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6");

// //       // 2. Floating Animation for Topper Nodes
// //       gsap.to(".topper-node", {
// //         y: "random(-15, 15)",
// //         x: "random(-10, 10)",
// //         duration: "random(3, 5)",
// //         repeat: -1,
// //         yoyo: true,
// //         ease: "sine.inOut",
// //         stagger: {
// //           each: 0.5,
// //           from: "random",
// //         },
// //       });

// //       // 3. Mouse Move Interaction (Parallax)
// //       const handleMouseMove = (e: MouseEvent) => {
// //         const { clientX, clientY } = e;
// //         const xPos = (clientX / window.innerWidth - 0.5) * 30;
// //         const yPos = (clientY / window.innerHeight - 0.5) * 30;

// //         gsap.to(".parallax-bg", {
// //           x: xPos * 0.5,
// //           y: yPos * 0.5,
// //           duration: 1,
// //           ease: "power2.out",
// //         });

// //         gsap.to(".constellation-layer", {
// //           x: -xPos,
// //           y: -yPos,
// //           duration: 1.5,
// //           ease: "power3.out",
// //         });
// //       };

// //       window.addEventListener("mousemove", handleMouseMove);
// //       return () => window.removeEventListener("mousemove", handleMouseMove);
// //     }, containerRef);
    
// //     return () => ctx.revert();
// //   }, { scope: containerRef });

// //   return (
// //     <section 
// //       ref={containerRef}
// //       // FIXED: min-h-[100dvh] ensures it fits exact screen height. pt-[120px] prevents navbar overlap
// //       className="relative min-h-[100dvh] flex items-center justify-center pt-[100px] lg:pt-[80px] pb-10 overflow-hidden bg-white font-sans"
// //     >
// //       {/* Background Decorative Elements */}
// //       <div className="absolute inset-0 z-0 pointer-events-none">
// //         <div className="parallax-bg absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-50 rounded-full blur-[100px] opacity-50" />
// //         <div className="parallax-bg absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-slate-100 rounded-full blur-[90px] opacity-60" />
// //       </div>

// //       <div className="max-w-[1440px] w-full relative z-10 mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-8 items-center mt-[-40px] lg:mt-0">
// //         {/* Left: Content */}
// //         <div className="max-w-2xl text-center lg:text-left z-20">
// //           <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-brand-600 border border-orange-100/50 mb-6 mx-auto lg:mx-0 shadow-sm">
// //             <Sparkles className="w-4 h-4" />
// //             <span className="text-sm font-semibold tracking-wide uppercase">India's Leading Topper Network</span>
// //           </div>
          
// //           <h1 ref={titleRef} className="hero-title text-[2.75rem] md:text-6xl lg:text-[4.2rem] font-bold text-slate-800 leading-[1.05] tracking-tight mb-6">
// //             <span className="inline-block">Connect</span>{" "}
// //             <span className="inline-block">With</span>{" "}
// //             <span className="inline-block text-brand-500 font-serif italic pr-1">Top</span>{" "}
// //             <span className="inline-block">1%.</span>{" "}
// //             <br className="hidden lg:block" />
// //             <span className="inline-block">Master</span>{" "}
// //             <span className="inline-block">Your</span>{" "}
// //             <span className="inline-block relative">
// //               Future.
// //               <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-400 opacity-60" viewBox="0 0 100 20" preserveAspectRatio="none">
// //                 <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
// //               </svg>
// //             </span>
// //           </h1>

// //           <p className="hero-desc text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 font-medium">
// //             TopperMantra bridges the gap between effort and excellence by connecting you with mentors who have already conquered the summit.
// //           </p>

// //           <div className="hero-ctas flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
// //             <Button size="md" className="rounded-full px-10 py-4 text-[15px] font-bold group shadow-[0_8px_20px_rgb(251,146,60,0.25)] hover:shadow-[0_8px_25px_rgb(251,146,60,0.35)] transition-all bg-brand-500 hover:bg-brand-600 text-white flex items-center">
// //               Get Started Now
// //               <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
// //             </Button>
// //             <button className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold px-4 py-3 transition-colors text-sm uppercase tracking-wider">
// //               Explore Mantras
// //               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
// //             </button>
// //           </div>

// //           <div className="mt-10 flex items-center gap-8 justify-center lg:justify-start border-t border-slate-100 pt-6">
// //             <div className="flex flex-col">
// //               <span className="text-2xl font-bold text-slate-800">500+</span>
// //               <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Toppers</span>
// //             </div>
// //             <div className="h-8 w-px bg-slate-200" />
// //             <div className="flex flex-col">
// //               <span className="text-2xl font-bold text-slate-800">AIR 1+</span>
// //               <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Rank Holders</span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right: Interactive Constellation */}
// //         <div ref={constellationRef} className="relative h-[450px] lg:h-[550px] cursor-grab active:cursor-grabbing">
// //           <div className="constellation-layer absolute inset-0">
// //             {TOPPERS.map((topper) => (
// //               <div 
// //                 key={topper.id}
// //                 className="topper-node absolute flex flex-col items-center group"
// //                 style={{ left: topper.x, top: topper.y }}
// //               >
// //                 <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center p-1 group-hover:border-brand-400 transition-all duration-300 group-hover:scale-110 z-10">
// //                   <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center overflow-hidden">
// //                     <Image 
// //                       src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${topper.name}`} 
// //                       alt={topper.name}
// //                       width={56}
// //                       height={56}
// //                       className="object-cover"
// //                     />
// //                   </div>
                  
// //                   <div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-y-2 group-hover:translate-y-0 w-48 z-30">
// //                     <div className="bg-slate-800 text-white p-3 rounded-xl shadow-xl relative text-center">
// //                       <p className="text-[11px] font-medium leading-relaxed">"{topper.mantra}"</p>
// //                       <div className="mt-2 flex items-center justify-between">
// //                         <span className="text-[9px] text-brand-400 font-bold uppercase tracking-widest">{topper.rank}</span>
// //                         <div className="flex gap-0.5">
// //                           {[1,2,3].map(i => <Star key={i} className="w-2.5 h-2.5 text-orange-400 fill-orange-400" />)}
// //                         </div>
// //                       </div>
// //                       <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-800" />
// //                     </div>
// //                   </div>
// //                 </div>
                
// //                 <span className="mt-2 text-[10px] font-bold text-slate-400 group-hover:text-slate-800 transition-colors uppercase tracking-tight">{topper.name}</span>
// //               </div>
// //             ))}

// //             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
// //               <div className="relative">
// //                 <div className="absolute inset-0 w-28 h-28 bg-brand-500/10 rounded-full animate-ping" />
// //                 <div className="relative w-28 h-28 bg-white rounded-full shadow-2xl border border-slate-50 flex items-center justify-center z-10 p-2 overflow-hidden group hover:border-brand-300 transition-colors">
// //                   <Image 
// //                     src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" 
// //                     alt="Student"
// //                     width={100}
// //                     height={100}
// //                     className="object-contain"
// //                   />
// //                   <div className="absolute bottom-3 bg-brand-500 text-white text-[9px] font-black px-3 py-1 rounded-full shadow-md tracking-widest uppercase">YOU</div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;


// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ArrowRight, Star, Sparkles } from "lucide-react";
// import Button from "@/components/common/Button";

// // Mock data for the "Topper Nodes"
// const TOPPERS = [
//   { id: 1, name: "Arjun M.", rank: "AIR 12", mantra: "Consistency is better than perfection.", x: "15%", y: "20%" },
//   { id: 2, name: "Priya S.", rank: "AIR 45", mantra: "Master the basics, the rest will follow.", x: "75%", y: "15%" },
//   { id: 3, name: "Rahul K.", rank: "AIR 8", mantra: "Your only limit is your mind.", x: "85%", y: "60%" },
//   { id: 4, name: "Sanya V.", rank: "AIR 102", mantra: "Discipline is the bridge between goals.", x: "10%", y: "70%" },
//   { id: 5, name: "Ishaan T.", rank: "AIR 24", mantra: "Focus on the process, not the result.", x: "50%", y: "85%" },
// ];

// const Hero = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLHeadingElement>(null);
//   const constellationRef = useRef<HTMLDivElement>(null);

//   useGSAP(() => {
//     const ctx = gsap.context(() => {
//       // 1. Premium Entrance Stagger for Text
//       const tl = gsap.timeline();
      
//       tl.fromTo(".hero-badge", 
//           { opacity: 0, y: 20 },
//           { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
//         )
//         // Text reveal animation
//         .fromTo(".hero-title-word", 
//           { y: 50, opacity: 0 },
//           { 
//             y: 0, 
//             opacity: 1, 
//             stagger: 0.08, 
//             duration: 1.2, 
//             ease: "expo.out" 
//           }, 
//           "-=0.4"
//         )
//         // Underline draw animation
//         .fromTo(".hero-underline", 
//           { scaleX: 0 },
//           { scaleX: 1, duration: 1, ease: "power4.inOut" },
//           "-=0.6"
//         )
//         // Description and CTAs fade in smoothly
//         .fromTo(".hero-desc", 
//           { opacity: 0, y: 20 },
//           { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 
//           "-=0.8"
//         )
//         .fromTo(".hero-ctas", 
//           { opacity: 0, y: 20 },
//           { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 
//           "-=0.8"
//         )
//         .fromTo(".hero-stats", 
//           { opacity: 0, y: 20 },
//           { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 
//           "-=0.8"
//         );

//       // 2. Floating Animation for Topper Nodes
//       gsap.to(".topper-node", {
//         y: "random(-15, 15)",
//         x: "random(-10, 10)",
//         duration: "random(3, 5)",
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//         stagger: {
//           each: 0.5,
//           from: "random",
//         },
//       });

//       // 3. Mouse Move Interaction (Parallax)
//       const handleMouseMove = (e: MouseEvent) => {
//         const { clientX, clientY } = e;
//         const xPos = (clientX / window.innerWidth - 0.5) * 30;
//         const yPos = (clientY / window.innerHeight - 0.5) * 30;

//         gsap.to(".parallax-bg", {
//           x: xPos * 0.5,
//           y: yPos * 0.5,
//           duration: 1,
//           ease: "power2.out",
//         });

//         gsap.to(".constellation-layer", {
//           x: -xPos,
//           y: -yPos,
//           duration: 1.5,
//           ease: "power3.out",
//         });
//       };

//       window.addEventListener("mousemove", handleMouseMove);
//       return () => window.removeEventListener("mousemove", handleMouseMove);
//     }, containerRef);
    
//     return () => ctx.revert();
//   }, { scope: containerRef });

//   return (
//     <section 
//       ref={containerRef}
//       // SOLVED: Removed min-h-[100dvh] & flex centering. Used fixed pt/pb to close the gap near the navbar.
  
//     >
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         <div className="parallax-bg absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-50 rounded-full blur-[100px] opacity-50" />
//         <div className="parallax-bg absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-slate-100 rounded-full blur-[90px] opacity-60" />
//       </div>

//       <div className="max-w-[1440px] w-full relative z-10 mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-8 items-center mt-[-40px] lg:mt-0">
//         {/* Left: Content */}
//         <div className="max-w-2xl text-center lg:text-left z-20">
//           <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-brand-600 border border-orange-100/50 mb-6 mx-auto lg:mx-0 shadow-sm">
//             <Sparkles className="w-4 h-4" />
//             <span className="text-sm font-semibold tracking-wide uppercase">India's Leading Topper Network</span>
//           </div>
          
//           <h1 ref={titleRef} className="hero-title text-[2.75rem] md:text-6xl lg:text-[4.2rem] font-bold text-slate-800 leading-[1.05] tracking-tight mb-6 overflow-hidden pb-2">
//             <span className="inline-block hero-title-word">Connect</span>{" "}
//             <span className="inline-block hero-title-word">With</span>{" "}
//             <span className="inline-block text-brand-500 font-serif italic pr-1 hero-title-word">Top</span>{" "}
//             <span className="inline-block hero-title-word">1%.</span>{" "}
//             <br className="hidden lg:block" />
//             <span className="inline-block hero-title-word">Master</span>{" "}
//             <span className="inline-block hero-title-word">Your</span>{" "}
//             <span className="inline-block relative hero-title-word">
//               Future.
//               {/* SVG Underline added origin-left class for smooth drawing animation */}
//               <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-400 opacity-60 hero-underline origin-left" viewBox="0 0 100 20" preserveAspectRatio="none">
//                 <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
//               </svg>
//             </span>
//           </h1>

//           <p className="hero-desc text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 font-medium">
//             TopperMantra bridges the gap between effort and excellence by connecting you with mentors who have already conquered the summit.
//           </p>

//           <div className="hero-ctas flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
//             <Button size="md" className="rounded-full px-10 py-4 text-[15px] font-bold group shadow-[0_8px_20px_rgb(251,146,60,0.25)] hover:shadow-[0_8px_25px_rgb(251,146,60,0.35)] transition-all bg-brand-500 hover:bg-brand-600 text-white flex items-center">
//               Get Started Now
//               <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//             </Button>
//             <button className="flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold px-4 py-3 transition-colors text-sm uppercase tracking-wider">
//               Explore Mantras
//               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//             </button>
//           </div>

//           <div className="hero-stats mt-10 flex items-center gap-8 justify-center lg:justify-start border-t border-slate-100 pt-6">
//             <div className="flex flex-col">
//               <span className="text-2xl font-bold text-slate-800">500+</span>
//               <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Toppers</span>
//             </div>
//             <div className="h-8 w-px bg-slate-200" />
//             <div className="flex flex-col">
//               <span className="text-2xl font-bold text-slate-800">AIR 1+</span>
//               <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Rank Holders</span>
//             </div>
//           </div>
//         </div>

//         {/* Right: Interactive Constellation */}
//         <div ref={constellationRef} className="relative h-[450px] lg:h-[550px] cursor-grab active:cursor-grabbing">
//           <div className="constellation-layer absolute inset-0">
//             {TOPPERS.map((topper) => (
//               <div 
//                 key={topper.id}
//                 className="topper-node absolute flex flex-col items-center group"
//                 style={{ left: topper.x, top: topper.y }}
//               >
//                 <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center p-1 group-hover:border-brand-400 transition-all duration-300 group-hover:scale-110 z-10">
//                   <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center overflow-hidden">
//                     <Image 
//                       src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${topper.name}`} 
//                       alt={topper.name}
//                       width={56}
//                       height={56}
//                       className="object-cover"
//                     />
//                   </div>
                  
//                   <div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-y-2 group-hover:translate-y-0 w-48 z-30">
//                     <div className="bg-slate-800 text-white p-3 rounded-xl shadow-xl relative text-center">
//                       <p className="text-[11px] font-medium leading-relaxed">"{topper.mantra}"</p>
//                       <div className="mt-2 flex items-center justify-between">
//                         <span className="text-[9px] text-brand-400 font-bold uppercase tracking-widest">{topper.rank}</span>
//                         <div className="flex gap-0.5">
//                           {[1,2,3].map(i => <Star key={i} className="w-2.5 h-2.5 text-orange-400 fill-orange-400" />)}
//                         </div>
//                       </div>
//                       <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-800" />
//                     </div>
//                   </div>
//                 </div>
                
//                 <span className="mt-2 text-[10px] font-bold text-slate-400 group-hover:text-slate-800 transition-colors uppercase tracking-tight">{topper.name}</span>
//               </div>
//             ))}

//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//               <div className="relative">
//                 <div className="absolute inset-0 w-28 h-28 bg-brand-500/10 rounded-full animate-ping" />
//                 <div className="relative w-28 h-28 bg-white rounded-full shadow-2xl border border-slate-50 flex items-center justify-center z-10 p-2 overflow-hidden group hover:border-brand-300 transition-colors">
//                   <Image 
//                     src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" 
//                     alt="Student"
//                     width={100}
//                     height={100}
//                     className="object-contain"
//                   />
//                   <div className="absolute bottom-3 bg-brand-500 text-white text-[9px] font-black px-3 py-1 rounded-full shadow-md tracking-widest uppercase">YOU</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import Button from "@/components/common/Button";

// Mock data for the "Topper Nodes"
const TOPPERS = [
  { id: 1, name: "Arjun M.", rank: "AIR 12", mantra: "Consistency is better than perfection.", x: "10%", y: "15%" },
  { id: 2, name: "Priya S.", rank: "AIR 45", mantra: "Master the basics, the rest will follow.", x: "75%", y: "10%" },
  { id: 3, name: "Rahul K.", rank: "AIR 8", mantra: "Your only limit is your mind.", x: "85%", y: "55%" },
  { id: 4, name: "Sanya V.", rank: "AIR 102", mantra: "Discipline is the bridge between goals.", x: "5%", y: "65%" },
  { id: 5, name: "Ishaan T.", rank: "AIR 24", mantra: "Focus on the process, not the result.", x: "50%", y: "85%" },
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const constellationRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // 1. Premium Entrance Stagger for Text
      const tl = gsap.timeline();
      
      tl.fromTo(".hero-badge", 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        )
        // Text reveal animation
        .fromTo(".hero-title-word", 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.08, 
            duration: 1.2, 
            ease: "expo.out" 
          }, 
          "-=0.4"
        )
        // Underline draw animation
        .fromTo(".hero-underline", 
          { scaleX: 0 },
          { scaleX: 1, duration: 1, ease: "power4.inOut" },
          "-=0.6"
        )
        // Description and CTAs fade in smoothly
        .fromTo(".hero-desc", 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 
          "-=0.8"
        )
        .fromTo(".hero-ctas", 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 
          "-=0.8"
        )
        .fromTo(".hero-stats", 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 
          "-=0.8"
        );

      // 2. Floating Animation for Topper Nodes
      gsap.to(".topper-node", {
        y: "random(-10, 10)", // Reduced floating range slightly for better mobile UX
        x: "random(-8, 8)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random",
        },
      });

      // 3. Mouse Move Interaction (Parallax) - Works best on desktop
      const handleMouseMove = (e: MouseEvent) => {
        if (window.innerWidth < 1024) return; // Disable intense parallax on mobile for smoothness
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 30;
        const yPos = (clientY / window.innerHeight - 0.5) * 30;

        gsap.to(".parallax-bg", {
          x: xPos * 0.5,
          y: yPos * 0.5,
          duration: 1,
          ease: "power2.out",
        });

        gsap.to(".constellation-layer", {
          x: -xPos,
          y: -yPos,
          duration: 1.5,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);
    
    return () => ctx.revert();
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      // UPDATED: Added subtle light orange gradient background
      className=" overflow-hidden bg-gradient-to-b from-orange-50/60 via-white to-white font-sans"
    >
      {/* Background Decorative Elements - Enhanced for premium feel */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="parallax-bg absolute -top-20 left-0 lg:left-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-orange-100/50 rounded-full blur-[80px] lg:blur-[100px] opacity-60" />
        <div className="parallax-bg absolute top-1/2 lg:bottom-1/4 right-[-10%] lg:right-1/4 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-amber-50/60 rounded-full blur-[70px] lg:blur-[90px] opacity-70" />
      </div>

      <div className="max-w-[1440px] w-full relative z-10 mx-auto px-5 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-[-20px] lg:mt-0">
        {/* Left: Content */}
        <div className="max-w-2xl text-center lg:text-left z-20 mx-auto lg:mx-0 w-full">
          <div className="hero-badge inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/80 backdrop-blur-sm text-brand-600 border border-orange-200/50 mb-5 lg:mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-500" />
            <span className="text-[11px] sm:text-sm font-bold tracking-widest uppercase">India's Leading Topper Network</span>
          </div>
          
          {/* UPDATED: Optimized font sizes and line heights for mobile */}
          <h1 ref={titleRef} className="hero-title text-[2.4rem] xs:text-[2.75rem] sm:text-6xl lg:text-[4.2rem] font-extrabold text-slate-800 leading-[1.15] sm:leading-[1.1] lg:leading-[1.05] tracking-tight mb-5 lg:mb-6 overflow-hidden pb-2">
            <span className="inline-block hero-title-word">Connect</span>{" "}
            <span className="inline-block hero-title-word">With</span>{" "}
            <span className="inline-block text-brand-500 font-serif italic pr-1 hero-title-word">Top</span>{" "}
            <span className="inline-block hero-title-word">1%.</span>{" "}
            <br className="hidden sm:block" />
            <span className="inline-block hero-title-word mt-1 sm:mt-0">Master</span>{" "}
            <span className="inline-block hero-title-word">Your</span>{" "}
            <span className="inline-block relative hero-title-word">
              Future.
              <svg className="absolute w-full h-2 sm:h-3 -bottom-0.5 sm:-bottom-1 left-0 text-brand-400 opacity-60 hero-underline origin-left" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 15 Q 50 0 100 15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="hero-desc text-sm sm:text-base md:text-xl text-slate-500 leading-relaxed sm:leading-relaxed mb-8 max-w-[90%] sm:max-w-lg mx-auto lg:mx-0 font-medium">
            TopperMantra bridges the gap between effort and excellence by connecting you with mentors who have already conquered the summit.
          </p>

          {/* UPDATED: Better button stacking and gap on mobile */}
          <div className="hero-ctas flex flex-col xs:flex-row items-center gap-3 sm:gap-5 justify-center lg:justify-start">
            <Button size="md" className="w-full xs:w-auto rounded-full px-8 sm:px-10 py-3.5 sm:py-4 text-[14px] sm:text-[15px] font-bold group shadow-[0_8px_20px_rgb(251,146,60,0.25)] hover:shadow-[0_8px_25px_rgb(251,146,60,0.35)] transition-all bg-brand-500 hover:bg-brand-600 text-white flex items-center justify-center">
              Explore Mantras
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* <button className="flex items-center justify-center gap-2 text-slate-500 hover:text-slate-800 font-bold px-4 py-3 transition-colors text-[12px] sm:text-sm uppercase tracking-wider w-full xs:w-auto">
              Explore Mantras
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </button> */}
          </div>

          <div className="hero-stats mt-8 sm:mt-10 flex items-center gap-6 sm:gap-8 justify-center lg:justify-start border-t border-slate-200/60 pt-6">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-slate-800">500+</span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Toppers</span>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-slate-800">AIR 1+</span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">Rank Holders</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Constellation - Adjusted height for mobile */}
        <div ref={constellationRef} className="relative h-[320px] sm:h-[400px] lg:h-[550px] w-full max-w-[500px] mx-auto lg:max-w-none cursor-grab active:cursor-grabbing mt-4 sm:mt-0">
          <div className="constellation-layer absolute inset-0">
            {TOPPERS.map((topper) => (
              <div 
                key={topper.id}
                className="topper-node absolute flex flex-col items-center group"
                style={{ left: topper.x, top: topper.y }}
              >
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center p-1 group-hover:border-brand-400 transition-all duration-300 group-hover:scale-110 z-10">
                  <div className="w-full h-full rounded-full bg-slate-50 flex items-center justify-center overflow-hidden">
                    <Image 
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${topper.name}`} 
                      alt={topper.name}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="absolute bottom-full mb-2 sm:mb-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-y-2 group-hover:translate-y-0 w-40 sm:w-48 z-30 hidden sm:block">
                    <div className="bg-slate-800 text-white p-3 rounded-xl shadow-xl relative text-center">
                      <p className="text-[11px] font-medium leading-relaxed">"{topper.mantra}"</p>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-[9px] text-brand-400 font-bold uppercase tracking-widest">{topper.rank}</span>
                        <div className="flex gap-0.5">
                          {[1,2,3].map(i => <Star key={i} className="w-2.5 h-2.5 text-orange-400 fill-orange-400" />)}
                        </div>
                      </div>
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-slate-800" />
                    </div>
                  </div>
                </div>
                
                <span className="mt-1.5 sm:mt-2 text-[9px] sm:text-[10px] font-bold text-slate-400 group-hover:text-slate-800 transition-colors uppercase tracking-tight">{topper.name}</span>
              </div>
            ))}

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 w-20 h-20 sm:w-28 sm:h-28 bg-brand-500/10 rounded-full animate-ping" />
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 bg-white/90 backdrop-blur-sm rounded-full shadow-2xl border border-slate-50 flex items-center justify-center z-10 p-1.5 sm:p-2 overflow-hidden group hover:border-brand-300 transition-colors">
                  <Image 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" 
                    alt="Student"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                  <div className="absolute bottom-2 sm:bottom-3 bg-brand-500 text-white text-[8px] sm:text-[9px] font-black px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md tracking-widest uppercase">YOU</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;