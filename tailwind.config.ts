const defaultTheme = require("tailwindcss/defaultTheme");
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('/bg-img.jpeg')",
      },
      fontFamily: {
        bodyFont: ["Urbanist", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bodyColor: "#F5F5F5",
        bgLight: "#1010100d",
        darkText: "#242424",
        lightText: "#a5a5a5",
      },
    },
  },
  plugins: [],
};
export default config;
