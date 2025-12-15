import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function UserLayout() {
  const { logout } = useAuth();

  return (
    <div>
      {/* Header */}
      <header style={{
        padding: 15,
        background: "#1E293B",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between"
      }}>
        <h3>MyShop</h3>

        <nav style={{ display: "flex", gap: 15 }}>
          <Link to="/" style={{ color: "#fff" }}>Products</Link>
          <Link to="/cart" style={{ color: "#fff" }}>Cart</Link>
          <Link to="/orders" style={{ color: "#fff" }}>Orders</Link>
          <button onClick={logout}>Logout</button>
        </nav>
      </header>

      {/* Page content */}
      <main style={{ padding: 20 }}>
        <Outlet />
      </main>
    </div>
  );
}
