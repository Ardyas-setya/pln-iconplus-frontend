/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["inter-light", "Inter-light"],
      inter: ["inter-regular", "Inter-Regular"],
      interBold: ["inter-bold", "Inter-bold"],
    },
    // colors: {
    //   blueIconBasic: "#0096A7",
    //   navy: "#182657",
    // },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
