/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // "font-family": "Plus Jakarta Sans", "serif",
    },
  },
  plugins: [require("daisyui")],
};
