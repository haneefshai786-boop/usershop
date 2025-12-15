import { useEffect, useState } from "react";
import api from "../api";

export default function Products() {
  const [products,setProducts]=useState([]);
  const [cart,setCart]=useState(JSON.parse(localStorage.getItem("cart"))||[]);

  useEffect(()=>{
    api.get("/products")
      .then(res=>setProducts(res.data))
      .catch(()=>alert("Failed to load products"));
  },[]);

  const addToCart=(product)=>{
    const updated=[...cart,{...product,qty:1}];
    setCart(updated);
    localStorage.setItem("cart",JSON.stringify(updated));
  };

  return(
    <div>
      <h2>Products</h2>
      {products.map(p=>(
        <div key={p._id} style={{border:"1px solid #ccc",margin:10,padding:10}}>
          <h4>{p.name}</h4>
          <p>₹{p.price}</p>
          <button onClick={()=>addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
