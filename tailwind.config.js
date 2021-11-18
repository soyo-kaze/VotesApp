module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        votesIndigo: "#6C63FF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
