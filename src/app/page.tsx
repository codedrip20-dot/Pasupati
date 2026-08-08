import Navbar from "@/src/components/layout/Navbar";
import Hero from "@/src/components/home/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-(--color-white)">
      <Navbar />

      <Hero />

      {/* 
        Homepage sections will be added below the Hero:
        - About
        - Services
        - Featured Projects
        - Why Pashupati
        - Contact
      */}
    </main>
  );
}