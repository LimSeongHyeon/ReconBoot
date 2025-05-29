/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        card: '#1e1e2f',
        sidebar: '#121212',
        main: '#1a1a1a',
        panel: '#1c1c1c',
        'text-primary': '#e0e0e0',
        'text-secondary': '#a0a0a0',
        accent: '#4fc3f7',
        'accent-alt': '#8ab4f8',
      },
    },
  },
  plugins: [],
} 