import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MusicVideosSection from "@/components/MusicVideosSection";
import Divider from "@/components/Divider";
import DiscographySection from "@/components/DiscographySection";
import ContactSection from "@/components/ContactSection";
import DivisionOutNowSection from "@/components/DivisionOutNowSection";
import BandcampSection from "@/components/BandcampSection";

export default function Home() {
  return (
    <>
      <Navigation
        menuItems={["division", "discography", "music videos", "contact"]}
      />
      <HeroSection />
      <DivisionOutNowSection />
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
