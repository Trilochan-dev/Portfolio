/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
      },
      colors: {
        // Light colors
        "primary-light": "#F7F8FC",
        "secondary-light": "#FFFFFF",
        "ternary-light": "#f6f7f8",

        // Dark colors
        "primary-dark": "#0D2438",
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",
      },
      fontFamily: {
        Raleway: '"Raleway", sans-serif',
      },
      screens: {
        xlg:"1349px",
        xs: "480px",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '13': 'repeat(13, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  plugins: [],
};
