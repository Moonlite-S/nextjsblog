import type { Config } from "tailwindcss";

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
        200: '#A48E75',
        300: '#725536e0',
        400: '#6b5238',
        500: '#4f381f',
        600: '#191005',
      }
    },
    extend: {
    },
  },
  plugins: [],
};
export default config;
