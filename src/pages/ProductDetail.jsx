import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api.js';

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/products/${productId}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [productId]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existing = cart.find(i => i._id === product._id);
    if (existing) existing.qty += 1;
    else cart.push({ ...product, qty: 1 });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart!');
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={() => navigate(-1)}>← Back</button>
    </div>
  );
}
