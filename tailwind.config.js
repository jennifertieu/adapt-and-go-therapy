/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#181402",
        background: "#FDF9E7",
        primary: "#FFED94",
        secondary: "#F9EDB4",
        accent: "#435CDB",
      },
    },
  },
  plugins: [],
};
