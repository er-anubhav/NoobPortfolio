/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "shade-5": "#0a0a0a",
        "shade-2": "#b3b3b3",
        "shade-4": "#121212",
        "shade-3": "#3b3b3b",
        "accent-1": "#9b5dff",
        shade1: "#fff",
        "accent-3": "#5ee2ff",
        dimgray: {
          "100": "#616161",
          "200": "rgba(97, 97, 97, 0.09)",
        },
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.09)",
        },
        khaki: "#ffe074",
      },
      spacing: {},
      fontFamily: {
        "paragraph-sm": "Inter",
        outfit: "Outfit",
        subtitle: "'DM Sans'",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "9xl": "28px",
      "3xl": "22px",
      "71xl": "90px",
      "8xl": "27px",
      "26xl": "45px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
