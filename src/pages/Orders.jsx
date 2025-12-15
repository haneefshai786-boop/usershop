import { useEffect,useState } from "react";
import api from "../api";

export default function Orders(){
  const [orders,setOrders]=useState([]);

  useEffect(()=>{
    api.get("/orders/my")
      .then(res=>setOrders(res.data))
      .catch(()=>alert("Failed to load orders"));
  },[]);

  return(
    <div>
      <h2>My Orders</h2>
      {orders.map(o=>(
        <div key={o._id}>
          <p>Status: {o.status}</p>
          <p>Items: {o.items.length}</p>
        </div>
      ))}
    </div>
  );
}
