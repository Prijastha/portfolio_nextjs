// import { Roboto } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        orange: {
          900: "#ffcf74",
          800: "#F9965D",
          700: "#e8912f",
        },
        black: {
          DEFAULT: "#000",
          900: "#18181b",
          800: "#27272a",
          700: "#111216",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
