import { SiBandcamp } from "react-icons/si";
import ResponsiveContainer from "./ResponsiveContainer";
import BandcampEmbeddedPlayer from "./BandcampEmbeddedPlayer";

export default function BandcampSection() {
  return (
    <div className="p-4 pt-20 md:p-12  md:pt-20">
      <ResponsiveContainer>
        <div className="flex w-full flex-col-reverse md:flex-row gap-10 items-center justify-between text-center">
          <BandcampEmbeddedPlayer />
          <a href="https://blodsic.bandcamp.com/follow_me" target="_blank">
            <span className="text-3xl font-bold">
              <SiBandcamp size={48} className="inline-flex mr-6 mb-2" />
              <span>Follow blod [sic] on Bandcamp</span>{" "}
            </span>
          </a>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
