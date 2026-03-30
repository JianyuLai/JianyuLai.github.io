/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a2744',
          light:   '#243357',
          dim:     '#141f38',
        },
        teal: {
          DEFAULT: '#2a9d8f',
          light:   '#38b2a5',
          dim:     '#21796e',
        },
        cream: '#f7f5f0',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        sans:  ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        content: '720px',
        wide:    '1100px',
      },
    },
  },
  plugins: [],
};
