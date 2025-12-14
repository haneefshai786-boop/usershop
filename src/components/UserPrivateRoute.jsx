import { Navigate } from 'react-router-dom';

export default function UserPrivateRoute({ children }) {
  const token = localStorage.getItem('userToken');
  return token ? children : <Navigate to="/login" />;
}
