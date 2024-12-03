import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter_bold: ["Inter_Bold", "sans-serif"],
        inter_medium: ["Inter_Medium", "sans-serif"],
        inter_regular: ["Inter_Regular", "sans-serif"],
        inter_semibold: ["Inter_SemiBold", "sans-serif"],
        inter_extrabold: ["Inter_ExtraBold", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
