import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          iconBlue: '#6c8eef',
          iconGray: '#8792a2',
          default: '#3c4257',
          background: '#f6f8fb',
          outline: 'rgba(58, 151, 212, 0.36)'
        },
        blue: '#635bff',
        gray: '#697386',
        slate: 'rgba(60, 66, 87, 0.12)'
      },
      boxShadow: {
        md: '0 0 0 3px rgba(58, 151, 212, 0.36)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
export default config;
