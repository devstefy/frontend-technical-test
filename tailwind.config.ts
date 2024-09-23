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
        background: "var(--bg-primary)",
        bgSecondary: "var(--bg-secondary)",

        buttonPrimary: "var(--bg-button-primary)",

        utilityBrand50: "var(--utility-brand-50)",
        utilityBrand200: "var(--utility-brand-200)",
        utilityBrand700: "var(--utility-brand-700)",

        borderSecondary: "var(--border-secondary)",

        foreground: "var(--foreground)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        textTertiary: "var(--text-tertiary)",
        textBrandTertiary: "var(--text-brand-tertiary)"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
