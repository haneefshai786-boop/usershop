
import { Routes, Route } from 'react-router-dom';
import UserLayout from './layout/UserLayout.jsx';
import Home from './pages/Home.jsx';
import Vendors from './pages/Vendors.jsx';
import Categories from './pages/Categories.jsx';
import Subcategories from './pages/Subcategories.jsx';
import Products from './pages/Products.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout />}>

        {/* Home */}
        <Route index element={<Home />} />

        {/* Vendors list */}
        <Route path="vendors" element={<Vendors />} />

        {/* Categories by vendor */}
        <Route
          path="vendors/:vendorId"
          element={<Categories />}
        />

        {/* Subcategories by category */}
        <Route
          path="vendors/:vendorId/categories/:categoryId"
          element={<Subcategories />}
        />

        {/* Products by subcategory */}
        <Route
          path="vendors/:vendorId/categories/:categoryId/sub/:subcategoryId"
          element={<Products />}
        />

        {/* Product details */}
        <Route
          path="product/:productId"
          element={<ProductDetail />}
        />

        {/* Cart */}
        <Route
          path="cart"
          element={<Cart />}
        />

        {/* Checkout */}
        <Route
          path="checkout"
          element={<Checkout />}
        />

      </Route>
    </Routes>
  );
}
