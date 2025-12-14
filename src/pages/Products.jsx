
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../api.js';

export default function Products() {
  const { vendorId, categoryId, subcategoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get(`/products/subcategory/${subcategoryId}`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, [subcategoryId]);

  return (
    <div>
      <h1>Products</h1>
      <Link to={`/vendors/${vendorId}/categories/${categoryId}`}>← Back to Subcategories</Link>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div style={{ display: 'grid', gap: 15 }}>
          {products.map(p => (
            <div key={p._id} style={{ border: '1px solid #ccc', padding: 10 }}>
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
              <Link to={`/product/${p._id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
