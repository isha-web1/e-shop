/** @type {import('tailwindcss').Config} */
//tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: 
      {
        "title": 'hsl(var(--title))', // color-variable
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui:   {
    themes: ["light", "dark", "cupcake"],
  },
}