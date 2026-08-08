import type { Metadata } from "next";

import ProjectsHero from "@/src/components/projects/ProjectsHero";
import ProjectIntro from "@/src/components/projects/ProjectIntro";
import ConstructionCategories from "@/src/components/projects/ConstructionCategories";
import ProjectGallery from "@/src/components/projects/ProjectGallery";
import ProjectsCTA from "@/src/components/projects/ProjectsCTA";

export const metadata: Metadata = {
  title: "Projects | Pasupati Infrastructure",
  description:
    "Explore the diverse construction work of Pasupati Infrastructure across infrastructure, commercial, hospitality, healthcare, institutional, residential, restoration and specialized construction.",
  keywords: [
    "Pasupati Infrastructure",
    "construction projects",
    "infrastructure",
    "commercial construction",
    "hospital construction",
    "hotel construction",
    "institutional construction",
    "residential construction",
    "monastery construction",
    "road construction",
    "restoration",
    "renovation",
  ],
  openGraph: {
    title: "Projects | Pasupati Infrastructure",
    description:
      "A glimpse into the construction, infrastructure and development work of Pasupati Infrastructure.",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#07100e]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <ProjectsHero />

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <ProjectIntro />

      {/* =====================================================
          CONSTRUCTION CATEGORIES
      ====================================================== */}

      <ConstructionCategories />

      {/* =====================================================
          PROJECT GALLERY
      ====================================================== */}

      <ProjectGallery />

      {/* =====================================================
          CONTACT CTA
      ====================================================== */}

      <ProjectsCTA />
    </main>
  );
}