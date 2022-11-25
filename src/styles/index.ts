import { createStitches } from "@stitches/react";

export const {
  config,
  theme,
  createTheme,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      gray500: "#222222",
      gray400: "#474747",
      gray300: "#909090",
      gray200: "#D3D3D3",
      gray100: "#EDEDED",
      info100: "#DBE8F2",
      info200: "#C4D9E9",
      info300: "#88B3D2",
      info400: "#6BA0C7",
      info500: "#4D8DBC",
      info600: "#335E7D",
      info700: "#27475E",
      success700: "#275E29",
      success600: "#275E29",
      success500: "#4DBC52",
      success400: "#6BC76F",
      success300: "#88D28C",
      success200: "#C4E9C5",
      success100: "#DBF2DC",
      warnign700: "#805A21",
      warnign600: "#AA772B",
      warnign500: "#FFB341",
      warnign400: "#FFC061",
      warnign300: "#FFCC80",
      warnign200: "#FFCC80",
      warnign100: "#FFCC80",
      error: "#EB5757",
    },
    fonts: {
      roboto: "Roboto",
    },
    fontSizes: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      md: "1rem", // 16px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24px
    },
  },
});
