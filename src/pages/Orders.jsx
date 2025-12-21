import React, { useState, useEffect } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  // Example: fetch orders from API
  useEffect(() => {
    // Replace with your API call
    fetch("/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map(o => (
          <div key={o._id} className="bg-white p-4 mb-3 rounded shadow">
            <p>Status: <b>{o.status}</b></p>
            <p>Items: {o.products.length}</p>
          </div>
        ))
      )}
    </div>
  );
}
