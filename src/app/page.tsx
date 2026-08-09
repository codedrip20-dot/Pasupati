
import Hero from "@/src/components/home/Hero";
import HomeAbout from "@/src/components/home/HomeAbout";
import HomeContact from "@/src/components/home/HomeContact";
import Reviews from "@/src/components/home/Review";
import WhyChooseUs from "@/src/components/home/WhyUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-(--color-white)">
   

      <Hero />
      <HomeAbout />
      <HomeContact />
      <WhyChooseUs />
      <Reviews />

  
    </main>
  );
}