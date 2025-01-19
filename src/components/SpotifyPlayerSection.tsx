import { SiSpotify } from "react-icons/si";
import ResponsiveContainer from "./ResponsiveContainer";

export default function SpotifyPlayerSection() {
  return (
    <div className="p-4 pt-20 md:p-12  md:pt-20">
      <ResponsiveContainer>
        <div className="flex w-full flex-col-reverse md:flex-row gap-10 items-center justify-between text-center">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/73T1x6IyH2NEm4lKew8gzk?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen={false}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <a
            href="https://open.spotify.com/artist/73T1x6IyH2NEm4lKew8gzk?si=qqjvqeMDSmajCkleNEg9SQ"
            target="_blank"
          >
            <span className="flex flex-col items-center gap-6 text-3xl font-bold">
              <span>Follow blod [sic] on Spotify</span> <SiSpotify size={48} />
            </span>
          </a>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
