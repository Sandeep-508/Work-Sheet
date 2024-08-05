const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gupter: ["Gupter", "serif"],
        poppins: ["Poppins", "sans-serif"],
        eduAus: ["Edu AU VIC WA NT Hand", "cursive"]
      },      
    },
  },
  plugins: [],
});