import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div>
      <h2>Cart</h2>

      {cart.map(item => (
        <div
          key={item._id}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10
          }}
        >
          <h4>{item.name}</h4>
          <p>Price: ₹{item.price}</p>

          <button onClick={() => decreaseQty(item._id)}>-</button>
          <span style={{ margin: "0 10px" }}>{item.qty}</span>
          <button onClick={() => increaseQty(item._id)}>+</button>

          <br /><br />

          <button
            onClick={() => removeFromCart(item._id)}
            style={{ color: "red" }}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button disabled style={{ marginTop: 10 }}>
        Checkout (Coming Soon)
      </button>
    </div>
  );
}
