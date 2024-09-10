/* Dependências exeternas */
import { NativeBaseProvider } from "native-base";

import { ThemeLight } from "./theme/light.jsx";
import { ThemeDark } from "./theme/dark.jsx";

import { globalContext } from "./context/statesGlobal.jsx";
import { useContext } from "react";
import AppRoutes from "./router/index.jsx";


export default function App() {

  const { dataGlobal } = useContext(globalContext);

  return (
    <NativeBaseProvider theme={dataGlobal.darkMode ? ThemeLight : ThemeDark}>
      <AppRoutes fallback="Loading..." ></AppRoutes>
    </NativeBaseProvider>
  );
}
