import { Outlet, Link } from 'react-router-dom';

export default function UserLayout() {
  return (
    <div>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/cart">Cart</Link> |{' '}
        <Link to="/login">Login</Link> |{' '}
        <Link to="/register">Register</Link>
      </nav>
      <div style={{ padding: '15px' }}>
        <Outlet />
      </div>
    </div>
  );
}
