import { withTV } from "tailwind-variants/transformer"
import type { Config } from "tailwindcss"

const config = withTV({
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        Segoe: ["Segoe", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#0F6CBD",
          secondary: "#008bb1",
          light: "#33b3d6",
          dark: "#005f79",
          disabled: "#a3a3a3",
          subtle: "#0e63ad",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-radix")],
}) satisfies Config

export default config
