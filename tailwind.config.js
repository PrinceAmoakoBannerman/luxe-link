/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#0F0F10",
          soft: "#16161A",
        },
        accent: {
          DEFAULT: "#FFFFFF",
          hover: "#D9D9D9",
          dim: "rgba(255,255,255,0.35)",
        },
        ivory: "#F4F4F5",
        muted: "#9A9A9E",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ["Inter", "sans-serif"],
        logo: ["Orbitron", "sans-serif"],
      },
      keyframes: {
        heroIn: {
          "0%": { opacity: 0, transform: "translateY(18px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        heroIn: "heroIn 1s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};
