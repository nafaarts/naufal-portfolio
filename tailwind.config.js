module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      display: ["Poppins", "system-ui", "sans-serif"],
      body: ["Poppins", "system-ui", "sans-serif"],
    },
    colors: {
      grey: {
        dark: "#212121",
      },
      white: {
        DEFAULT: "#ffffff",
        soft: "#FBFAF5",
      },
      orange: {
        DEFAULT: "#FFA500",
      },
      red: {
        DEFAULT: "#FF0000",
      },
      cream: {
        DEFAULT: "#E9B783",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
