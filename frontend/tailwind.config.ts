import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "custom-red": " #C31807",
        "custom-green":' #08483A',
        "custom-bg-fan":' #FFF9EA',
        "custom-orange":' #FBBA14',
        "custom-button-filter":' #004C371A'



      },
      fontFamily: {
        inter: ['Inter Tight','Poppins', 'sans-serif'],
        poppins:['Poppins','sans-serif'],
        oswald: ['Oswald', 'sans-serif'], // Add the Inter Tight font
      },  
    },
  },
  plugins: [],
} satisfies Config;
