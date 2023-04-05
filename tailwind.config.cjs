const { pg_colors, pg_fonts } = require('./themes/pg-tailwindcss-theme.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './_pginfo/used-classes.html',
  ],
  theme: {
    extend: {
      colors: {
        ...pg_colors,
      },
      fontFamily: pg_fonts,
      backgroundImage: {
        logo: "url('https://images.unsplash.com/photo-1444464666168-49d633b86797?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80')",
      },
    },
  },
  plugins: [],
}
