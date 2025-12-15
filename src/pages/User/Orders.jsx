
import { useEffect, useState } from "react";
import api from "../api";

export default function UserOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/user/orders")
      .then(res => setOrders(res.data))
      .catch(() => alert("Failed to load orders"));
  }, []);

  return (
    <div>
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          {orders.map(order => (
            <div key={order._id} style={{ border: "1px solid #ccc", padding: 15 }}>
              <h4>Order ID: {order._id}</h4>
              <p>Total: ₹{order.total}</p>
              <p>Status: {order.status}</p>
              <div>
                <strong>Items:</strong>
                <ul>
                  {order.items.map(item => (
                    <li key={item.product._id}>
                      {item.product.name} - ₹{item.product.price} x {item.qty}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
