import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import UpcomingSection from "@/components/UpcomingSection";
import MusicVideosSection from "@/components/MusicVideosSection";
import Divider from "@/components/Divider";
import DiscographySection from "@/components/DiscographySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navigation
        menuItems={["wight", "discography", "music videos", "contact"]}
      />
      <HeroSection />
      <UpcomingSection />
      <DiscographySection />
      <Divider />
      <MusicVideosSection />
      <Divider />
      <ContactSection />
    </>
  );
}
