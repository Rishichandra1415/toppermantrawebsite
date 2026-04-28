import React from "react";
import { notFound } from "next/navigation";
import { AcademicHero, AcademicDetails, MentorList } from "@/features/mentorship/components";
import { Metadata } from "next";

// This will be replaced by actual components for each slug
// For now, I'll create a dynamic way to render them

interface PageProps {
  params: { slug: string };
}

const MENTORSHIP_DATA: Record<string, any> = {
  academic: {
    title: "Academic Mentorship | TopperMantra",
    description: "Get 1-on-1 personalized guidance from AIR rankers and elite students.",
    theme: "academic"
  },
  hackathon: {
    title: "Hackathon Mentorship | TopperMantra",
    description: "Master the art of competitive coding and building with industry experts.",
    theme: "hackathon"
  },
  entrepreneurship: {
    title: "Entrepreneurship Mentorship | TopperMantra",
    description: "Turn your ideas into scalable business ventures with real founders.",
    theme: "entrepreneurship"
  }
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = MENTORSHIP_DATA[params.slug];
  if (!data) return { title: "Not Found" };
  return {
    title: data.title,
    description: data.description,
  };
}

export default function MentorshipDynamicPage({ params }: PageProps) {
  const data = MENTORSHIP_DATA[params.slug];

  if (!data) {
    notFound();
  }

  // We will pass the 'slug' or 'type' to the components to theme them
  return (
    <main className="w-full pt-16">
      <AcademicHero type={params.slug} />
      <AcademicDetails type={params.slug} />
      <MentorList type={params.slug} />
    </main>
  );
}
