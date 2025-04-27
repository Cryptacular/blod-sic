import { Bree_Serif, Montserrat } from "next/font/google";

export const breeSerif = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["200", "400", "600"],
});
