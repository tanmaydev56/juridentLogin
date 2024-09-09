/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4px 60px 2px rgba(0, 0, 0, 0.25)',
      },
      borderColor: {
        'custom': '#050125',
      },
    },
  },
  plugins: [],
}

