import Image from "next/image";
import ResponsiveContainer from "./ResponsiveContainer";
import musicVideos from "@/data/musicVideos";

export default function MusicVideosSection() {
  return (
    <div className="p-4 pt-6 md:p-12 md:pt-20">
      <ResponsiveContainer>
        <div className="flex flex-col gap-16">
          <h2 className="text-4xl text-center font-bold">
            <a id="music-videos" />
            music videos
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-8">
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
