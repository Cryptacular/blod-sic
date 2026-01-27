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
            new albums ‘phlebotomy I’ and ‘phlebotomy II’ out now!
          </h2>

          <div className="flex flex-col md:flex-row gap-16 items-center justify-around">
            <div className="flex flex-col gap-6 max-w-2xl text-xl">
              <p>
                Phlebotomy I and Phlebotomy II by <em>blod [sic]</em> are
                collections of recordings from various jam sessions in 2024 and
                2025.
              </p>

              <p>
                The tracks have been mildly mixed and mastered for your
                listening pleasure, but are otherwise the same as when they were
                recorded. Some of these jam sessions are also on my YouTube
                channel if you are interested!
              </p>

              <p>
                All tracks on these albums are under the Creative Commons
                license, meaning you are free to use them however you see fit
                after purchase with attribution. If you do end up using them in
                something, please send me a message as I’d love to check it out!
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://blodsic.bandcamp.com/album/phlebotomy-i"
                target="_blank"
              >
                <Image
                  src="/images/albums/phlebotomy-I.jpg"
                  alt="phlebotomy I artwork"
                  width={272}
                  height={272}
                  className="border-solid border-16 border-background"
                />
              </a>
              <a
                href="https://blodsic.bandcamp.com/album/phlebotomy-ii"
                target="_blank"
              >
                <Image
                  src="/images/albums/phlebotomy-II.jpg"
                  alt="phlebotomy II artwork"
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
