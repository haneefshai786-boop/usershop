import { useEffect, useState } from "react";
import api from "../api";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => {
        console.error(err);
        alert("Products failed to load");
      });
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.length === 0 && <p>No products found</p>}

      {products.map(p => (
        <div key={p._id} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
          <h4>{p.name}</h4>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}
