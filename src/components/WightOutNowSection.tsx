import Image from "next/image";
import ResponsiveContainer from "./ResponsiveContainer";
import AlbumIconLinks from "./AlbumIconLinks";
import albums from "@/data/albums";

const album = albums.find((a) => a.id === "wight");

export default function WightOutNowSection() {
  if (!album) {
    console.error("Album not found!");
    return <></>;
  }

  return (
    <div className="p-4 pt-6 md:p-12 md:pt-20 bg-foreground text-background">
      <ResponsiveContainer>
        <div className="flex flex-col gap-16">
          <h2 className="text-4xl text-center font-bold">
            <a id="wight" />
            ‘wight’ is out now!
          </h2>

          <div className="flex flex-col md:flex-row gap-16 items-center justify-around">
            <div className="flex flex-col gap-6 max-w-96">
              <p>
                A dark, brooding electronic song with synthesizers and bass
                guitar, including distorted samples from my daughter.
              </p>
              <p>
                Grab a cup of black coffee, a warm blanket and turn down the
                lights for this new haunting track to fuel your anxiety.
              </p>
              <p className="text-xl">Stream it now!</p>
            </div>

            <Image
              src="/images/albums/wight.png"
              alt="wight single artwork"
              width={272}
              height={272}
              className="border-solid border-16 border-background"
            />
          </div>

          <div className="flex justify-center">
            <AlbumIconLinks album={album} size="large" />
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
