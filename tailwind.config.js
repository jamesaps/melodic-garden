import formsPlugin from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mid-green": "#7a9b55",
        "product-card-background": "#edeee4" 
      },
    },
  },
  plugins: [formsPlugin],
};
