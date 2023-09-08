/ @type {import('tailwindcss').Config} */;
export default {
  content: [
    './src//*.{js,jsx,ts,tsx}', // Specify the source files that Tailwind should scan
    './public/index.html', // Specify your HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
