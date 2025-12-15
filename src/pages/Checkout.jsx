import api from "../api";
import { useNavigate } from "react-router-dom";

export default function Checkout(){
  const navigate=useNavigate();
  const cart=JSON.parse(localStorage.getItem("cart"))||[];

  const placeOrder=async()=>{
    try{
      await api.post("/orders",{items:cart,paymentMethod:"COD"});
      localStorage.removeItem("cart");
      alert("Order placed");
      navigate("/orders");
    }catch{
      alert("Order failed");
    }
  };

  return(
    <div>
      <h2>Checkout</h2>
      <p>Payment Method: Cash on Delivery</p>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}
