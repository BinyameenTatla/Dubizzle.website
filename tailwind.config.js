// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12%)" },
        },
      },
      animation: {
        "bounce-slow": "bounceSlow 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
