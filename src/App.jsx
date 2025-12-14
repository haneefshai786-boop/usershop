import { Routes, Route } from "react-router-dom";

import UserLayout from "./layout/UserLayout.jsx";

import Home from "./pages/Home.jsx";
import Vendors from "./pages/Vendors.jsx";
import Categories from "./pages/Categories.jsx";
import Subcategories from "./pages/Subcategories.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";

import UserLogin from "./pages/UserLogin.jsx";
import UserRegister from "./pages/Register.jsx";

import UserPrivateRoute from "./components/UserPrivateRoute.jsx";

export default function App() {
  return (
    <Routes>

      {/* 🔓 Public auth pages */}
      <Route path="/login" element={<UserLogin />} />
      <Route path="/register" element={<UserRegister />} />

      {/* 🔓 Public pages */}
      <Route path="/" element={<UserLayout />}>
        <Route index element={<Home />} />
        <Route path="vendors" element={<Vendors />} />
        <Route path="vendors/:vendorId" element={<Categories />} />
        <Route
          path="vendors/:vendorId/categories/:categoryId"
          element={<Subcategories />}
        />
        <Route
          path="vendors/:vendorId/categories/:categoryId/sub/:subcategoryId"
          element={<Products />}
        />
        <Route path="product/:productId" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
      </Route>

      {/* 🔒 Protected pages */}
      <Route element={<UserPrivateRoute />}>
        <Route path="/" element={<UserLayout />}>
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Route>

    </Routes>
  );
}
