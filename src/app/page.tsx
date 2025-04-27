import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MusicVideosSection from "@/components/MusicVideosSection";
import Divider from "@/components/Divider";
import DiscographySection from "@/components/DiscographySection";
import ContactSection from "@/components/ContactSection";
import BandcampSection from "@/components/BandcampSection";
import UpcomingSection from "@/components/UpcomingSection";

export default function Home() {
  return (
    <>
      <Navigation
        menuItems={[
          "the space between",
          "discography",
          "music videos",
          "contact",
        ]}
      />
      <HeroSection />
      <UpcomingSection />
      <BandcampSection />
      <Divider />
      <DiscographySection />
      <Divider />
      <MusicVideosSection />
      <Divider />
      <ContactSection />
    </>
  );
}
