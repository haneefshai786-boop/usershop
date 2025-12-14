
import { Link, Outlet } from 'react-router-dom';

export default function UserLayout() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  return (
    <div>
      <header style={{ padding: 10, background: '#eee', display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </header>
      <main style={{ padding: 20 }}>
        <Outlet />
      </main>
    </div>
  );
}
