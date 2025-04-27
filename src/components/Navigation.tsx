import Image from "next/image";
import ResponsiveContainer from "./ResponsiveContainer";
import Link from "next/link";
import { breeSerif } from "@/utils/fonts";

interface Props {
  menuItems: string[];
}

export default function Navigation({ menuItems }: Props) {
  return (
    <div className="w-full bg-background/20 absolute md:fixed top-0">
      <ResponsiveContainer>
        <div className="flex flex-row items-center justify-center md:justify-between">
          <Link href="/">
            <h1
              className={`flex flex-row gap-4 items-center text-xl ${breeSerif.className}`}
            >
              <Image
                src="/images/blod-sic-logo-white.svg"
                alt=""
                width={20}
                height={20 * 1.5}
              />
              blod [sic]
            </h1>
          </Link>
          <nav className="hidden md:flex flex-row gap-4">
            {menuItems.map((mi) => (
              <Link
                href={`#${mi.toLocaleLowerCase().replaceAll(" ", "-")}`}
                key={mi}
              >
                {mi}
              </Link>
            ))}
          </nav>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
