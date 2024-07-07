import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/context/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        successBg: '#4caf50',
        errorBg: '#f44336',
        warningBg: '#ff9800',
        infoBg: '#2196f3',
      },
    },
  },
  plugins: [],
};
export default config;
