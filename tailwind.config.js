/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray700: '#0D0D0D',
        gray600: '#1A1A1A',
        gray500: '#262626',
        gray400: '#333333',
        gray300: '#808080',
        gray200: '#D9D9D9',
        gray100: '#F2F2F2',
        bluedarkCustom: '#1E6F9F',
        blueCustom: '#4EA8DE',
        purpledarkCustom: '#5E60CE',
        purpleCustom: '#8284FA',
        dangerCustom: '#E25858',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
