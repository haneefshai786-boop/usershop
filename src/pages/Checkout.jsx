import { useEffect, useState } from "react";
import api from "../api";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/orders") // Make sure your backend returns orders for logged-in user
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to load orders");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading orders...</p>;
  if (orders.length === 0) return <p>No orders placed yet.</p>;

  return (
    <div>
      <h2>My Orders</h2>
      {orders.map((order) => (
        <div
          key={order._id}
          style={{
            border: "1px solid #ccc",
            padding: 10,
            marginBottom: 10,
          }}
        >
          <p>
            <strong>Order ID:</strong> {order._id}
          </p>
          <p>
            <strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}
          </p>
          <p>
            <strong>Status:</strong> {order.status || "Pending"}
          </p>
          <h4>Products:</h4>
          <ul>
            {order.products.map((p) => (
              <li key={p._id}>
                {p.name} – ₹{p.price} × {p.qty}
              </li>
            ))}
          </ul>
          <p>
            <strong>Total:</strong> ₹{order.products.reduce((acc, p) => acc + p.price * p.qty, 0)}
          </p>
        </div>
      ))}
    </div>
  );
}
