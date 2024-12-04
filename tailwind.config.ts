import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for consistent branding
        background: "var(--background)", // Light or dark background
        foreground: "var(--foreground)", // Light or dark text
        primary: "#22c55e", // Vibrant green
        "primary-light": "#34d399", // Lighter green for hover effects
        accent: "#2563eb", // Cool blue for highlights
        muted: "#f9fafb", // Light gray background for sections
        "muted-dark": "#1f2937", // Dark gray for contrast in dark mode
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Clean, modern font for body text
        display: ["Poppins", "sans-serif"], // Strong, bold font for headings
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1)", // Soft shadows for cards
      },
      borderRadius: {
        xl: "1rem", // Larger radius for modern rounded corners
      },
    },
  },
  plugins: [],
} satisfies Config;
