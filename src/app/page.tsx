import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import UpcomingSection from "@/components/UpcomingSection";
import MusicVideosSection from "@/components/MusicVideosSection";

export default function Home() {
  return (
    <main className="flex flex-1 min-h-screen flex-col items-stretch">
      <Navigation />
      <HeroSection />
      <UpcomingSection />
      <MusicVideosSection />
      {/* <DiscographySection /> */}
      {/* <ContactSection /> */}
    </main>
  );
}
