import { IconBaseProps, IconType } from "react-icons";
import {
  SiSpotify,
  SiYoutubemusic,
  SiYoutube,
  SiBandcamp,
  SiSoundcloud,
  SiInstagram,
} from "react-icons/si";

const socials: SocialProps[] = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/73T1x6IyH2NEm4lKew8gzk?si=qqjvqeMDSmajCkleNEg9SQ",
    icon: SiSpotify,
  },
  {
    name: "YouTube Music",
    url: "https://music.youtube.com/channel/UChQK18pPxfJ1Sszq0GJzsLw?feature=share",
    icon: SiYoutubemusic,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCWU6P5YIWihFjBDwbFZSiOw",
    icon: SiYoutube,
  },
  {
    name: "Bandcamp",
    url: "https://blodsic.bandcamp.com/",
    icon: SiBandcamp,
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/blod-sic",
    icon: SiSoundcloud,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/blodsic/",
    icon: SiInstagram,
  },
];

export default function SocialButtons() {
  return (
    <div className="flex flex-row gap-4">
      {socials.map((s) => (
        <a key={s.name} href={s.url} target="_blank">
          {s.icon({ size: 24 })}
        </a>
      ))}
    </div>
  );
}

interface SocialProps {
  name: string;
  url: string;
  icon: IconType;
}
