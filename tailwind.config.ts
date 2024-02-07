import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'mocha': {
        100: '#D4BDA3',
        200: '#CBAE90',
        300: '#BE9A74',
        400: '#C5A67B',
        500: '#BB9663',
        600: '#947C61',
        700: '#7B6751',
        800: '#A98065',
        900: '#694F3D',
        1000: '#413125',
      }
    },
    extend: {
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config