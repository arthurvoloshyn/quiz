module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderRadius: {
      none: "0",
      1: "4px",
      2: "8px",
      DEFAULT: "8px",
      3: "12px",
      full: "9999px",
    },
    fontSize: {
      h1: "24px",
      h2: "20px",
      normal: "16px",
      button: "18px",
      secondary: "14px",
    },
    extend: {
      colors: {
        main: "#583384",
        text: "#000",
        subtle: "#666",
        text2: "#333",
      },
    },
  },
  plugins: [],
};
