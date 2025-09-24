import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-image-1": "url('./src/assets/img/bg-1.jpg')",
        "banner-image-3": "url('./src/assets/img/bg-3.jpg')"
      },
      colors: {
        'primary' : '#3A1078',
        'secondary' : '#4E31AA',
        'tertiary' : '#3795BD',
        'quaternary': "#F85023"
      },
    },
  },
  plugins: [],
});
