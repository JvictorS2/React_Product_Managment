/* Dark mode */
import { extendTheme } from "native-base";

const ThemeDark = extendTheme({
  colors: {
    // Add new color
    primary: {
      100: "#000814" /* cor principal */,
      200: "#000" /* branco puro */,
    },
    secondary: {
      50: "#7EB5A1" /* contraste */,
      100: "#3BCEAC" /* cor principal */,
      200: "#fafafa",
    },
    tertiary: {
      100: "#cdb4db", //edit button
      200: "#ef233c", //delete button
      300: "rgba(2, 48, 71, 0.7)", //tela de login contraste (md,lg,xl)
      400: "#ccc000",
    },
    text: {
      50: "#171717" /* texto junto da cor secundária */,
      100: "#FEF7FF" /* texto junto da cor principal */,
      200: "#fff",
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
    mono: "Andika , sans-serif",
  },
});

export { ThemeDark };