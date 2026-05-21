/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0f172a',  // Rich Dark Slate
          main: '#1e40af',  // Corporate Blue (darker for professionalism)
          light: '#3b82f6', // Professional Sky Blue
          lighter: '#dbeafe', // Very light blue for backgrounds
        },
        accent: {
          main: '#0369a1',  // Steel Blue (corporate accent)
          light: '#e0f2fe', // Light cyan
          dark: '#075985',  // Deep blue
        },
        corporate: {
          white: '#ffffff',
          lightGray: '#f8fafc',
          mediumGray: '#e2e8f0',
          darkGray: '#64748b',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Roboto', 'Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xs: '0.8125rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5625rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '2.8125rem',
        '6xl': '3.5rem',
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-in-out',
        slideUp: 'slideUp 0.6s ease-out',
        float: 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
