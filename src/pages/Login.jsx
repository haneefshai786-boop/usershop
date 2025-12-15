import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await api.post("/user/login", { email, password });
      login(res.data.user, res.data.token);
      navigate("/");
    } catch {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>User Login</h2>
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={submit}>Login</button>
      <p>No account? <Link to="/register">Register</Link></p>
    </div>
  );
}
