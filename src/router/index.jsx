import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const AppRoutes = ({fallback}) => {
  /* Routes */
  // export to route
  const Login = lazy(() => import("../pages/authentication/Login/Login"));
  const SignUp = lazy(() => import("../pages/authentication/SignUp/signUp"));
  const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
  const RecoveryPassword = lazy(() =>
    import("../pages/authentication/recoveryPassword/recoveryPassword")
  );
  const Product = lazy(() => import("../pages/Product/ProductMain.jsx"));
  const ProductNew = lazy(() => import("../pages/Product/New/ProductNew.jsx"));
  const ProductDetails = lazy(() =>
    import("../pages/Product/Details/ProductDetails.jsx")
  );
  const ProductEdit = lazy(() =>
    import("../pages/Product/Edit/ProductEdit.jsx")
  );

  return (
    <Router>
      <Suspense fallback={fallback}>
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
  );
};

export default AppRoutes;
