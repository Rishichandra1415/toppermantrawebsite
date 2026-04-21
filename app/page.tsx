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
    <main className="relative w-full max-w-full overflow-x-hidden snap-y snap-mandatory bg-white">
      
      {/* 1. Hero Journey */}
      <section className="snap-start snap-always w-full max-w-full overflow-hidden min-h-screen flex items-center bg-white">
        <HomeHero />
      </section>

      {/* 2. Service Core */}
      <section className="snap-start snap-always w-full max-w-full overflow-hidden min-h-screen flex items-center bg-brand-50">
        <WhatWeDoSection />
      </section>

      {/* 3. Strategic Advantage */}
      <section className="snap-start snap-always w-full max-w-full overflow-hidden min-h-screen flex items-center bg-white">
        <WhyChooseSection />
      </section>

      {/* 4. Elite Network */}
      <section className="snap-start snap-always w-full max-w-full overflow-hidden min-h-screen flex items-center bg-[#fafafa]">
        <MentorsSection />
      </section>
      
      {/* 5. Proven Impact */}
      <section className="snap-start snap-always w-full max-w-full overflow-hidden min-h-screen flex items-center bg-white">
        <ResultsSection />
      </section>

      {/* 6. Investment Tiers */}
      <section className="snap-start snap-always w-full max-w-full overflow-hidden min-h-screen flex items-center bg-brand-50">
        <PricingTeaser />
      </section>
      
      {/* 7. Institutional Mastery */}
      <section className="snap-start snap-always w-full max-w-full overflow-hidden min-h-screen flex items-center bg-white">
        <SchoolPartnership />
      </section>

      {/* 8. The Closer - Grand Finale */}
      <section className="snap-start snap-always w-full max-w-full overflow-hidden min-h-screen flex items-center bg-slate-950">
        <FinalCTA />
      </section>

    </main>
  );
}
