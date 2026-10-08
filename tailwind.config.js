/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // permite alternar entre light/dark con la clase 'dark'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // azul principal
          dark: "#1e40af",    // azul más oscuro
        },
        secondary: {
          DEFAULT: "#10b981", // verde elegante
          dark: "#047857",
        },
        neutral: {
          light: "#f3f4f6",
          DEFAULT: "#9ca3af",
          dark: "#111827",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};