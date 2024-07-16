/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        // padding: "1rem",
      },
      fontFamily: {
        sans: ["vazir"],
      },
    },
    plugins: [],
  },
};
