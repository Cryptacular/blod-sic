import Image from "next/image";
import ResponsiveContainer from "./ResponsiveContainer";
import Button from "./Button";

export default function UpcomingSection() {
  return (
    <div className="p-4 pt-6 md:p-12 md:pt-20 bg-foreground text-background">
      <ResponsiveContainer>
        <div className="flex flex-col gap-16">
          <h2 className="text-4xl text-center font-bold">
            <a id="phlebotomy" />
            new singles 'raven' and 'pale wyrm' out now!
          </h2>

          <div className="flex flex-col lg:flex-row gap-16 items-center justify-around">
            <div className="flex flex-col gap-6 max-w-2xl text-xl">
              <p>
                Two new tracks exploring dungeon synth and drum &amp; bass mixed with a good amount of existential dread.
              </p>
              <p>Both available on Bandcamp now. <em>Raven</em> also comes with the field recordings of rain that I recorded as part of your purchase.</p>
            </div>

            <div className="flex flex-row gap-4">
              <a
                href="https://blodsic.bandcamp.com/album/raven"
                target="_blank"
              >
                <Image
                  src="/images/albums/raven.png"
                  alt="raven artwork"
                  width={272}
                  height={272}
                  className="border-solid border-16 border-background"
                />
              </a>
              <a
                href="https://blodsic.bandcamp.com/track/pale-wyrm"
                target="_blank"
              >
                <Image
                  src="/images/albums/pale-wyrm.jpg"
                  alt="pale wyrm artwork"
                  width={272}
                  height={272}
                  className="border-solid border-16 border-background"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Button
              variant="dark"
              target="_blank"
              href="https://blodsic.bandcamp.com"
            >
              Listen on Bandcamp
            </Button>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
