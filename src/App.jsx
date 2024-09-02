import React, { lazy, Suspense, useContext } from "react";

/* Dependências exeternas */
import { NativeBaseProvider } from "native-base";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ThemeLight } from "./theme/light.jsx";
import { ThemeDark } from "./theme/dark.jsx";
import { globalContext, MyContext } from "./context/statesGlobal.jsx";

/* Routes */
// export to route
const Login = lazy(() => import("./pages/authentication/Login/Login"));
const SignUp = lazy(() => import("./pages/authentication/SignUp/signUp"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const RecoveryPassword = lazy(() =>
  import("./pages/authentication/recoveryPassword/recoveryPassword")
);
const Product = lazy(() => import("./pages/Product/ProductMain.jsx"));
const ProductNew = lazy(() => import('./pages/Product/New/ProductNew.jsx'))
const ProductDetails = lazy(() => import("./pages/Product/Details/ProductDetails.jsx"));
const ProductEdit = lazy(() => import('./pages/Product/Edit/ProductEdit.jsx'))

export default function App() {

  const { dataGlobal } = useContext(globalContext);

  return (
    <NativeBaseProvider theme={dataGlobal.darkMode ? ThemeLight : ThemeDark}>
      <Router>
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/recovery" element={<RecoveryPassword />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Product/new" element={<ProductNew />} />
            <Route path="/Product/Details/:id" element={<ProductDetails />} />
            <Route path="/Product/Edit/:id" element={<ProductEdit />} />
          </Routes>
        </Suspense>
      </Router>
    </NativeBaseProvider>
  );
}
