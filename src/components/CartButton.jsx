import { useCart } from "../context/CartContext";

export default function CartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <button onClick={() => addToCart(product)}>
      Add to Cart
    </button>
  );
}
