import Image from "next/image";
import ResponsiveContainer from "./ResponsiveContainer";
import {
  SiApplemusic,
  SiBandcamp,
  SiSoundcloud,
  SiSpotify,
  SiYoutubemusic,
} from "react-icons/si";

const albums: Album[] = [
  {
    name: "wight (releasing 23 Aug)",
    urls: {
      bandcamp: null,
      spotify: "https://distrokid.com/hyperfollow/blodsic/wight",
      ytMusic: null,
      appleMusic: null,
      soundcloud: null,
    },
    thumbnailUrl: "/images/albums/wight.png",
  },
  {
    name: "punctured",
    urls: {
      bandcamp: "https://blodsic.bandcamp.com/track/punctured",
      spotify:
        "https://open.spotify.com/album/59RU7F8lnG0pg04H0SThP7?si=2IbsRZbgSqi49Mpq2P2HRQ",
      ytMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_kJTesadK2dybMjcmt9NybN1_C6zIxdXCY&si=4wj6VHI7yvoJTCe-",
      appleMusic:
        "https://music.apple.com/nz/album/punctured-single/1740529276",
      soundcloud:
        "https://soundcloud.com/blod-sic/punctured?si=022f673bdf1d4544a16f87d21dead163&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    thumbnailUrl: "/images/albums/punctured.png",
  },
  {
    name: "the dead of night",
    urls: {
      bandcamp: "https://blodsic.bandcamp.com/track/the-dead-of-night",
      spotify:
        "https://open.spotify.com/album/3yerzJkbCi7Cgnl2dszzQc?si=5fNlV_u0TOqIGvGAmmYhew",
      ytMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_mC5syRcc9GoU1vlqkaU0m-UKOFn_A-1mU&si=WmAZeB4ZbElgtn9u",
      appleMusic:
        "https://music.apple.com/nz/album/the-dead-of-night-single/1722563406",
      soundcloud:
        "https://soundcloud.com/blod-sic/the-dead-of-night?si=7b8c4647dc8b4caf8534696928479380&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    thumbnailUrl: "/images/albums/the-dead-of-night.png",
  },
  {
    name: "bane",
    urls: {
      bandcamp: "https://blodsic.bandcamp.com/track/bane",
      spotify:
        "https://open.spotify.com/album/1bhlH9hHineRQSu3GKEjjN?si=JuxPsa-qTiGSIHefqkwZzw",
      ytMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_n5bJZdVxuZFApMErZuNVjnNjOZ6WsFbp8&si=vh7KxiLgBTjDJR3l",
      appleMusic: "https://music.apple.com/nz/album/bane-single/1718244410",
      soundcloud:
        "https://soundcloud.com/blod-sic/bane?si=afb30d8a05304305b70e6c5e9557f4b3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    thumbnailUrl: "/images/albums/bane.png",
  },
  {
    name: "death of a planet",
    urls: {
      bandcamp: "https://blodsic.bandcamp.com/track/death-of-a-planet",
      spotify:
        "https://open.spotify.com/album/5IpBSu4hFfNFu8TpOZMhFg?si=MFLzPWL5Q4qDVoSsHEzWsw",
      ytMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_l7iTQ9rFBp7QpbuhcZ6G9wYdUVpnRNCyE&si=FgM2UB_PQIzcVTPd",
      appleMusic:
        "https://music.apple.com/nz/album/death-of-a-planet-single/1707735669",
      soundcloud:
        "https://soundcloud.com/blod-sic/death-of-a-planet?si=867a7c2b1910420e91690559d34d5ae0&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    thumbnailUrl: "/images/albums/death-of-a-planet.png",
  },
  {
    name: "asymptomatic",
    urls: {
      bandcamp: "https://blodsic.bandcamp.com/album/asymptomatic",
      spotify:
        "https://open.spotify.com/album/7bTPluokq9zcFggm17Ixmo?si=hGYzNo0lTGC99UmJfjhVWA",
      ytMusic:
        "https://music.youtube.com/playlist?list=OLAK5uy_lJHU8XsGQKg1eFG_81flTcnmf90KWiu0Y&si=o1wOCcRQlSZ8saSc",
      appleMusic: "https://music.apple.com/nz/album/asymptomatic-ep/1675254719",
      soundcloud: null,
    },
    thumbnailUrl: "/images/albums/asymptomatic.png",
  },
];

export default function DiscographySection() {
  return (
    <div className="p-4 pt-6 md:p-12 md:pt-20">
      <ResponsiveContainer>
        <div className="flex flex-col gap-16">
          <h2 className="text-4xl text-center font-bold">
            <a id="discography" />
            discography
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-16">
            {albums.map((a) => (
              <div
                key={a.name}
                className="flex flex-col gap-4 items-center justify-start"
              >
                <a href={a.urls.spotify} target="_blank">
                  <Image
                    src={a.thumbnailUrl}
                    width={336 / 2}
                    height={188 / 2}
                    alt={`${a.name} thumbnail`}
                    className="border-solid border-8 border-foreground"
                  />
                </a>
                {a.name}
                <div className="flex flex-row flex-wrap gap-4">
                  {a.urls.bandcamp ? (
                    <a href={a.urls.bandcamp} target="_blank">
                      <SiBandcamp aria-label={`Bandcamp link for ${a.name}`} />
                    </a>
                  ) : null}
                  {a.urls.spotify ? (
                    <a href={a.urls.spotify} target="_blank">
                      <SiSpotify aria-label={`Spotify link for ${a.name}`} />
                    </a>
                  ) : null}
                  {a.urls.ytMusic ? (
                    <a href={a.urls.ytMusic} target="_blank">
                      <SiYoutubemusic
                        aria-label={`YouTube Music link for ${a.name}`}
                      />
                    </a>
                  ) : null}
                  {a.urls.appleMusic ? (
                    <a href={a.urls.appleMusic} target="_blank">
                      <SiApplemusic
                        aria-label={`Apple Music link for ${a.name}`}
                      />
                    </a>
                  ) : null}
                  {a.urls.soundcloud ? (
                    <a href={a.urls.soundcloud} target="_blank">
                      <SiSoundcloud
                        aria-label={`Soundcloud link for ${a.name}`}
                      />
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}

interface Album {
  name: string;
  urls: {
    bandcamp: string | null;
    spotify: string;
    ytMusic: string | null;
    appleMusic: string | null;
    soundcloud: string | null;
  };
  thumbnailUrl: string;
}
