import { extendTheme } from "native-base";
/* TODO* Light mode */
const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: "#EEEEEE" /* constrate */,
      100: "#E2E3E7" /* cor principal */,
      200: "#fff", /* branco puro */
    },
    secondary: {
      50: "#7EB5A1" /* contraste */,
      100: "#3BCEAC" /* cor principal */,
    },
    tertiary: {
      50: "#A85462",
    },
    text: {
      50: "#FEF7FF" /* texto junto da cor secundária */,
      100: "#222222" /* texto junto da cor principal */,
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
    mono: "Andika , sans-serif",
  },
});

export {theme};