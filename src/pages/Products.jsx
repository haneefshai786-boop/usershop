import { useEffect, useState } from "react";
import api from "../api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(() => alert("Failed to load products"));
  }, []);

  const addToCart = (product) => {
    const exists = cart.find(i => i._id === product._id);

    let updated;
    if (exists) {
      updated = cart.map(i =>
        i._id === product._id ? { ...i, qty: i.qty + 1 } : i
      );
    } else {
      updated = [...cart, { ...product, qty: 1 }];
    }

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  return (
    <div>
      <h3>Products</h3>

      {products.map(p => (
        <div
          key={p._id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 10,
            borderBottom: "1px solid #ddd",
            paddingBottom: 5
          }}
        >
          <span>
            {p.name} – ₹{p.price}
          </span>

          <button onClick={() => addToCart(p)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
