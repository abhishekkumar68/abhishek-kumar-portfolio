/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b1120", // Deep Navy from screenshots
        surface: "#111827", // Cards and elevated layers
        primary: "#3b82f6", // Vibrant Blue
        secondary: "#8b5cf6", // Purple accents
        textPrimary: "#f3f4f6", // Very light gray (almost white)
        textSecondary: "#9ca3af", // Muted slate gray
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}