import { useState, useEffect } from "react";

export default function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const increment = (id) => {
    const updated = cart.map(item =>
      item._id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setCart(updated);
  };

  const decrement = (id) => {
    const updated = cart.map(item =>
      item._id === id ? { ...item, qty: Math.max(item.qty - 1, 1) } : item
    );
    setCart(updated);
  };

  const remove = (id) => {
    if (!confirm("Remove this item from cart?")) return;
    setCart(cart.filter(item => item._id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  if (cart.length === 0) return <p>Your cart is empty.</p>;

  return (
    <div>
      <h3>My Cart</h3>
      {cart.map(item => (
        <div
          key={item._id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 10,
            borderBottom: "1px solid #ddd",
            paddingBottom: 5
          }}
        >
          <span>
            {item.name} – ₹{item.price} × {item.qty}
          </span>
          <span>
            <button onClick={() => increment(item._id)}>+</button>
            <button onClick={() => decrement(item._id)}>-</button>
            <button onClick={() => remove(item._id)}>Remove</button>
          </span>
        </div>
      ))}

      <h4>Total: ₹{total}</h4>

      <button
        onClick={() => alert("Checkout functionality pending...")}
        style={{ marginTop: 10 }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
