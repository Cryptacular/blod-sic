"use client";

export default function BandcampEmbeddedPlayer() {
  return (
    <iframe
      style={{ border: 0, width: 500, height: 241 }}
      src="https://bandcamp.com/EmbeddedPlayer/album=2738411514/size=large/bgcol=333333/linkcol=e32c14/artwork=small/transparent=true/"
      seamless
    />
  );
}
