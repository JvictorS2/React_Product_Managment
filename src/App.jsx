import React, { lazy, Suspense, useState } from "react";
import { NativeBaseProvider } from "native-base";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/cordova";
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
console.log(auth);
/* Routes */
// export to route
const Login = lazy(() => import("./pages/authentication/Login/Login"));
const LogOut = lazy(() => import("./pages/authentication/LogOut/LogOut"));
const SignUp = lazy(() => import("./pages/SignUp/signUp"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
const RecoveryPassword = lazy(() =>
  import("./pages/authentication/recoveryPassword/recoveryPassword")
);
const Product = lazy(() => import("./pages/Product/Product"));

export default function App() {
  return (
    <NativeBaseProvider>
      <Router>
        <Suspense fallback={"Carregando"}>
          <Routes>
            <Route path="/" element={<Dashboard app={app} auth={auth} />} />
            <Route
              path="/Dashboard"
              element={<Dashboard app={app} auth={auth} />}
            />
            <Route path="/Login" element={<Login app={app} auth={auth} />} />
            <Route path="/LogOut" element={<LogOut app={app} auth={auth} />} />
            <Route path="/SignUp" element={<SignUp app={app} auth={auth} />} />
            <Route
              path="/recoveryPassWord"
              element={<RecoveryPassword app={app} auth={auth} />}
            />
            <Route
              path="/Product"
              element={<Product app={app} auth={auth} />}
            />
          </Routes>
        </Suspense>
      </Router>
    </NativeBaseProvider>
  );
}
