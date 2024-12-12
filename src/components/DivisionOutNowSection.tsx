import Image from "next/image";
import ResponsiveContainer from "./ResponsiveContainer";
import Button from "./Button";

export default function DivisionOutNowSection() {
  return (
    <div className="p-4 pt-6 md:p-12 md:pt-20 bg-foreground text-background">
      <ResponsiveContainer>
        <div className="flex flex-col gap-16">
          <h2 className="text-4xl text-center font-bold">
            <a id="division" />
            new EP ‘division’ out now!
          </h2>

          <div className="flex flex-col md:flex-row gap-16 items-center justify-around">
            <div className="flex flex-col gap-6 max-w-96">
              <p>
                A journey through a dark web of lies, ritual and transformation.
              </p>
              <p>
                <span className="font-bold">
                  <em>division</em> is available on Bandcamp and all major
                  streaming services right now.
                </span>{" "}
                Enjoy this 3-track EP, ideally in the dark with some good
                headphones.
              </p>
            </div>

            <Image
              src="/images/albums/division.png"
              alt="division artwork"
              width={272}
              height={272}
              className="border-solid border-16 border-background"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Button
              variant="dark"
              target="_blank"
              href="https://blodsic.bandcamp.com/album/division"
            >
              purchase on Bandcamp!
            </Button>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
