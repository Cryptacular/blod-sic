import ContactSection from "@/components/ContactSection";
import DiscographySection from "@/components/DiscographySection";
import Divider from "@/components/Divider";
import MusicVideosSection from "@/components/MusicVideosSection";
import Navigation from "@/components/Navigation";
import UpcomingSection from "@/components/UpcomingSection";
import AboutBlodSicSection from "@/components/electronic-press-kit/AboutBlodSicSection";

export default function Home() {
  return (
    <>
      <Navigation
        menuItems={[
          "about",
          "links",
          "photos",
          "wight",
          "discography",
          "music-videos",
          "contact",
        ]}
      />
      <AboutBlodSicSection />
      <UpcomingSection />
      <DiscographySection />
      <Divider />
      <MusicVideosSection />
      <Divider />
      <ContactSection />
    </>
  );
}
