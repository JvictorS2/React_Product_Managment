import React, { lazy, Suspense } from "react";
import { NativeBaseProvider} from "native-base";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwZ8I3gjzOeJ-pIm_u0b0F9cqmByA9kjA",
  authDomain: "project-managment-2024-8f5b1.firebaseapp.com",
  databaseURL: "https://project-managment-2024-8f5b1-default-rtdb.firebaseio.com",
  projectId: "project-managment-2024-8f5b1",
  storageBucket: "project-managment-2024-8f5b1.appspot.com",
  messagingSenderId: "283421819680",
  appId: "1:283421819680:web:69e159025f8902ad5ccd45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);

const Login = lazy(() => import('./pages/Login/Login'))
const LogOut = lazy(() => import('./pages/LogOut/LogOut'))
const SignUp = lazy(() => import('./pages/SignUp/signUp'))
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'))
const ForgetMyPassword = lazy(() => import('./pages/ForgetMyPassword/ForgetMyPassword'))
const Product = lazy(() => import('./pages/Product/Product'))


export default function App() {
  return (
    <NativeBaseProvider>
    
      <Router>
        
        <Suspense fallback={"Carregando"} >
          <Routes>
            <Route path="/a" element={<Dashboard />} />
            <Route path="/" element={<Login />} />
            <Route path="/LogOut" element={<LogOut />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ForgetMyPassword" element={<ForgetMyPassword />} />
            <Route path="/Product" element={<Product />} />

          </Routes>
        </Suspense>
      </Router>
    </NativeBaseProvider>
  );
}



