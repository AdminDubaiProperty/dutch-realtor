import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#faf6ed",
          100: "#f0e6d0",
          200: "#e2d0a8",
          300: "#d4b87a",
          400: "#c9a96e",
          500: "#b8944c",
          600: "#9a7a3c",
          700: "#7c6130",
          800: "#634d28",
          900: "#4a3a1e",
        },
        dark: {
          50: "#f5f0e8",
          100: "#e8e0d4",
          200: "#c0b8a8",
          300: "#8a8070",
          400: "#5a5248",
          500: "#3a3430",
          600: "#2a2530",
          700: "#1a1f2e",
          800: "#141821",
          900: "#0c1117",
          950: "#0a0a0f",
        },
        burgundy: {
          500: "#6b2142",
          600: "#5a1a38",
        },
        emerald: {
          500: "#1a5c4a",
          600: "#164e3e",
        },
      },
      fontFamily: {
        heading: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
