import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#006CFF",
        "color-accent": "#2A9A7B",
        "color-bg": "#F6F8FA",
        "dark-text": "#292D32",
        grey: "#7D7D7D",
        "grey-text": "#7D7D7D",
        "grey-outline": "#F2F2F2",
        "grey-bg-toggle": "#dddfe1",
        "grey-bg": "#F6F8FA",
        "input-focus": "#2563eb",
        "main-text": "#292D32",
        primary: "#202633",
        "sub-text": "#A0AEC0",
        success: "#00AC47",
        delete: "#ED4944",
        "invert-blue": "#F1F7FF",
      },
    },
  },
  plugins: [],
};
export default config;
