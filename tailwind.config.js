// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Habilita dark mode via classe 'dark' no HTML
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Caso use a pasta src
  ],
  theme: {
    extend: {
      colors: {
        'qtech-dark': '#0d1117',
        'qtech-light': '#f0f2f5', // Cor para o modo claro
        'qtech-text-dark': '#e2e8f0', // Adicionado: Cor do texto para o modo escuro
        'qtech-text-light': '#334155', // Adicionado: Cor do texto para o modo claro
        'qtech-neon-green': '#00ffcc',
        'qtech-neon-blue': '#00ccff',
      },
      fontFamily: {
        inter: ['Inter', ...fontFamily.sans],
      },
      animation: {
        'pulse-slow': 'pulse-slow 6s infinite ease-in-out',
        'pulse-light': 'pulse-light 4s infinite ease-in-out',
        'fade-in-slow': 'fade-in-slow 2s ease-out forwards',
      },
    },
  },
  plugins: [],
}