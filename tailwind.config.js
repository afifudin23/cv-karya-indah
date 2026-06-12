/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Override blue → teal (#47A5AD) so all bg-blue-*, border-blue-*, text-blue-* auto-update
        blue: {
          50:  "#eef8f9",
          100: "#d2eef1",
          200: "#9fd8dd",
          300: "#6bc1c8",
          400: "#47b2ba",
          500: "#47a5ad",
          600: "#3b8a91",
          700: "#2f6e74",
          800: "#235357",
          900: "#17383a",
          950: "#0e2426",
        },
      },
    },
  },
  plugins: [],
}
