import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-poppins)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'poppins-semibold': ['var(--font-poppins-semibold)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['4rem', { lineHeight: '5rem' }],
        'h2': ['3rem', { lineHeight: '5rem' }],
        'h3': ['1.25rem', { lineHeight: '2rem' }],
        'body': ['1.125rem', { lineHeight: '1.75rem' }],
      },
      colors: {
        'text-secondary': '#9E9E9E',
      },
    },
  },
  plugins: [],
};

export default config;
