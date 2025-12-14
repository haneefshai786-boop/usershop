import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const submit = async () => {
    try {
      const res = await api.post('/user/login', { email, password });
      localStorage.setItem('userToken', res.data.token);
      nav('/');
    } catch (e) {
      alert('Invalid login');
    }
  };

  return (
    <div style={box}>
      <h2>User Login</h2>

      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />

      <button onClick={submit}>Login</button>
    </div>
  );
}

const box = {
  maxWidth: 350,
  margin: '60px auto',
  background: '#fff',
  padding: 20,
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  gap: 10
};
