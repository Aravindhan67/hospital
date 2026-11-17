/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hospital: {
          primary: '#0F766E',        // Deep Medical Teal
          'primary-hover': '#115E59',
          secondary: '#0D9488',      // Teal Accent
          'secondary-hover': '#047857',
          mint: '#E6F4F1',           // Soft Mint badge & card highlight
          'mint-dark': '#CCECE5',
          background: '#F4F7F8',     // Calm Canvas background
          surface: '#FFFFFF',        // Pure White card / sheet
          'text-primary': '#1E293B', // High-contrast Slate-800
          'text-secondary': '#64748B', // Muted Slate-500
          border: '#E2E8F0',         // Divider Slate-200
          success: '#15803D',        // Clinical Green
          warning: '#D97706',        // Alert Amber
          error: '#DC2626'           // Critical Red
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(15, 118, 110, 0.05), 0 1px 4px -1px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 12px -2px rgba(30, 41, 59, 0.06), 0 2px 6px -1px rgba(30, 41, 59, 0.03)',
        'modal': '0 20px 25px -5px rgba(15, 118, 110, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }
    },
  },
  plugins: [],
}
