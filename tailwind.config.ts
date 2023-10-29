import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      ...colors,
      lightBlue: colors.sky,
      warmGray: colors.stone,
      trueGray: colors.neutral,
      coolGray: colors.gray,
      blueGray: colors.slate,
      lightPurple: {
        50: '#f4f6fa',
        100: '#e5e8f4',
        200: '#d1d7ec',
        300: '#b2bdde',
        400: '#8d9bcd',
        500: '#727dbf',
        600: '#5f66b1',
        700: '#5456a1',
        800: '#484985',
        900: '#3e3f6a',
        950: '#2a2a44'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
};
export default config;
