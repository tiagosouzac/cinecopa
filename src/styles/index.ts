import { createStitches } from "@stitches/react"

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
    colors: {},
    fonts: {},
    fontSizes: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      md: "1rem", // 16px
      lg: "1.25rem", // 20px
      xl: "1.5rem", // 24px
    },
  },
})
