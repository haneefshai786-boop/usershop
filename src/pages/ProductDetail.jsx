import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api.js';

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/products/${productId}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [productId]);

  const addToCart = () => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    const exists = stored.find(i => i._id === product._id);

    let updatedCart;
    if (exists) {
      updatedCart = stored.map(i =>
        i._id === product._id ? { ...i, qty: i.qty + 1 } : i
      );
    } else {
      updatedCart = [...stored, { ...product, qty: 1 }];
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.name} added to cart`);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ₹{product.price}</p>
      <p>Vendor: {product.vendor.name}</p>
      <p>Category: {product.category.name}</p>
      {product.subcategory && <p>Subcategory: {product.subcategory.name}</p>}

      <button onClick={addToCart}>Add to Cart</button>
      <br /><br />
      <Link to={`/vendors/${product.vendor._id}/categories/${product.category._id}/sub/${product.subcategory?._id}`}>← Back to Products</Link>
    </div>
  );
}
