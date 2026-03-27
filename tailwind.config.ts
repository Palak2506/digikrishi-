import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D8B3F", // main green - nav, buttons, icons
          dark: "#1E6B2E", // dark green - navbar bg, footer bg
          light: "#5AB56A", // light green - tags, badges
          tint: "#EAF6EC", // very light green - section backgrounds
        },
        accent: "#F4A322", // orange-gold - stat numbers, highlights
        neutral: {
          text: "#333333", // body text
          muted: "#666666", // subtitles
          border: "#E8E8E8", // borders
          bg: "#F8F8F8", // alternate section background
        },
      },
    },
  },
};

export default config;
