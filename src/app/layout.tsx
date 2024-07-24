import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "blod [sic] — dark lo-fi, horrorwave, ghostwave, dark electronica — auckland, new zealand",
  description: "Electronic artist 'blod [sic]' based out of Auckland, New Zealand — explore their singles, EPs, albums and music videos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} bg-background text-foreground`}>{children}</body>
    </html>
  );
}
