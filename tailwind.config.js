module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      bfirst: '500px',
      first: '760px',
      second: '880px',
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
