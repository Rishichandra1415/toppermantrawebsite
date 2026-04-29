// "use client";
// import React from "react";
// import Image from "next/image";
// import { CheckCircle2, MessageCircle, Star, Users, GraduationCap } from "lucide-react";

// interface MentorCardProps {
//   mentor: {
//     name: string;
//     role: string;
//     image: string;
//     tags: string[];
//     bio: string;
//     stats?: { label: string; value: string; icon: any }[];
//   };
// }

// const MentorCard = ({ mentor }: MentorCardProps) => {
//   const defaultStats = [
//     { label: "Students", value: "150+", icon: Users },
//     { label: "Rating", value: "4.9/5", icon: Star },
//     { label: "Exp", value: "4+ Yrs", icon: GraduationCap },
//   ];

//   const stats = mentor.stats || defaultStats;

//   return (
//     <div className="group relative bg-white rounded-3xl border border-slate-100 p-6 sm:p-10 flex flex-col lg:flex-row gap-10 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
      
//       {/* Left: Avatar & Stats */}
//       <div className="flex-shrink-0 flex flex-col items-center lg:items-start gap-6">
//         <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-slate-50">
//           <Image 
//             src={mentor.image} 
//             alt={mentor.name} 
//             fill
//             className="object-cover"
//           />
//         </div>

//         <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 w-full">
//           {stats.map((stat, i) => (
//             <div key={i} className="flex flex-col lg:flex-row items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 border border-slate-100">
//               <stat.icon className="w-3.5 h-3.5 text-brand-500" />
//               <div className="text-center lg:text-left">
//                 <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
//                 <p className="text-xs font-bold text-slate-900">{stat.value}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Right: Content */}
//       <div className="flex-grow">
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
//           <div className="font-sans">
//             <div className="flex items-center gap-2 mb-1">
//               <h3>{mentor.name}</h3>
//               <CheckCircle2 className="w-5 h-5 text-brand-500 fill-brand-500/10" />
//             </div>
//             <p className="text-brand-600 font-bold text-sm tracking-wide uppercase">{mentor.role}</p>
//           </div>
          
//           <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-950 text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-600 transition-colors shadow-lg shadow-slate-200">
//             <MessageCircle className="w-4 h-4" />
//             Connect Now
//           </button>
//         </div>

//         <div className="flex flex-wrap gap-2 mb-8">
//           {mentor.tags.map((tag, idx) => (
//             <span 
//               key={idx} 
//               className="px-4 py-1.5 rounded-lg bg-slate-50 text-slate-600 text-[11px] font-bold border border-slate-100"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         <p className="text-slate-600 text-sm leading-relaxed font-medium">
//           {mentor.bio}
//         </p>

//         <div className="mt-8">
//           <button className="text-brand-600 text-sm font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
//             View Complete Profile →
//           </button>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default MentorCard;
"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle2, MessageCircle, Star, Users, GraduationCap, ArrowRight } from "lucide-react";

interface MentorCardProps {
  mentor: {
    name: string;
    role: string;
    image: string;
    tags: string[];
    bio: string;
    stats?: { label: string; value: string; icon: any }[];
  };
}

const MentorCard = ({ mentor }: MentorCardProps) => {
  const defaultStats = [
    { label: "Students", value: "150+", icon: Users },
    { label: "Rating", value: "4.9/5", icon: Star },
    { label: "Exp", value: "4+ Yrs", icon: GraduationCap },
  ];

  const stats = mentor.stats || defaultStats;

  return (
    <div className="group relative bg-white rounded-[2rem] border border-black/5 p-5 sm:p-6 flex flex-col md:flex-row gap-6 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06)] hover:border-[#FF6B35]/20 transition-all duration-400 font-sans w-full">
      
      {/* Left: Avatar & Tightly Packed Stats */}
      <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-4">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-[1.5rem] overflow-hidden shadow-md border-[3px] border-white group-hover:scale-105 transition-transform duration-500">
          <Image 
            src={mentor.image} 
            alt={mentor.name} 
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="flex md:flex-col gap-2 w-full justify-center md:justify-start">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#FAFAF8] border border-black/5">
              <stat.icon className="w-3.5 h-3.5 text-[#FF6B35]" strokeWidth={2.5} />
              <div className="flex flex-col">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest leading-none">{stat.label}</span>
                <span className="text-[10px] font-bold text-[#0D0D0D] leading-tight">{stat.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Content & Action */}
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <h3 className="font-serif text-2xl text-[#0D0D0D]">{mentor.name}</h3>
                <CheckCircle2 className="w-4 h-4 text-blue-500" fill="#E0E7FF" />
              </div>
              <p className="text-[#FF6B35] font-semibold text-xs tracking-wide uppercase">{mentor.role}</p>
            </div>
            
            <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0D0D0D] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#FF6B35] transition-colors shadow-lg active:scale-95 shrink-0">
              <MessageCircle className="w-3.5 h-3.5" /> Connect
            </button>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {mentor.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1 rounded-md bg-[#FAFAF8] text-slate-600 text-[10px] font-semibold border border-black/5"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-slate-500 text-xs leading-relaxed font-light max-w-lg">
            {mentor.bio}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-black/5">
          <button className="text-slate-400 text-xs font-semibold flex items-center gap-1.5 hover:text-[#0D0D0D] transition-colors group/btn w-max">
            View Complete Profile <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

    </div>
  );
};

export default MentorCard;