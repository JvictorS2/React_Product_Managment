/* TODO* Dark mode */
import { extendTheme } from "native-base";
/* TODO* Light mode */
const ThemeDark = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: "#212121" /* constrate */,
      100: "#2F2F2F" /* cor principal */,
      200: "#000" /* branco puro */,
    },
    secondary: {
      50: "#7EB5A1" /* contraste */,
      100: "#3BCEAC" /* cor principal */,
      200: "#fafafa",
    },
    tertiary: {
      50: "#A85462",
      100: "#cdb4db",
    },
    text: {
      50: "#171717" /* texto junto da cor secundária */,
      100: "#FEF7FF" /* texto junto da cor principal */,
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
    mono: "Andika , sans-serif",
  },
});

export { ThemeDark };