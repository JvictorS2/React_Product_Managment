import { extendTheme } from "native-base";
/* TODO* Light mode */
const ThemeLight = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: "#fff" /* constrate */,
      100: "#E5EBEE" /* cor principal */,
      200: "#fff" /* branco puro */,
    },
    secondary: {
      50: "#7EB5A1" /* contraste */,
      100: "#3BCEAC" /* cor principal */,
      200: "#171717",
    },
    tertiary: {
      50: "#A85462",
      100: "#a4161a",
    },
    text: {
      50: "#FEF7FF" /* texto junto da cor secundária */,
      100: "#171717" /* texto junto da cor principal */,
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
    mono: "Andika , sans-serif",
  },
});

export { ThemeLight };