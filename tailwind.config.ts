import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // primary: "#902066",
        primary: {
          DEFAULT: '#902066',
          50: '#fcf3fa',
          100: '#fae9f7',
          200: '#f8d2f0',
          300: '#f3aee2',
          400: '#eb7bcf',
          500: '#e054b8',
          600: '#ce349a',
          700: '#b2247f',
          800: '#902066',
          900: '#7b2059',
          950: '#4b0c33',
        },
        secondary: "#ffc529",
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
export default config;
