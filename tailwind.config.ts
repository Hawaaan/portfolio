
import type { Config } from "tailwindcss";
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f2e7ff",
          100: "#e5d0ff",
          200: "#c7a6ff",
          300: "#a97cff",
          400: "#8b52ff",
          500: "#6d28ff",
          600: "#581fe6",
          700: "#4417b3",
          800: "#2f0f80",
          900: "#1b074d"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.35)",
      },
      backgroundImage: {
        grid: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: { grid: "24px 24px" },
    },
  },
  plugins: [],
} satisfies Config;
