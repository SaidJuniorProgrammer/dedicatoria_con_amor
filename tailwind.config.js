/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        petroleum: {
          dark: '#041B2D',
          medium: '#06263D',
          deep: '#041E30',
          card: '#113247',
        },
        cyanCustom: {
          DEFAULT: '#2CE5F6',
          light: '#47D7E3',
          teal: '#22929F',
          darkTeal: '#1B7A85',
        }
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(100vh) scale(0.8)', opacity: '0' },
          '20%': { opacity: '0.2' },
          '80%': { opacity: '0.2' },
          '100%': { transform: 'translateY(-10vh) scale(1.1)', opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(44, 229, 246, 0.4)' },
          '50%': { boxShadow: '0 0 35px rgba(44, 229, 246, 0.8)' },
        }
      },
      animation: {
        'float-slow': 'floatUp 14s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
