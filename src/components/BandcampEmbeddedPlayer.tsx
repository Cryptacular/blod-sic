"use client";

export default function BandcampEmbeddedPlayer() {
  return (
    <iframe
      style={{ border: 0, width: 500, height: 241 }}
      src="https://bandcamp.com/EmbeddedPlayer/album=1197251152/size=large/bgcol=333333/linkcol=e32c14/tracklist=false/artwork=small/transparent=true/"
      seamless
      className="max-w-full"
    />
  );
}
