
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      alert('Payment successful (demo)');
      localStorage.removeItem('cart');
      setLoading(false);
      navigate('/');
    }, 1000);
  };

  if (cart.length === 0) return <p>Cart is empty</p>;

  return (
    <div>
      <h1>Checkout</h1>
      {cart.map(i => (
        <div key={i._id}>
          {i.name} x {i.qty} = ₹{i.price * i.qty}
        </div>
      ))}
      <h2>Total: ₹{total}</h2>
      <button onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
}
