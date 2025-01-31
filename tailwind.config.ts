import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      hero: "url(/images/hero.jpg)",
      grid: "url(/images/grid.png)",
      third: "url(/images/samsung-memory.jpg)",
    },
    extend: {
      fontFamily: {
        primary: ["'DM Serif Display'", "serif"],
        secondary: ["Jost", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#292f36",
          hover: "#343e4a",
        },
        secondary: "#4d5053",
        accent: {
          DEFAULT: "#cda247",
          secondary: "#f4f0ec",
          hover: "#b88c5d",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
