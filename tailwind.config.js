/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "576px",
      "sm-max": { max: "576px" },
      md: "768px",
      "md-max": { max: "768px" },
      lg: "992px",
      "lg-max": { max: "992px" },
      xl: "1200px",
      "xl-max": { max: "1200px" },
      "2xl": "1320px",
      "2xl-max": { max: "1320px" },
    },
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite",
      "fade-up": "fade-up 1.5s both",
    },
    backdropBlur: ({ theme }) => theme("blur"),
    backdropBrightness: ({ theme }) => theme("brightness"),
    backdropContrast: ({ theme }) => theme("contrast"),
    backdropGrayscale: ({ theme }) => theme("grayscale"),
    backdropHueRotate: ({ theme }) => theme("hueRotate"),
    backdropInvert: ({ theme }) => theme("invert"),
    backdropOpacity: ({ theme }) => theme("opacity"),
    backdropSaturate: ({ theme }) => theme("saturate"),
    backdropSepia: ({ theme }) => theme("sepia"),
    backgroundColor: ({ theme }) => theme("colors"),
    backgroundImage: ({ theme }) => ({
      none: "none",
      "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
      "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
      "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))",
    }),
    backgroundOpacity: ({ theme }) => theme("opacity"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      "x-25": "25% 0",
      "y-50": "0 50%",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      150: "150%",
    },
    blur: {
      0: "0",
      none: "0",
      sm: "4px",
      DEFAULT: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "30px",
      "3xl": "64px",
    },
    boxShadow: {
      "xxs": "0 1px 5px 1px #ddd",
      "xs": "0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08)",
      "sm": "0 .25rem .375rem -.0625rem hsla(0,0%,8%,.12),0 .125rem .25rem -.0625rem hsla(0,0%,8%,.07)",
      "md": "0 4px 6px rgba(50,50,93,.1),0 1px 3px rgba(0,0,0,.08)",
      "lg": "0 2px 12px 0 rgba(0,0,0,.16)",
      "xl": "0 0 2rem 0 rgba(136,152,170,.15)",
      "dark-xl": "0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)",
      "2xl": "0 .3125rem .625rem 0 rgba(0,0,0,.12)",
      "3xl": "0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)",
      "primary-outline": "0 3px 9px rgba(50,50,9,0),3px 4px 8px rgba(94,114,228,.1)",
      blur: "inset 0 0 1px 1px hsla(0,0%,100%,.9),0 20px 27px 0 rgba(0,0,0,.05)",
      "dark-blur": "inset 0 0 1px 1px hsla(0,0%,100%,.4),0 20px 27px 0 rgba(0,0,0,.05)",
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "none",
    },
    boxShadowColor: ({ theme }) => theme("colors"),
    container: {
      center: true,
      padding: "1.5rem",
      "max-width": {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px",
      },
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,

      slate: {
        DEFAULT: colors.slate,
        50: "#f8fafc",
        100: "#dee2e6",
        200: "#cbd3da",
        300: "#a8b8d8",
        400: "#8392ab",
        500: "#67748e",
        600: "#627594",
        700: "#344767",
        750: "#323a54",
        800: "#3a416f",
        850: "#111c44",
        900: "#051139",
      },

      gray: {
        DEFAULT: colors.gray,
        50: "#f8f9fa",
        100: "#ebeff4",
        200: "#e9ecef",
        300: "#d2d6da",
        400: "#ced4da",
        500: "#adb5bd",
        600: "#6c757d",
        700: "#495057",
        800: "#252f40",
        850: "#1a2035",
        900: "#141727",
      },

      zinc: {
        DEFAULT: colors.zinc,
        50: "#fafafa",
        100: "#f4f4f5",
        200: "#e4e4e7",
        300: "#d4d4d8",
        400: "#a1a1aa",
        500: "#71717a",
        600: "#52525b",
        700: "#212529",
        800: "#212229",
        900: "#18181b",
      },

      neutral: {
        DEFAULT: colors.neutral,
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#111111",
      },

      stone: {
        DEFAULT: colors.stone,
        50: "#fafaf9",
        100: "#f5f5f4",
        200: "#e7e5e4",
        300: "#d6d3d1",
        400: "#a8a29e",
        500: "#78716c",
        600: "#57534e",
        700: "#44403c",
        800: "#292524",
        900: "#1c1917",
      },

      red: {
        DEFAULT: colors.red,
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#f53939",
        600: "#f5365c",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d",
      },

      orange: {
        DEFAULT: colors.orange,
        50: "#fff7ed",
        100: "#ffedd5",
        200: "#fed7aa",
        300: "#fdba74",
        400: "#fb923c",
        500: "#fb6340",
        600: "#f56036",
        700: "#c2410c",
        800: "#9a3412",
        900: "#7c2d12",
      },

      amber: {
        DEFAULT: colors.amber,
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f",
      },

      yellow: {
        DEFAULT: colors.yellow,
        50: "#fefce8",
        100: "#fef9c3",
        200: "#fef08a",
        300: "#fde047",
        400: "#fbcf33",
        500: "#fbb140",
        600: "#ca8a04",
        700: "#a16207",
        800: "#854d0e",
        900: "#713f12",
      },

      lime: {
        DEFAULT: colors.lime,
        50: "#f7fee7",
        100: "#ecfccb",
        200: "#d9f99d",
        300: "#bef264",
        400: "#98ec2d",
        500: "#82d616",
        600: "#65a30d",
        700: "#4d7c0f",
        800: "#3f6212",
        900: "#365314",
      },

      green: {
        DEFAULT: colors.green,
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#17ad37",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
      },

      emerald: {
        DEFAULT: colors.emerald,
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#2dce89",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
      },

      teal: {
        DEFAULT: colors.teal,
        50: "#f0fdfa",
        100: "#ccfbf1",
        200: "#99f6e4",
        300: "#5eead4",
        400: "#2dcecc",
        500: "#14b8a6",
        600: "#0d9488",
        700: "#0f766e",
        800: "#115e59",
        900: "#134e4a",
      },

      cyan: {
        DEFAULT: colors.cyan,
        50: "#ecfeff",
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#21d4fd",
        500: "#11cdef",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },

      sky: {
        DEFAULT: colors.sky,
        50: "#f0f9ff",
        100: "#f6f9fc",
        200: "#bae6fd",
        300: "#7dd3fc",
        400: "#38bdf8",
        500: "#0ea5e9",
        600: "#3ea1ec",
        700: "#0369a1",
        800: "#075985",
        900: "#0e456d",
      },

      blue: {
        DEFAULT: colors.blue,
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#5e72e4",
        600: "#2152ff",
        700: "#1171ef",
        800: "#344e86",
        900: "#00007d",
      },

      indigo: {
        DEFAULT: colors.indigo,
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81",
      },

      violet: {
        DEFAULT: colors.violet,
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#825ee4",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95",
      },

      purple: {
        DEFAULT: colors.purple,
        50: "#faf5ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7928ca",
        800: "#6b21a8",
        900: "#581c87",
      },

      fuchsia: {
        DEFAULT: colors.fuchsia,
        50: "#fdf4ff",
        100: "#fae8ff",
        200: "#f5d0fe",
        300: "#e293d3",
        400: "#e879f9",
        500: "#cb0c9f",
        600: "#c026d3",
        700: "#a21caf",
        800: "#830866",
        900: "#701a75",
      },

      pink: {
        DEFAULT: colors.pink,
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ff0080",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843",
      },

      rose: {
        DEFAULT: colors.rose,
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#ff667c",
        500: "#f43f5e",
        600: "#e11d48",
        700: "#be123c",
        800: "#9f1239",
        900: "#881337",
      },
    }),
    dropShadow: {
      sm: "0 1px 1px rgb(0 0 0 / 0.05)",
      DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
      md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
      lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
      xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
      "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
      none: "0 0 #0000",
    },
    fontFamily: {
      sans: ["Poppins"],
      serif: ['SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace', "serif"],
      body: ["Roboto", "sans-serif"],
      awesome: ["FontAwesome"],
    },
    fontSize: ({ theme }) => ({
      ...theme("spacing"),
      "size-inherit": "inherit",
      "3xs": ["0.5rem", { lineHeight: "1rem" }],
      xxs: ["0.65rem", { lineHeight: "1rem" }],
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["5rem", { lineHeight: "1" }],
      "9xl": ["6rem", { lineHeight: "1" }],
      "10xl": ["8rem", { lineHeight: "1" }],
      "banner-calculate": ["calc(1.625rem+4.5vw)"],
    }),
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
    require("daisyui"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities({
        "bg-gradient": (angle) => ({
          "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
        }),
      });
    }),
    plugin(function ({ addComponents, addUtilities }) {
      addUtilities({
        ".transform3d": {
          transform: "perspective(999px) rotateX(0deg) translateZ(0)",
        },
        ".transform3d-hover": {
          transform: "perspective(999px) rotateX(7deg) translate3d(0,-4px,5px)",
        },
        ".transform-dropdown": {
          transform: "perspective(999px) rotateX(-10deg) translateZ(0) translate3d(0,37px,0)",
        },
        ".transform-dropdown-show": {
          transform: "perspective(999px) rotateX(0deg) translateZ(0) translate3d(0,37px,5px)",
        },
        ".flex-wrap-inherit": {
          "flex-wrap": "inherit",
        },
      });
      const typography = {
        a: {
          "letter-spacing": "-0.025rem",
        },

        hr: {
          margin: "1rem 0",
          border: "0",
          opacity: ".25",
        },

        img: {
          maxWidth: "none",
        },

        label: {
          display: "inline-block",
        },

        small: {
          "font-size": ".875em",
        },

        svg: {
          display: "inline",
        },

        table: {
          "border-collapse": "inherit",
        },

        "h1, h2, h3, h4": {
          "letter-spacing": "-0.05rem",
        },

        "h1, h2, h3": {
          "font-weight": "700",
        },
        "h4, h5, h6": {
          "font-weight": "600",
        },

        h1: {
          "font-size": "3rem",
          "line-height": "1.25",
        },
        h2: {
          "font-size": "2.25rem",
          "line-height": "1.3",
        },
        h3: {
          "font-size": "1.875rem",
          "line-height": "1.375",
        },
        h4: {
          "font-size": "1.5rem",
          "line-height": "1.375",
        },
        h5: {
          "font-size": "1.25rem",
          "line-height": "1.375",
        },
        h6: {
          "font-size": "1rem",
          "line-height": "1.625",
        },
      };
      addComponents(typography);
    }),
  ],
  daisyui: {
    themes: [
      "cupcake",
      "halloween",
    ],
    darkTheme: "halloween",
  },
}
