/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(222 47% 5%)",
        foreground: "hsl(210 40% 98%)",
        primary: {
          DEFAULT: "hsl(210 100% 60%)",
          foreground: "hsl(210 40% 98%)",
        },
        muted: {
          DEFAULT: "hsl(217 19% 15%)",
          foreground: "hsl(215 20% 65%)",
        },
        border: "hsl(217 19% 15%)",
        card: {
          DEFAULT: "hsl(222 47% 7%)",
          foreground: "hsl(210 40% 98%)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
