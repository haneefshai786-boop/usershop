import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import UserLayout from "./layout/UserLayout";

/* Protect user routes */
function PrivateRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>

        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Layout */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <UserLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Orders />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

      </Routes>
    </AuthProvider>
  );
}
