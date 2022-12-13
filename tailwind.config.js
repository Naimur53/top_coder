/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      spacing: {
        "16": '16px',
        "20": '20px',
        "24": '24px',
        "36": '36px',
        "58": '58px',
        "64": '64px',
      },
      colors: {
        "main-green": "#9DFE00",
        "main-blue": "#14D9E5"
      },
      fontSize: {
        sm: ['14px', '17px'],
        base: ['16px', '24px'],
        md: ['18px', '21px'],
        lg: ['20px', '24px'],
        xl: ['24px', '29px'],
        'semi-xl': ['40px', '45px'],
        'mid-xl': ['48px', '57px'],
        xxl: ['64px', '76px'],
        '3xl': ['101px', '122px'],
        'extra-large': ['128px', '153px'],

      },
      fontFamily: {
        'tttravels': ['TTTravels', 'sans-serif']
      },
    },
  },
  plugins: [],
}
