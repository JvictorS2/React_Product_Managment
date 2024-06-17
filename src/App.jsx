import React, { lazy, Suspense } from "react";
import { NativeBaseProvider} from "native-base";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


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
            <Route path="/" element={<Dashboard />} />
            <Route path="/Login" element={<Login />} />
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



