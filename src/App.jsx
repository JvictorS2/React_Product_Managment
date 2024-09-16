/* Dependências exeternas */
import { NativeBaseProvider } from "native-base";

import { ThemeLight } from "./theme/light.jsx";
import { ThemeDark } from "./theme/dark.jsx";

import { globalContext } from "./context/statesGlobal.jsx";
import { useContext } from "react";
import AppRoutes from "./router/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {

  const { dataGlobal } = useContext(globalContext);
  
  return (
    <NativeBaseProvider theme={dataGlobal.darkMode ? ThemeDark : ThemeLight}>
      <AppRoutes fallback={"Trocando de página"}></AppRoutes>
      <ToastContainer theme="colored" />
    </NativeBaseProvider>
  );
}
