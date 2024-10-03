/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // Use 'class' for manually toggling dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
