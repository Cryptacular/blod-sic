import { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import DiscographySection from "@/components/DiscographySection";
import Divider from "@/components/Divider";
import MusicVideosSection from "@/components/MusicVideosSection";
import Navigation from "@/components/Navigation";
import AboutBlodSicSection from "@/components/electronic-press-kit/AboutBlodSicSection";
import DivisionOutNowSection from "@/components/DivisionOutNowSection";

export const metadata: Metadata = {
  title: "blod [sic] — electronic press kit",
  description:
    "Electronic press kit for electronic artist 'blod [sic]' based out of Auckland, New Zealand",
};

export default function Home() {
  return (
    <>
      <Navigation
        menuItems={[
          "about",
          "links",
          "photos",
          "division",
          "discography",
          "music-videos",
          "contact",
        ]}
      />
      <AboutBlodSicSection />
      <DivisionOutNowSection />
      <DiscographySection />
      <Divider />
      <MusicVideosSection />
      <Divider />
      <ContactSection />
    </>
  );
}
