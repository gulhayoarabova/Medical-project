import withMT from "@material-tailwind/react/utils/withMT"; 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      screens: {
        "tablet":"768px",
        "phonemcl":"420px",
        "phonemini":"320px",
    },
    extend: {
      animation: {
        spin: 'spin 1s linear infinite', // Adjust the duration here
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
});