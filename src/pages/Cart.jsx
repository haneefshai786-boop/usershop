import { useNavigate } from "react-router-dom";

export default function Cart(){
  const navigate=useNavigate();
  const cart=JSON.parse(localStorage.getItem("cart"))||[];

  const total=cart.reduce((sum,i)=>sum+i.price*i.qty,0);

  return(
    <div>
      <h2>Cart</h2>
      {cart.map((c,i)=>(
        <p key={i}>{c.name} - ₹{c.price}</p>
      ))}
      <h3>Total: ₹{total}</h3>
      <button onClick={()=>navigate("/checkout")}>Checkout</button>
    </div>
  );
}
