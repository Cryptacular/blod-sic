import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#1F0B0B",
      foreground: "#FFFFFF",
    },
    borderWidth: {
      DEFAULT: "1px",
      "0": "0",
      "2": "2px",
      "3": "3px",
      "4": "4px",
      "6": "6px",
      "8": "8px",
      "16": "16px",
    },
    extend: {
      backgroundImage: {
        "hero-background": "url('/images/hero-background.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
