import { useState, useEffect } from "react";
import api from "../api";

export default function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [placingOrder, setPlacingOrder] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateQty = (id, delta) => {
    const updated = cart.map((item) =>
      item._id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    );
    setCart(updated);
  };

  const removeItem = (id) => {
    if (!window.confirm("Remove this item from cart?")) return;
    setCart(cart.filter((item) => item._id !== id));
  };

  const placeOrder = async () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    setPlacingOrder(true);
    try {
      const res = await api.post("/orders", {
        products: cart.map((p) => ({
          product: p._id,
          qty: p.qty,
        })),
      });
      alert("Order placed successfully!");
      setCart([]);
      localStorage.removeItem("cart");
    } catch (err) {
      console.error(err);
      alert("Failed to place order");
    }
    setPlacingOrder(false);
  };

  const total = cart.reduce((acc, p) => acc + p.price * p.qty, 0);

  return (
    <div>
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}
            >
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>
              <div>
                <button onClick={() => updateQty(item._id, -1)}>-</button>
                <span style={{ margin: "0 10px" }}>{item.qty}</span>
                <button onClick={() => updateQty(item._id, 1)}>+</button>
              </div>
              <button onClick={() => removeItem(item._id)} style={{ marginTop: 5 }}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>
          <button onClick={placeOrder} disabled={placingOrder}>
            {placingOrder ? "Placing Order..." : "Place Order"}
          </button>
        </>
      )}
    </div>
  );
}
