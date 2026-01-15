import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",

        gray: {
          100: "#f9fafb",
          200: "#e5e7eb",
          300: "#9ca3af",
          500: "#6b7280",
          700: "#2a2d32",
          800: "#16181c",
        },

        red: {
          200: "#ffb3b3",
          400: "#ff4d4d",
          500: "#e60000",
        },

        "dark-bg": "#0b0c10",
        "dark-secondary": "#14151a",
        "dark-tertiary": "#2a2c33",

        "red-primary": "#ff1a1a",

        "stroke-dark": "#3a3d45",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
