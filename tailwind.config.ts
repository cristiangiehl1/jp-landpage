import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    backgroundImage: {
      parallax1: 'url("../assets/atendimento.jpg")',
      parallax2: 'url("../assets/jp-content-1.png")',
      parallax22: 'url("../assets/jp-content-11.png")',
      parallax3: 'url("../assets/consulta-online.png")',
      parallax4: 'url("../assets/agende_consulta.jpg")',
      schedule: 'url("../assets/agende_consulta.jpg")',
    },

    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'custom-gray-400': '#c0c3c9',
        'custom-gray-500': '#999ca5',
        'custom-gray-800': '#71747d',
        'custom-blue-900': '#2a3040',
        'custom-skin-500': '#e6d8d8',
        'custom-brown-500': '#8a664e',
        'custom-brown-300': '#a99789',
        'custom-orange-500': '#f0611f',
        'custom-menu': 'rgba(255, 255, 255, 0.1)',
        'custom-form': 'rgba(255, 255, 255, 0.6)',
      },
      fontFamily: {
        manrope: 'var(--font-manrope)',
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shake: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translate(-5px, 5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translate(5px, -5px)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        colorChange: {
          '0%, 100%': { color: '#999ca5' }, // Vermelho
          '50%': { color: '#f0611f' }, // Verde
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        gradient: 'gradient 15s ease infinite',
        shake: 'shake 5s infinite alternate',
        fadeOut: 'fadeOut .5s ease-in-out forwards',
        colorChange: 'colorChange 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/aspect-ratio'),
  ],
} satisfies Config

export default config
