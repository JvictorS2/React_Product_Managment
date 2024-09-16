/* Light mode */
import { extendTheme } from "native-base";

const ThemeLight = extendTheme({
  colors: {
    // Add new color
    primary: {
      100: "#E5EBEE" /* cor principal */,
      200: "#fff" /* branco puro */,
    },
    secondary: {
      50: "#7EB5A1" /* contraste */,
      100: "#3BCEAC" /* cor principal */,
      200: "#171717",
    },
    tertiary: {
      100: "#cdb4db", //edit button
      200: "#ef233c", //delete button,
      300: "#faf9f9cc",
      400: "#ccc000",
    },
    text: {
      50: "#FEF7FF" /* texto junto da cor secundária */,
      100: "#171717" /* texto junto da cor principal */,
      200: "#A29E99",
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
    mono: "Andika , sans-serif",
  },
});

export { ThemeLight };