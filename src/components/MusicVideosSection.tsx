import Image from "next/image";
import ResponsiveContainer from "./ResponsiveContainer";

const musicVideos: MusicVideo[] = [
  {
    name: "wight (releasing 23 Aug)",
    url: "https://www.youtube.com/watch?v=8v3P8F63H_4",
    thumbnailUrl: "/images/videos/wight.webp",
  },
  {
    name: "live looper jam",
    url: "https://www.youtube.com/watch?v=qlmwMmRSR1E",
    thumbnailUrl: "/images/videos/looper-jam.webp",
  },
  {
    name: "punctured",
    url: "https://www.youtube.com/watch?v=66tszsiHz2w",
    thumbnailUrl: "/images/videos/punctured.webp",
  },
  {
    name: "the dead of night",
    url: "https://www.youtube.com/watch?v=uhjPmEOVTwA",
    thumbnailUrl: "/images/videos/the-dead-of-night.webp",
  },
  {
    name: "bane",
    url: "https://www.youtube.com/watch?v=2N-rKjPPKOE",
    thumbnailUrl: "/images/videos/bane.webp",
  },
  {
    name: "a glance at death",
    url: "https://www.youtube.com/watch?v=wTEsXh80LLY",
    thumbnailUrl: "/images/videos/a-glance-at-death.webp",
  },
];

export default function MusicVideosSection() {
  return (
    <div className="p-12 pt-20">
      <ResponsiveContainer>
        <div className="flex flex-col gap-16">
          <h2 className="text-4xl text-center font-bold">
            <a id="musicvideos" />
            music videos
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-8">
            {musicVideos.map((mv) => (
              <div
                key={mv.name}
                className="flex flex-col gap-4 items-center justify-start"
              >
                <a href={mv.url} target="_blank">
                  <Image
                    src={mv.thumbnailUrl}
                    width={336 / 2}
                    height={188 / 2}
                    alt={`${mv.name} thumbnail`}
                    className="border-solid border-8 border-foreground"
                  />
                </a>
                <a href={mv.url} target="_blank">
                  {mv.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}

interface MusicVideo {
  name: string;
  url: string;
  thumbnailUrl: string;
}
