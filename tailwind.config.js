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
      fontSize: {
        "54px": "54px",
      },
      fontWeight: {
        font700: "700",
      },
      gap: {
        "14px": "14px",
      },
      border: {
        solid1px: "1px solid rgba(255, 255, 255, 0.2)",
      },
      backgroundColor: {
        bgNewColor: " rgba(13, 13, 13, 1)",
      },
      margin: {
        "21%": "0 21%",
      },
    },
  },
  plugins: [],
};
