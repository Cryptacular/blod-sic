import Image from "next/image";
import ResponsiveContainer from "./ResponsiveContainer";
import AlbumIconLinks from "./AlbumIconLinks";
import albums from "@/data/albums";
import SocialButtons from "./SocialButtons";

export default function DiscographySection() {
  return (
    <div className="p-4 pt-6 md:p-12 md:pt-20">
      <ResponsiveContainer>
        <div className="flex flex-col gap-16">
          <h2 className="text-4xl text-center font-bold">
            <a id="discography" />
            discography
          </h2>

          <SocialButtons type="music" />

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-16">
            {albums.map((a) => (
              <div
                key={a.name}
                className="flex flex-col gap-4 items-center justify-start"
              >
                <a href={a.urls.bandcamp} target="_blank">
                  <Image
                    src={a.thumbnailUrl}
                    width={336 / 2}
                    height={188 / 2}
                    alt={`${a.name} thumbnail`}
                    className="border-solid border-8 border-foreground"
                  />
                </a>
                {a.name}
                <AlbumIconLinks album={a} />
              </div>
            ))}
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
