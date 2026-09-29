/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        nova: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },

      boxShadow: {
        soft: "0 10px 40px rgba(15, 23, 42, 0.08)",
        dark: "0 10px 40px rgba(0, 0, 0, 0.35)",
      },

      borderRadius: {
        "4xl": "2rem",
      },
    },
  },

  plugins: [],
};