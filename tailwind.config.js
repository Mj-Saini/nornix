/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero_bg_img: "url('/src/assets/images/png/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
