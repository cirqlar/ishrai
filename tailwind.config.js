module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      first: '576px',
      second: '900px',
      third: '1000px',
    },
    extend: {},
  },
  variants: {
    extend: {
      display: ['group-focus', 'group-hover'],
    },
  },
  plugins: [],
}
