import { Link, Outlet } from 'react-router-dom';

export default function UserLayout() {
  return (
    <div>
      <header style={header}>
        <h2>🛍️ MyShop</h2>
        <nav style={{ display: 'flex', gap: 15 }}>
          <Link style={link} to="/">Home</Link>
          <Link style={link} to="/cart">Cart</Link>
        </nav>
      </header>

      <main style={{ padding: 15 }}>
        <Outlet />
      </main>
    </div>
  );
}

const header = {
  background: '#2563EB',
  color: '#fff',
  padding: 15,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const link = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold'
};
