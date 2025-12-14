import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';

export default function Products() {
  const { subcategoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/products/sub/${subcategoryId}`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [subcategoryId]);

  if (loading) return <p>Loading products...</p>;
  if (!products.length) return <p>No products found</p>;

  return (
    <div>
      <h2>Products</h2>

      <div style={grid}>
        {products.map(p => (
          <div key={p._id} style={card}>
            <h4>{p.name}</h4>
            <p>₹{p.price}</p>

            <Link to={`/product/${p._id}`} style={btn}>
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))',
  gap: 15
};

const card = {
  background: '#fff',
  padding: 15,
  borderRadius: 10,
  boxShadow: '0 2px 5px rgba(0,0,0,.1)'
};

const btn = {
  display: 'inline-block',
  marginTop: 10,
  padding: '6px 10px',
  background: '#16A34A',
  color: '#fff',
  borderRadius: 6,
  textDecoration: 'none'
};
