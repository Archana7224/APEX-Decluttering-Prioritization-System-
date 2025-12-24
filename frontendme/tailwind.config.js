export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        card: "var(--card)",
        primary: "var(--primary)",
        border: "var(--border)",
        foreground: "var(--text-main)",
        "muted-foreground": "var(--text-muted)",
        
      },
    },
  },
  plugins: [],
};