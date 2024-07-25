import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "blod [sic] — dark lo-fi, horrorwave, ghostwave, dark electronica — auckland, new zealand",
  description:
    "Electronic artist 'blod [sic]' based out of Auckland, New Zealand — explore their singles, EPs, albums and music videos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
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
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className={`${jost.className} bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
