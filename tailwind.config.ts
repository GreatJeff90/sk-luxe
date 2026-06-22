// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Luxury Palette
        brand: {
          green: "#1B3B2B",    // Deep Forest Green (Text/Buttons)
          cream: "#F9F7F2",    // Soft Cream (Backgrounds)
          accent: "#D4AF37",   // Optional: Add a subtle Gold for accents
        },
      },
      fontFamily: {
        // Suggestion: A Serif for headings (luxury) and Sans for body
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;