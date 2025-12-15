import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav style={{ padding: 10, background: "#1e293b", color: "#fff" }}>
      <Link to="/" style={{ marginRight: 10, color: "#fff" }}>Products</Link>
      <Link to="/cart" style={{ marginRight: 10, color: "#fff" }}>Cart</Link>
      <Link to="/orders" style={{ marginRight: 10, color: "#fff" }}>Orders</Link>
      {user && <button onClick={logout}>Logout</button>}
    </nav>
  );
}
