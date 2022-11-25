import { globalCss } from ".";

export const globalStyle = globalCss({
  html: {
    height: "100vh",
  },
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
  },
  body: {
    height: "100%",
  },
  "body, input, textarea, button": {
    fontWeight: 400,
  },

  "#__next": {
    height: "100%",
  },
});
