import { IconType } from "react-icons";
import {
  SiSpotify,
  SiYoutubemusic,
  SiYoutube,
  SiBandcamp,
  SiSoundcloud,
  SiInstagram,
  SiApplemusic,
  SiFacebook,
  SiBluesky,
} from "react-icons/si";

const socials: SocialLink[] = [
  {
    name: "Bandcamp",
    url: "https://blodsic.bandcamp.com/",
    icon: SiBandcamp,
    type: "music",
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/73T1x6IyH2NEm4lKew8gzk?si=qqjvqeMDSmajCkleNEg9SQ",
    icon: SiSpotify,
    type: "music",
  },
  {
    name: "YouTube Music",
    url: "https://music.youtube.com/channel/UChQK18pPxfJ1Sszq0GJzsLw?feature=share",
    icon: SiYoutubemusic,
    type: "music",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCWU6P5YIWihFjBDwbFZSiOw",
    icon: SiYoutube,
    type: "music",
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/nz/artist/blod-sic/1632780047",
    icon: SiApplemusic,
    type: "music",
  },
  {
    name: "SoundCloud",
    url: "https://soundcloud.com/blod-sic",
    icon: SiSoundcloud,
    type: "music",
  },
  {
    name: "Bluesky",
    url: "https://bsky.app/profile/blodsic.com",
    icon: SiBluesky,
    type: "social",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/blodsic/",
    icon: SiInstagram,
    type: "social",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61567362156865",
    icon: SiFacebook,
    type: "social",
  },
];

interface Props {
  type?: "music" | "social";
}

export default function SocialButtons({ type }: Props) {
  const filteredSocials = type
    ? socials.filter((s) => s.type === type)
    : socials;

  return (
    <div className="flex flex-row justify-center gap-4 flex-wrap">
      {filteredSocials.map((s) => (
        <a key={s.name} href={s.url} target="_blank">
          {s.icon({ size: 24, title: s.name })}
        </a>
      ))}
    </div>
  );
}

interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
  type: "music" | "social";
}
