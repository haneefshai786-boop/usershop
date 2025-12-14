import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);

  return (
    <div>
      <h2>Cart</h2>

      {cart.map(i => (
        <div key={i._id} style={item}>
          <h4>{i.name}</h4>
          <p>₹{i.price} × {i.qty}</p>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button style={btn} onClick={() => nav('/checkout')}>
        Checkout
      </button>
    </div>
  );
}

const item = {
  background:'#fff',
  padding:10,
  marginBottom:10,
  borderRadius:6
};

const btn = {
  padding:12,
  background:'#16A34A',
  color:'#fff',
  border:'none',
  borderRadius:6,
  width:'100%'
};
