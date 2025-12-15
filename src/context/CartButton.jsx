import { useCart } from "../context/CartContext";

export default function CartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      style={{
        padding: "6px 10px",
        background: "#2563EB",
        color: "#fff",
        border: "none",
        cursor: "pointer"
      }}
    >
      Add to Cart
    </button>
  );
}
