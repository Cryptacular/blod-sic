import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Suspense } from "react";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";
import { montserrat } from "@/utils/fonts";
import { MusicGroup, WithContext } from "schema-dts";
import albums from "@/data/albums";

export const metadata: Metadata = {
  metadataBase: new URL("https://blodsic.com"),
  title:
    "blod [sic] — dark ambient, experimental electronic music — Auckland, New Zealand",
  description:
    "Electronic musician 'blod [sic]' based out of Auckland, New Zealand — explore their singles, EPs, albums and music videos.",
};

const jsonLd: WithContext<MusicGroup> = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "blod [sic]",
  alternateName: "blod sic",
  url: "https://blodsic.com",
  logo: "https://blodsic.com/images/blod-sic-logo-white.svg",
  sameAs: [
    "https://blodsic.bandcamp.com/",
    "https://www.youtube.com/@blodsic",
    "https://music.youtube.com/channel/UChQK18pPxfJ1Sszq0GJzsLw",
    "https://open.spotify.com/artist/73T1x6IyH2NEm4lKew8gzk",
    "https://music.apple.com/nz/artist/blod-sic/1632780047",
    "https://soundcloud.com/blod-sic",
    "https://bsky.app/profile/blodsic.com",
    "https://www.instagram.com/blodsic/",
    "https://www.facebook.com/blodsic",
    "https://www.facebook.com/profile.php?id=61567362156865",
  ],
  genre: "Dark Ambient, Experimental Electronic",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Auckland",
    addressCountry: "New Zealand",
  },
  albums: albums.map((a) => ({
    "@type": "MusicAlbum",
    name: a.name,
    url: a.urls.bandcamp,
  })),
  musicGroupMember: {
    "@type": "Person",
    name: "Nick Mertens",
    gender: "Non-Binary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ab0000" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#82021b" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <Suspense>
          <GoogleTagManager />
        </Suspense>
      </head>
      <body className={`${montserrat.className} bg-background text-foreground`}>
        <main className="flex flex-1 min-h-screen flex-col items-stretch">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
