import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all files in src for Tailwind to scan
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
