/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#DB4444",
        secondary: "#1CC8EE",
        error: "#ED2E7E",
        success: "#00BA88",
        warning: "#F4B740",
        title: "#14142B",
        body: "#4E4B66",
        label: "#6E7191",
        placeholder: "#A0A3BD",
        bg: "#F7F7FC",
      },
      fontFamily: {
        sans: ["var(--font-roboto)"],
        mono: ["var(--font-roboto-mono)"],
      },
    },
  },
  plugins: [nextui()],
};
