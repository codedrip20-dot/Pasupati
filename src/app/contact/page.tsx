import ContactHero from "@/src/components/contact/ContactHero";
import ContactInfo from "@/src/components/contact/ContactInfo";
import OfficialLocations from "@/src/components/contact/OfficeLocations";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <ContactHero />

      <ContactInfo />

      <OfficialLocations />
    </main>
  );
}