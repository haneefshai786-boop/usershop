
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserPrivateRoute from "./components/UserPrivateRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Vendors from "./pages/Vendors";
import Categories from "./pages/Categories";
import Subcategories from "./pages/Subcategories";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";

export default function App(){
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

        <Route element={<UserPrivateRoute/>}>
          <Route path="/" element={<Vendors/>}/>
          <Route path="/vendor/:id/categories" element={<Categories/>}/>
          <Route path="/category/:id/subcategories" element={<Subcategories/>}/>
          <Route path="/subcategory/:id/products" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Route>
      </Routes>
    </>
  );
}
