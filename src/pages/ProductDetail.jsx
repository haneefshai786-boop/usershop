import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

export default function ProductDetail() {
  const { productId } = useParams();
  const [p, setP] = useState(null);

  useEffect(() => {
    api.get(`/products/${productId}`).then(res => setP(res.data));
  }, [productId]);

  if (!p) return null;

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = cart.find(i => i._id === p._id);

    if (exists) exists.qty += 1;
    else cart.push({ ...p, qty: 1 });

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart');
  };

  return (
    <div style={card}>
      <h2>{p.name}</h2>
      <p>₹{p.price}</p>
      <p>{p.description}</p>

      <button onClick={addToCart} style={btn}>
        Add to Cart
      </button>
    </div>
  );
}

const card = {
  background: '#fff',
  padding: 20,
  borderRadius: 10
};

const btn = {
  padding: 10,
  background: '#2563EB',
  color: '#fff',
  border: 'none',
  borderRadius: 6
};
