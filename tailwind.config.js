/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F93B1D',
        white: '#FFFFFF',
        black: '#000000',
        grey: '#F9F9F9',
        btnAddMoreFields: '#62A1EB',
        btnImageUpload: '#0E80BF',
        btnPageChange: '#6B40E3',
        btnPageChangeHover: '#7949FF',
        btnPageChangeActive: '#512FAF',
        inputPlaceholder: 'rgba(0, 0, 0, 0.6)',
        validationDefault: '#BCBCBC',
        validationSuccess: '#98E37E',
        validationDanger: '#EF5050',
        hint: '#2E2E2E',
        offBlack: '#1A1A1A',
        caret: '#6499FF',
        underline: '#C1C1C1',
      },
      fontFamily: {
        primary: '"Helvetica Neue"',
      },
      backgroundImage: {
        pageOneBg: "url('/src/assets/images/bgPage1.png')",
      },
      fontWeight: {
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
      },
    },
  },
  plugins: [],
};
