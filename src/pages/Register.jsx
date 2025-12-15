import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Register() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const submit=async()=>{
    try{
      await api.post("/user/register",{name,email,password});
      alert("Registered successfully");
      navigate("/login");
    }catch{
      alert("Register failed");
    }
  };

  return(
    <div>
      <h2>User Register</h2>
      <input placeholder="Name" onChange={e=>setName(e.target.value)} />
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={submit}>Register</button>
    </div>
  );
}
