import { useEffect, useState } from 'react';
import api from '../api.js';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Orders</h2>

      {orders.map(o => (
        <div key={o._id} style={{ border: '1px solid #ccc', padding: 10, marginTop: 10 }}>
          <p>Status: {o.status}</p>
          <p>Total: ₹{o.total}</p>

          {o.items.map((i, idx) => (
            <p key={idx}>{i.name} × {i.qty}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
