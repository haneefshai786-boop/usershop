import { useEffect, useState } from "react";
import api from "../api";
import CartButton from "../components/CartButton";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(() => alert("Failed to load products"));
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map(p => (
        <div
          key={p._id}
          style={{
            border: "1px solid #ccc",
            margin: 10,
            padding: 10
          }}
        >
          <h4>{p.name}</h4>
          <p>₹{p.price}</p>

          {/* ONLY THIS */}
          <CartButton product={p} />
        </div>
      ))}
    </div>
  );
}
