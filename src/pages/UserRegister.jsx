import { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export default function UserRegister() {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const nav = useNavigate();

  const submit = async () => {
    await api.post('/user/register', { name, email, password });
    alert('Registered');
    nav('/login');
  };

  return (
    <div style={box}>
      <h2>Register</h2>

      <input placeholder="Name" onChange={e=>setName(e.target.value)} />
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />

      <button onClick={submit}>Register</button>
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
