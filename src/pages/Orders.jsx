<div className="p-6">
  <h2 className="text-2xl font-semibold mb-4">My Orders</h2>

  {orders.map(o => (
    <div key={o._id} className="bg-white p-4 mb-3 rounded shadow">
      <p>Status: <b>{o.status}</b></p>
      <p>Items: {o.products.length}</p>
    </div>
  ))}
</div>
