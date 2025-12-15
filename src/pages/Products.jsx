import { useEffect, useState } from "react";
import api from "../api";
import { useCart } from "../context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => {
        console.error(err);
        alert("Failed to load products");
      });
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.length === 0 && <p>No products found</p>}

      {products.map(p => (
        <div key={p._id} style={{ border: "1px solid #ccc", padding: 10, margin: 10 }}>
          <h4>{p.name}</h4>
          <p>₹{p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
