/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: {
        0: "#ffffff",
        5: "#fafafa",
        10: "#f6f6f6",
        15: "#ededed",
        20: "#dedede",
        30: "#c9c9c9",
        40: "#a5a5a5",
        50: "#808080",
        60: "#666666",
        70: "#4d4d4d",
        80: "#333333",
        90: "#252525",
        100: "#1a1919",
      },
      blue: {
        10: "#eef3ff",
        20: "#d1deff",
        30: "#a8c0ff",
        40: "#6993ff",
        50: "#3069fe",
        60: "#1252f7",
        70: "#0846e4",
      },
      red: {
        10: "#fdf2f2",
        20: "#f8d4d7",
        30: "#f8b0b4",
        40: "#f57f86",
        50: "#ec5962",
        60: "#d45058",
        70: "#c2434b",
      },
      green: {
        10: "#ebfae2",
        20: "#d9f0ca",
        30: "#b3e494",
        40: "#85d355",
        50: "#68c132",
        60: "#57ad23",
        70: "#4f9c20",
      },
      orange: {
        10: "#fff2e4",
        20: "#ffe2c2",
        30: "#ffc382",
        40: "#ffa849",
        50: "#ff921b",
        60: "#ed810c",
        70: "#d87407",
      },
    },
  },
  plugins: [],
};
