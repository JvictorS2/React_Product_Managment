import React, { lazy, Suspense, useState } from "react";
import {  NativeBaseProvider } from "native-base";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
import { theme } from "./theme/light";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/* Firebase */

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwZ8I3gjzOeJ-pIm_u0b0F9cqmByA9kjA",
  authDomain: "project-managment-2024-8f5b1.firebaseapp.com",
  databaseURL:
    "https://project-managment-2024-8f5b1-default-rtdb.firebaseio.com",
  projectId: "project-managment-2024-8f5b1",
  storageBucket: "project-managment-2024-8f5b1.appspot.com",
  messagingSenderId: "283421819680",
  appId: "1:283421819680:web:69e159025f8902ad5ccd45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* Routes */
// export to route
const Login = lazy(() => import("./pages/authentication/Login/Login"));
const SignUp = lazy(() => import("./pages/authentication/SignUp/signUp"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const RecoveryPassword = lazy(() =>
  import("./pages/authentication/recoveryPassword/recoveryPassword")
);
const Product = lazy(() => import("./pages/Stock/Stock"));

export default function App() {
  
  const [navBarOn,setNavBarOn] = useState(false)

  return (
    <NativeBaseProvider theme={theme}>
      <Router>
        <Suspense fallback={"Carregando"}>
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  app={app}
                  auth={auth}
                  navBarOn={navBarOn}
                  setNavBarOn={setNavBarOn}
                />
              }
            />
            <Route
              path="/Dashboard"
              element={
                <Dashboard
                  app={app}
                  auth={auth}
                  navBarOn={navBarOn}
                  setNavBarOn={setNavBarOn}
                />
              }
            />
            <Route path="/Login" element={<Login app={app} auth={auth} />} />
            <Route path="/SignUp" element={<SignUp app={app} auth={auth} />} />
            <Route
              path="/recovery"
              element={<RecoveryPassword app={app} auth={auth} />}
            />
            <Route
              path="/Product"
              element={
                <Product
                  app={app}
                  auth={auth}
                  navBarOn={navBarOn}
                  setNavBarOn={setNavBarOn}
                />
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </NativeBaseProvider>
  );
}
