// "use client";

// import React, { useState } from "react";
// import {
//   motion,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import { Menu } from "lucide-react";
// import Link from "next/link";
// import { NavLink, MentorshipMegaMenu } from "./NavMenu";
// import MobileMenu from "./MobileMenu";
// import Button from "../common/Button";

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isHidden, setIsHidden] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const { scrollY } = useScroll();

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const previous = scrollY.getPrevious() ?? 0;
    
//     // Hide on scroll down, show on scroll up
//     if (latest > previous && latest > 150) {
//       setIsHidden(true);
//     } else {
//       setIsHidden(false);
//     }

//     // Glassmorphism effect trigger
//     if (latest > 50) {
//       setIsScrolled(true);
//     } else {
//       setIsScrolled(false);
//     }
//   });

//   return (
//     <>
//       <motion.nav
//         variants={{
//           visible: { y: 0 },
//           hidden: { y: "-100%" },
//         }}
//         animate={isHidden ? "hidden" : "visible"}
//         // Premium custom easing for buttery smooth reveal/hide
//         transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//         className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-500 ${
//           isScrolled 
//             // Upgraded Glassmorphism: more blur, softer background, subtle premium shadow
//             ? "py-3.5 bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-white/50" 
//             : "py-6 bg-transparent"
//         }`}
//       >
//         <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
//           <div className="flex items-center justify-between">
//             {/* Left: Logo */}
//             <Link href="/" className="flex items-center gap-1 group pl-2">
//               <span className="text-2xl font-extrabold tracking-tight transition-transform duration-300 group-hover:scale-[1.02]">
//                 <span className="text-brand-500">topper</span>
//                 <span className="text-accent-900">mantra</span>
//               </span>
//             </Link>

//             {/* Right Group: Nav + CTA */}
//             <div className="flex items-center gap-8 lg:gap-10">
//               {/* Desktop Nav - Increased gap slightly for breathing room */}
//               <div className="hidden lg:flex items-center gap-2">
//                 <MentorshipMegaMenu />
//                 <NavLink href="/partnership">Partnership Opportunities</NavLink>
//                 <NavLink href="/contact">Contact With Us</NavLink>
//                 <NavLink href="/pricing">Pricing</NavLink>
//                 <NavLink href="/about">About Us</NavLink>
//                 <NavLink href="/partners">We Work With</NavLink>
//               </div>

//               {/* CTA & Mobile Toggle */}
//               <div className="flex items-center gap-4">
//                 <div className="hidden sm:block hover:scale-[1.02] active:scale-95 transition-all duration-300">
//                   <Button 
//                     variant="primary" 
//                     size="md" 
//                     // Refined the shadow for a more modern glow effect
//                     className="shadow-[0_8px_20px_rgb(251,146,60,0.25)] hover:shadow-[0_8px_25px_rgb(251,146,60,0.35)] rounded-full px-7 py-2.5 font-bold"
//                   >
//                     Join TopperMantra
//                   </Button>
//                 </div>
                
//                 <button
//                   onClick={() => setIsMobileMenuOpen(true)}
//                   className="lg:hidden p-2.5 rounded-xl bg-gray-50/80 text-gray-700 hover:bg-brand-50 hover:text-brand-600 active:scale-95 transition-all duration-300 border border-gray-200/60 shadow-sm"
//                   aria-label="Toggle menu"
//                 >
//                   <Menu className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu Sidebar */}
//       <MobileMenu 
//         isOpen={isMobileMenuOpen} 
//         onClose={() => setIsMobileMenuOpen(false)} 
//       />
//     </>
//   );
// };

// export default Navbar;


"use client";

import React, { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { NavLink, MentorshipMegaMenu, JoinUsMegaMenu } from "./NavMenu";
import MobileMenu from "./MobileMenu";
import Button from "../common/Button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[50] transition-colors duration-500 font-sans ${
          isScrolled 
            // Softer glassmorphism without harsh borders
            ? "py-4 bg-white/85 backdrop-blur-lg shadow-[0_4px_20px_rgb(0,0,0,0.03)] border-b border-gray-100/50" 
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Logo - Removed Extra Bold, made it medium/clean */}
            <Link href="/" className="flex items-center gap-1 group pl-2">
              <span className="text-2xl font-medium tracking-wide transition-opacity duration-300 hover:opacity-80">
                <span className="text-brand-500">topper</span>
                <span className="text-slate-800">mantra</span>
              </span>
            </Link>

            {/* Right Group: Nav + CTA */}
            <div className="flex items-center gap-8 lg:gap-12">
              
              {/* Desktop Nav - Enforcing soft text color and medium font weight */}
              {/* NOTE: Make sure to remove font-bold from inside your NavLink component! */}
              <div className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-slate-600">
                <NavLink href="/">Home</NavLink>
                <MentorshipMegaMenu />
                <JoinUsMegaMenu />
                {/* <NavLink href="/partnership">Partnership</NavLink> */}
                 <NavLink href="/about">About Us</NavLink>

                <NavLink href="/contact">Contact</NavLink>
                {/* <NavLink href="/pricing">Pricing</NavLink> */}
 
                {/* <NavLink href="/partners">We Work With</NavLink> */}
              </div>

              {/* CTA & Mobile Toggle */}
              <div className="flex items-center gap-5">
                <div className="hidden sm:block hover:-translate-y-0.5 transition-transform duration-300">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.support.toppers.mantra&pcampaignid=web_share&pli=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shadow-sm hover:shadow-md bg-brand-500 hover:bg-brand-600 text-white rounded-full px-6 py-2.5 text-[15px] font-medium tracking-wide inline-flex items-center justify-center"
                  >
                    Download App
                  </a>
                </div>
                
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden p-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-colors duration-300"
                  aria-label="Toggle menu"
                >
                  <Menu className="w-5 h-5 stroke-[1.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Navbar;