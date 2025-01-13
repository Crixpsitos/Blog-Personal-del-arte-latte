/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "latte-light": "#E6D5C3",
        "latte-dark": "#483434", // Cambiado a un marrón más cálido
        "coffee-primary": "#6F4E37",
        "coffee-secondary": "#8B4513",
        cream: "#FAF6F1",
        mocha: "#D2691E",
        caramel: "#D2B48C",
      },
      animation: {
        pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [],
};
