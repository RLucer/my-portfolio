import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    
    extend: {
      width: {
        '1/7': '100%',
        '2/7': '25%',
        '3/7': '35%',
        '4/7': '50%',
        '5/7': '',
        '6/7': '85.7142857%',
        '96': '24rem',  // ejemplo de un tamaño específico en rem
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
   
  },
  darkMode: "class",
  plugins: [nextui()],
}
