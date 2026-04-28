import { 
  HomeHero, 
  WhatWeDoSection, 
  WhyChooseSection, 
  MentorsSection, 
  ResultsSection,
  PricingTeaser,
  SchoolPartnership,
  FinalCTA
} from "@/features/home/components";

export default function Home() {
  return (
    <main className="relative w-full max-w-full overflow-x-hidden bg-white pt-20">
      
      {/* 1. Hero Journey */}
      <section className="w-full max-w-full overflow-hidden flex items-center bg-white">
        <HomeHero />
      </section>

      {/* 2. Service Core */}
      <section className="w-full max-w-full overflow-hidden flex items-center bg-brand-50">
        <WhatWeDoSection />
      </section>

      {/* 3. Strategic Advantage */}
      <section className="w-full max-w-full overflow-hidden flex items-center bg-white">
        <WhyChooseSection />
      </section>

      {/* 4. Elite Network */}
      <section className="w-full max-w-full overflow-hidden flex items-center bg-[#fafafa]">
        <MentorsSection />
      </section>
      
      {/* 5. Proven Impact */}
      <section className="w-full max-w-full overflow-hidden flex items-center bg-white">
        <ResultsSection />
      </section>

      {/* 6. Investment Tiers */}
      {/* <section className="w-full max-w-full overflow-hidden flex items-center bg-brand-50">
        <PricingTeaser />
      </section> */}
      
      {/* 7. Institutional Mastery */}
      <section className="w-full max-w-full overflow-hidden flex items-center bg-white">
        <SchoolPartnership />
      </section>

      {/* 8. The Closer - Grand Finale */}
      {/* <section className="w-full max-w-full overflow-hidden flex items-center bg-slate-950">
        <FinalCTA />
      </section> */}

    </main>
  );
}
