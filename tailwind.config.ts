import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'light-red': '#B44A49',
      'red': '#AB3534',
      'dark-red': '#79231E',
      'white': '#FFFFFF',
      'light-grey': '#FAFAFA',
      't-grey': '#D7D7D7',
      'bg-grey': '#F8F8F8',
      'h-grey': '#6C6C6C',
      'a-grey': '#AFAFAF',
      'dark-grey': '#2B2B2B',
      'black': '#242323',
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }
      
      '1.5xl': {'max': '1350px'},
      // => @media (max-width: 1330px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      '2lg': {'max': '1143px'},
      // => @media (max-width: 1023px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'ss': {'max': '480px'},
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      text: ['Inter', 'sans-serif'],
      title: ['Raleway', 'serif'],
    },
    fontSize: {
      sm: ['14px', {
        lineHeight: '20px',
      }],
      base: ['16px', {
        lineHeight: '24px',
      }],
      plus: ['18px', {
        lineHeight: '26px',
      }],
      lg: ['20px', {
        lineHeight: '28px',
      }],
      xl: ['36px', {
        lineHeight: '44px',
      }],
      '2xl': ['44px', {
        lineHeight: '60px',
      }],
      '3xl': ['56px', {
        lineHeight: '72px',
      }],
    },
    extend: {
      maxWidth: {
        'c-full': '1290px',
      },
      screens: {
        'mshort': { 'raw': '(max-height: 760px)'},
        'short': { 'raw': '(max-height: 640px)'},
        'sshort': { 'raw': '(max-height: 500px)'}
      }
    },
    backgroundImage: {
      'hero-pattern': "url('/main-banner.png')",
      'services-home-banner': "url('/services/home-delivery-service-and-working-service-mind.png')"
    }
  },
  plugins: [],
}
export default config
