import Image from "next/image";
import ResponsiveContainer from "./ResponsiveContainer";
import Button from "./Button";

export default function UpcomingSection() {
  return (
    <div className="p-4 pt-6 md:p-12 md:pt-20 bg-foreground text-background">
      <ResponsiveContainer>
        <div className="flex flex-col gap-16">
          <h2 className="text-4xl text-center font-bold">
            <a id="the-space-between" />
            new album ‘the space between’ out soon!
          </h2>

          <div className="flex flex-col md:flex-row gap-16 items-center justify-around">
            <div className="flex flex-col gap-6 max-w-96 text-xl">
              <p>
                <strong>the space between</strong> is <em>blod [sic]</em>’s
                first full-length album, exploring what’s hidden amongst the
                horrors in the sky.
              </p>
              <p className="font-bold">
                Sign up on Bandcamp to be notified when preorders open!
              </p>
            </div>

            <Image
              src="/images/albums/the-space-between.png"
              alt="the space between artwork"
              width={272}
              height={272}
              className="border-solid border-16 border-background"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Button
              variant="dark"
              target="_blank"
              href="https://blodsic.bandcamp.com/follow_me"
            >
              Follow blod [sic] on Bandcamp!
            </Button>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
