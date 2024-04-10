/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["DM Sans", "sans-serif"],
      },
      spacing: {
        "21rem": "21rem",
      },
      inset: {
        "21rem": "21rem",
      },
    },
  },
  plugins: [],
};
