import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import UpcomingSection from "@/components/UpcomingSection";
import MusicVideosSection from "@/components/MusicVideosSection";
import Divider from "@/components/Divider";
import DiscographySection from "@/components/DiscographySection";

export default function Home() {
  return (
    <main className="flex flex-1 min-h-screen flex-col items-stretch">
      <Navigation />
      <HeroSection />
      <UpcomingSection />
      <DiscographySection />
      <Divider />
      <MusicVideosSection />
      {/* <ContactSection /> */}
    </main>
  );
}
