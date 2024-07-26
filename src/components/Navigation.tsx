import Image from "next/image";
import ResponsiveContainer from "./ResponsiveContainer";

export default function Navigation() {
  return (
    <div className="w-full bg-background/20 absolute md:fixed top-0">
      <ResponsiveContainer>
        <div className="flex flex-row items-center justify-center md:justify-between">
          <a href="#">
            <h1 className="flex flex-row gap-4 items-center">
              <Image
                src="/images/blod-sic-logo-white.svg"
                alt=""
                width={20}
                height={20 * 1.5}
              />
              blod [sic]
            </h1>
          </a>
          <nav className="hidden md:flex flex-row gap-4">
            <a href="#wight">wight</a>
            <a href="#discography">discography</a>
            <a href="#musicvideos">music videos</a>
            <a href="#contact">contact</a>
          </nav>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
