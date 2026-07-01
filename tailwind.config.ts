import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#2F3F74",
          dark: "#202C52",
          light: "#445486",
        },
        gray: {
          DEFAULT: "#5E5E5E",
          light: "#8A8A8A",
          50: "#F7F7F8",
          100: "#F0F1F3",
        },
        gold: {
          DEFAULT: "#C9A96E",
          light: "#D9C297",
          dark: "#AB8B52",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-dmsans)", "sans-serif"],
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #202C52 0%, #2F3F74 55%, #3A4D8F 100%)",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(32, 44, 82, 0.15)",
        "soft-lg": "0 25px 60px -15px rgba(32, 44, 82, 0.25)",
        gold: "0 8px 24px -6px rgba(201, 169, 110, 0.45)",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        breathe: "breathe 2.8s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
