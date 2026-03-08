/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00d4ff",
        "primary-dark": "#00aaff",
        bg: "#0a0e17",
        card: "#111827",
        text: "#e2e8f0",
        glow: "rgba(0, 212, 255, 0.35)",
        "light-bg": "#f8fafc",
        "light-card": "#ffffff",
        "light-text": "#1e293b",
      },
    },
  },
  plugins: [],
};
