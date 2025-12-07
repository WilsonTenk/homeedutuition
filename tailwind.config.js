/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#dce4ed',
          200: '#becddb',
          300: '#94acc2',
          400: '#6d8ca6',
          500: '#4e6f8a',
          600: '#3d5973',
          700: '#32485e',
          800: '#2c3e4f',
          900: '#1E2A38', // Brand Dark Blue
          950: '#161f2b',
        },
        accent: {
          50: '#fff0f5',
          100: '#ffe3ec',
          200: '#ffc6db',
          300: '#ff99be',
          400: '#ff5c96',
          500: '#ff2970',
          600: '#C00050', // Brand Magenta/Pink
          700: '#be0042',
          800: '#9e003a',
          900: '#830636',
          950: '#4a001a',
        }
      },
      backgroundImage: {
        'grid-white': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        shimmer: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-200% 0' },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

