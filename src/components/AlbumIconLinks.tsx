import { Album } from "@/models/Album";
import {
  SiBandcamp,
  SiSpotify,
  SiYoutubemusic,
  SiApplemusic,
  SiSoundcloud,
} from "react-icons/si";

interface Props {
  album: Album;
  size?: "small" | "large";
}

export default function AlbumIconLinks({ album, size = "small" }: Props) {
  const iconSize = size === "large" ? 48 : 16;
  const gapSize = size === "large" ? 8 : 4;

  return (
    <div className={`flex flex-row flex-wrap gap-${gapSize}`}>
      {album.urls.bandcamp ? (
        <a href={album.urls.bandcamp} target="_blank">
          <SiBandcamp
            aria-label={`Bandcamp link for ${album.name}`}
            size={iconSize}
          />
        </a>
      ) : null}
      {album.urls.spotify ? (
        <a href={album.urls.spotify} target="_blank">
          <SiSpotify
            aria-label={`Spotify link for ${album.name}`}
            size={iconSize}
          />
        </a>
      ) : null}
      {album.urls.ytMusic ? (
        <a href={album.urls.ytMusic} target="_blank">
          <SiYoutubemusic
            aria-label={`YouTube Music link for ${album.name}`}
            size={iconSize}
          />
        </a>
      ) : null}
      {album.urls.appleMusic ? (
        <a href={album.urls.appleMusic} target="_blank">
          <SiApplemusic
            aria-label={`Apple Music link for ${album.name}`}
            size={iconSize}
          />
        </a>
      ) : null}
      {album.urls.soundcloud ? (
        <a href={album.urls.soundcloud} target="_blank">
          <SiSoundcloud
            aria-label={`Soundcloud link for ${album.name}`}
            size={iconSize}
          />
        </a>
      ) : null}
    </div>
  );
}
