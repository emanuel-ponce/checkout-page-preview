import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/layouts/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
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
        blue: {
          100: '#E5EFFE',
          200: '#C0D8FC',
          300: '#81B2F9',
          400: '#635bff',
          500: '#034BB6',
          600: '#02327A'
        },
        gray: {
          100: '#FBFCFC',
          200: '#F7F8FA',
          300: '#ECEEF2',
          400: '#D9DDE4',
          500: '#697386',
          600: '#868B97',
          700: '#595D65',
          800: '#3c4257'
        },
        orange: {
          100: '#FFEDD5',
          200: '#FFDAB3',
          300: '#FFC48B',
          400: '#FFA657',
          500: '#BB5504',
          600: '#A34603',
          700: '#8E3A02',
          800: '#773201'
        },
        yellow: {
          100: '#FFF7E5',
          200: '#FFEEC2',
          300: '#FFDE92',
          400: '#FFD769',
          500: '#E6B100',
          600: '#E6C200',
          700: '#CCAA00',
          800: '#B39600'
        }
      },
      boxShadow: {
        'md-blue': '0 0 0 3px rgba(58, 151, 212, 0.36)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    },
    screens: {
      'desktop-xl': { min: '1442px' },
      'desktop-m': { max: '1440px' },
      'tablet-l': { max: '990px' },
      'tablet-m': { max: '767px' },
      'mobile-l': { max: '480px' },
      'mobile-m': { max: '375px' }
    }
  },
  plugins: []
};
export default config;
