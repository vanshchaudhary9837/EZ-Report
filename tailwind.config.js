/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 🎨 Brand Colors
      colors: {
        brand: {
          DEFAULT: "#FF6B35",   // main orange
          light: "#FF9F70",     // lighter orange
          dark: "#E85A2D",      // darker orange
        },
        accent: {
          DEFAULT: "#2563EB",   // blue for highlights
          light: "#3B82F6",
          dark: "#1E40AF",
        },
        neutral: {
          DEFAULT: "#374151",   // dark gray text
          light: "#9CA3AF",     // light gray
          bg: "#F9FAFB",        // background gray
        },
      },

      // ✍️ Fonts
      fontFamily: {
        sans: ["Inter", "sans-serif"], // clean, modern
        heading: ["Poppins", "sans-serif"], // for headings
      },

      // 🌟 Shadows
      boxShadow: {
        soft: "0 2px 6px rgba(0,0,0,0.05)",
        card: "0 4px 12px rgba(0,0,0,0.08)",
        brand: "0 4px 14px rgba(255,107,53,0.3)", // orange glow
      },

      // ⭕ Border Radius
      borderRadius: {
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
      },

      // 📱 Container (centered layouts)
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
    },
  },
  plugins: [],
};
