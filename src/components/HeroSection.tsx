import Image from "next/image";
import ResponsiveContainer from "./ResponsiveContainer";
import SocialButtons from "./SocialButtons";

export default function HeroSection() {
  return (
    <div className="bg-hero-background bg-cover bg-center p-4 pt-20 md:p-12  md:pt-20">
      <ResponsiveContainer>
        <div className="flex w-full flex-col md:flex-row gap-10 items-center justify-between text-center md:text-left">
          <div className="flex flex-col gap-6">
            <h1 className="text-6xl font-bold">blod [sic]</h1>
            <p className="text-2xl">
              dark lo-fi | horrorwave | dark electronica | ghostwave
            </p>
            <p className="text-2xl">auckland, new zealand</p>
            <div className="flex justify-center md:justify-start">
              <SocialButtons />
            </div>
          </div>

          <Image
            src="/images/profile.png"
            alt="blod [sic] profile"
            width={272}
            height={272}
            className="border-solid border-16 border-foreground"
          />
        </div>
      </ResponsiveContainer>
    </div>
  );
}
