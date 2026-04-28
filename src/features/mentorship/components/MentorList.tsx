"use client";
import React from "react";
import MentorCard from "./MentorCard";

const MOCK_MENTORS = [
  {
    name: "Yugansh Sharma",
    role: "Founder at Dosaka Hospitality Pvt. Ltd.",
    type: "entrepreneurship",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Yugansh",
    tags: ["Career Advice", "Idea Validation", "Growth Marketing"],
    bio: "Passionate restaurateur and entrepreneur. Driving force behind DOSAKA, Rajasthan's biggest South Indian dining chain. Expert in scaling hospitality ventures from 0 to 1.",
  },
  {
    name: "Ananya Iyer",
    role: "IIT Delhi | AIR 42 JEE Advanced",
    type: "academic",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
    tags: ["JEE Strategy", "Physics Mastery", "Mindset Coaching"],
    bio: "Helping students navigate the intense pressure of competitive exams. My focus is on conceptual clarity and building a winning mindset that survives the toughest exam days.",
  },
  {
    name: "Vikram Das",
    role: "Full Stack Lead | SIH Winner",
    type: "hackathon",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    tags: ["Web3", "System Design", "Pitching"],
    bio: "Smart India Hackathon winner and veteran of 30+ hackathons. Expert in building scalable MVPs and delivering winning technical pitches under pressure.",
  }
];

interface MentorListProps {
  type?: string;
}

const MentorList = ({ type = "academic" }: MentorListProps) => {
  const filteredMentors = MOCK_MENTORS.filter(m => m.type === type);

  return (
    <section className="py-10 bg-slate-50/50 font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-6 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-px bg-brand-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-600">Expert Network</span>
          </div>
          <h2 className="font-bold">Connect with {type.charAt(0).toUpperCase() + type.slice(1)} Experts</h2>
          <p className="text-slate-500 text-sm font-medium leading-relaxed">
            Choose from a curated network of mentors who have successfully navigated the exact paths you are aiming to conquer.
          </p>
        </div>

        <div className="space-y-8">
          {filteredMentors.map((mentor, index) => (
            <MentorCard key={index} mentor={mentor} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs mb-6">Didn't find what you're looking for?</p>
          <button className="px-10 py-4 rounded-full border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all transform hover:scale-105 active:scale-95">
            View All Mentors
          </button>
        </div>

      </div>
    </section>
  );
};

export default MentorList;
