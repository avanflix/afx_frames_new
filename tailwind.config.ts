import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#B4552F",
        secondary: "#8F4325",
        accent: "#D9A066",

        bg: "#FFFFFF",
        surface: "#F7F4EE",

        ink: "#1C1A17",
        muted: "#7A7469",

        line: "#E8E3D9",

        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#DC2626",

        primaryLight: "#FBF1E8",
        primaryBorder: "#E8D6C8",
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
          "0 10px 30px rgba(28,26,23,0.10), 0 24px 60px -16px rgba(180,85,47,0.18)",

        glow:
          "0 0 0 1px rgba(180,85,47,0.14), 0 18px 45px -10px rgba(143,67,37,0.22)",

        red:
          "0 20px 45px rgba(180,85,47,.18)",

        card:
          "0 12px 35px rgba(28,26,23,.07)",
      },

      backgroundImage: {
        "grad-primary":
          "linear-gradient(135deg, #B4552F 0%, #8F4325 100%)",

        "grad-primary-soft":
          "linear-gradient(135deg,#FBF1E8 0%,#F7F4EE 100%)",

        "grad-soft":
          "linear-gradient(180deg,#FFFFFF 0%,#F7F4EE 100%)",

        "grad-radial-soft":
          "radial-gradient(circle at top, rgba(180,85,47,.10) 0%, rgba(180,85,47,0) 75%)",

        "grad-card":
          "linear-gradient(180deg,#FFFFFF 0%,#FBF1E8 100%)",
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
            boxShadow: "0 0 0 rgba(235,59,59,0)",
          },

          "50%": {
            boxShadow: "0 0 30px rgba(235,59,59,.28)",
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