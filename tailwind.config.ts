import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],

  theme: {
    extend: {
      colors: {
        /* Brand */
        primary: "#CC191E",
        secondary: "#A21418",
        accent: "#E45A5F",

        /* Background */
        bg: "#FFFFFF",
        surface: "#FFF7F7",

        /* Text */
        ink: "#1C1A17",
        muted: "#6B7280",

        /* Border */
        line: "#F3D6D7",

        /* Status */
        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#DC2626",

        /* Additional */
        primaryLight: "#FCEBEC",
        primaryBorder: "#F5C2C4",
      },

      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },

      borderRadius: {
        xl2: "18px",
        xl3: "22px",
        xl4: "28px",
      },

      boxShadow: {
        soft:
          "0 2px 8px rgba(28,26,23,0.05), 0 12px 32px -8px rgba(28,26,23,0.08)",

        softLg:
          "0 10px 30px rgba(28,26,23,0.10), 0 24px 60px -16px rgba(204,25,30,0.18)",

        glow:
          "0 0 0 1px rgba(204,25,30,0.14), 0 18px 45px -10px rgba(162,20,24,0.22)",

        red:
          "0 20px 45px rgba(204,25,30,.20)",

        card:
          "0 12px 35px rgba(28,26,23,.07)",
      },

      backgroundImage: {
        "grad-primary":
          "linear-gradient(135deg, #CC191E 0%, #A21418 100%)",

        "grad-primary-soft":
          "linear-gradient(135deg,#FCEBEC 0%,#FFF7F7 100%)",

        "grad-soft":
          "linear-gradient(180deg,#FFFFFF 0%,#FFF7F7 100%)",

        "grad-radial-soft":
          "radial-gradient(circle at top, rgba(204,25,30,.10) 0%, rgba(204,25,30,0) 75%)",

        "grad-card":
          "linear-gradient(180deg,#FFFFFF 0%,#FCEBEC 100%)",
      },

      letterSpacing: {
        widest2: "0.22em",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },

        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-50%)",
          },
        },

        pulseGlow: {
          "0%,100%": {
            boxShadow: "0 0 0 rgba(204,25,30,0)",
          },

          "50%": {
            boxShadow: "0 0 30px rgba(204,25,30,.30)",
          },
        },
      },

      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite",
      },
    },
  },

  plugins: [],
};

export default config;