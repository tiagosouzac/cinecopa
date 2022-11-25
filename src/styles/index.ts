import { createStitches } from "@stitches/react"
import { createGlobalStyle } from "styled-components"

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
      white: "#ffffff",
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
})

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

a{
  color: inherit;
  text-decoration: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`

export { GlobalStyle }
