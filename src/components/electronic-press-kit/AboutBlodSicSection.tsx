import Image from "next/image";
import ResponsiveContainer from "../ResponsiveContainer";
import SocialButtons from "../SocialButtons";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-hero-background bg-cover bg-center p-4 pt-20 md:p-12 md:pt-20 text-xl">
      <ResponsiveContainer>
        <div className="flex flex-col items-center gap-16">
          <h1 className="text-6xl text-center font-bold">
            electronic press kit
          </h1>

          <h2 className="text-4xl font-bold">
            <a id="about" />
            about blod [sic]
          </h2>

          <div className="flex w-full flex-col md:flex-row gap-10 items-center justify-between text-center md:text-left">
            <div className="flex flex-col gap-6">
              <p>
                blod [sic] is a one-person electronic band based out of
                Auckland, New Zealand. Under this artist name, Nick (they/them)
                creates dark ambient music, inspired by cosmic horror, liminal
                spaces and video game music - both retro and current. “Think
                lo-fi with a dash of horror, or sometimes horror with a dash of
                lo-fi. Add a sprinkling of retro on top and you’ve got it.” They
                enjoy using conventional instruments like bass guitar in unusual
                ways and building vast soundscapes using synthesizers.
              </p>

              <p>
                When younger, Nick played saxophone, guitar and bass but got
                distracted from creating music for a while. After moving to New
                Zealand, getting married and having a daughter, music production
                became a new passion.
              </p>

              <p>
                Nick would love to collaborate on any projects you might be
                working on that need a memorable soundtrack, especially games
                and film.{" "}
                <Link className="underline font-bold" href="#contact">
                  Flick me a message
                </Link>
                !
              </p>
            </div>

            <Image
              src="/images/profile.png"
              alt="blod [sic] profile"
              width={272}
              height={272}
              className="border-solid border-16 border-foreground"
            />
          </div>

          <div className="flex justify-center md:justify-start">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl text-center font-bold">
                <a id="links" />
                links
              </h2>
              <SocialButtons />
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl text-center font-bold">
                <a id="photos" />
                photos
              </h2>
              <p>
                Please find high-resolution photos, album artwork and logos in{" "}
                <a
                  className="underline font-bold"
                  href="https://drive.google.com/drive/folders/1abw6iPpEtTe_lY5Iks6Jtp5BcBEiuC_8?usp=sharing"
                  target="_blank"
                >
                  this Google Drive folder
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
