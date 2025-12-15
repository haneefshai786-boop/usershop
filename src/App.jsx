
// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

import Login from "./pages/Login.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import UserOrders from "./pages/UserOrders.jsx";
import UserPrivateRoute from "./components/UserPrivateRoute.jsx";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={
          <UserPrivateRoute>
            <Products />
          </UserPrivateRoute>
        } />

        <Route path="/cart" element={
          <UserPrivateRoute>
            <Cart />
          </UserPrivateRoute>
        } />

        <Route path="/checkout" element={
          <UserPrivateRoute>
            <Checkout />
          </UserPrivateRoute>
        } />

        <Route path="/orders" element={
          <UserPrivateRoute>
            <UserOrders />
          </UserPrivateRoute>
        } />
      </Routes>
    </AuthProvider>
  );
}
