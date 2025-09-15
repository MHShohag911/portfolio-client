import withMT from "@material-tailwind/react/utils/withMT";
/** @type {import('tailwindcss').Config} */

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-image": "url('./src/assets/img/bg-1.jpg')",
      },
      colors: {
        'primary' : '#F85023',
        'secondary' : '#8770EA',
        'tertiary' : '#39B76B'
      },
    },
  },
  plugins: [],
});
