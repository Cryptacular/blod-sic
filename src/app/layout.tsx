import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Suspense } from "react";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://blodsic.com"),
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

        <Suspense>
          <GoogleTagManager />
        </Suspense>
      </head>
      <body className={`${jost.className} bg-background text-foreground`}>
        <main className="flex flex-1 min-h-screen flex-col items-stretch">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
