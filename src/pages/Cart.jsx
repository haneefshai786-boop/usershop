import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api.js';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  // Load cart from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(stored);
  }, []);

  // Update quantity
  const updateQty = (id, qty) => {
    const updated = cart.map(item =>
      item._id === id ? { ...item, qty: Math.max(1, qty) } : item
    );
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  // Remove item
  const removeItem = id => {
    const updated = cart.filter(item => item._id !== id);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Checkout / Place order
  const checkout = async () => {
    if (cart.length === 0) {
      alert('Cart is empty');
      return;
    }

    const order = {
      items: cart.map(item => ({
        product: item._id,
        name: item.name,
        price: item.price,
        qty: item.qty
      })),
      total
    };

    try {
      await api.post('/orders', order);
      alert('Order placed successfully!');
      localStorage.removeItem('cart');
      setCart([]);
      // Navigate to order confirmation page (optional)
      navigate('/checkout-success');
    } catch (err) {
      console.error(err);
      alert('Order failed!');
    }
  };

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div
          key={item._id}
          style={{ border: '1px solid #ccc', padding: 10, marginTop: 10, borderRadius: 6 }}
        >
          <h4>{item.name}</h4>
          <p>Price: ₹{item.price}</p>

          <div>
            <button onClick={() => updateQty(item._id, item.qty - 1)}>-</button>
            <span style={{ margin: '0 10px' }}>{item.qty}</span>
            <button onClick={() => updateQty(item._id, item.qty + 1)}>+</button>
          </div>

          <button onClick={() => removeItem(item._id)}>Remove</button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3>Total: ₹{total}</h3>
          <button onClick={checkout}>Checkout</button>
        </>
      )}

      <div style={{ marginTop: 20 }}>
        <Link to="/">← Back to Home</Link>
      </div>
    </div>
  );
}
