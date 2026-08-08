import AboutHero from "@/src/components/about/AboutHero";
import BrandStory from "@/src/components/about/BrandStory";
import AboutPhilosophy from "@/src/components/about/AboutPhilosophy";
import CoreValues from "@/src/components/about/CoreValues";
import AboutExpertise from "@/src/components/about/AboutExpertise";
import HeritageSection from "@/src/components/about/HeritageSection";
import AboutClosing from "@/src/components/about/AboutClosing";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07111f]">
      {/* =========================================================
          ABOUT — HERO
      ========================================================== */}
      <AboutHero />

      {/* =========================================================
          BRAND STORY
      ========================================================== */}
      <BrandStory />

      {/* =========================================================
          PHILOSOPHY
      ========================================================== */}
      <AboutPhilosophy />

      {/* =========================================================
          CORE VALUES
      ========================================================== */}
      <CoreValues />

      {/* =========================================================
          EXPERTISE
      ========================================================== */}
      <AboutExpertise />

      {/* =========================================================
          HERITAGE
      ========================================================== */}
      <HeritageSection />

      {/* =========================================================
          FINAL BRAND STATEMENT
      ========================================================== */}
      <AboutClosing />
    </main>
  );
}