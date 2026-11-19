/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#452713',
        olive: '#4d5942',
        clay: '#9b5b3e',
        brass: '#b18a52',
        paper: '#f7f3ec',
        sand: '#e9e0d3',
        line: '#d8cfc2',
        ink: '#30271f',
        muted: '#6d6257',
      },
    },
  },
  plugins: [],
}
