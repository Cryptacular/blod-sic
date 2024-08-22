import Image from "next/image";
import ResponsiveContainer from "./ResponsiveContainer";
import Button from "./Button";

export default function UpcomingSection() {
  return (
    <div className="p-4 pt-6 md:p-12 md:pt-20 bg-foreground text-background">
      <ResponsiveContainer>
        <div className="flex flex-col gap-16">
          <h2 className="text-4xl text-center font-bold">
            <a id="wight" />
            new single ‘wight’ out soon!
          </h2>

          <div className="flex flex-col md:flex-row gap-16 items-center justify-around">
            <div className="flex flex-col gap-6 max-w-96">
              <p>
                “wight” releases on 23 August 2024. A dark, brooding electronic
                song with synthesizers and bass guitar, including distorted
                samples from my daughter.
              </p>
              <p>
                Grab a cup of black coffee, a warm blanket and turn down the
                lights for this new haunting track to fuel your anxiety.
              </p>
              <p className="font-bold">
                Pre-save on Spotify or follow me on Bandcamp to be notified as
                soon as it&rsquo;s out!
              </p>
            </div>

            <Image
              src="/images/albums/wight.png"
              alt="wight single artwork"
              width={272}
              height={272}
              className="border-solid border-16 border-background"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Button
              variant="dark"
              target="_blank"
              href="https://distrokid.com/hyperfollow/blodsic/wight"
            >
              pre-save now!
            </Button>
            <Button
              variant="dark"
              target="_blank"
              href="https://blodsic.bandcamp.com/follow_me"
            >
              follow on Bandcamp!
            </Button>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
