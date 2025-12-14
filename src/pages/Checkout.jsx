import api from '../api';

export default function Checkout() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);

  const placeOrder = async () => {
    await api.post('/orders', {
      items: cart.map(i => ({
        product: i._id,
        name: i.name,
        price: i.price,
        qty: i.qty
      })),
      total
    });

    alert('Order placed successfully');
    localStorage.removeItem('cart');
  };

  return (
    <div style={card}>
      <h2>Payment</h2>

      <p>Total: ₹{total}</p>

      <button style={cod} onClick={placeOrder}>
        Cash on Delivery
      </button>

      <button style={online} onClick={() => alert('Online payment coming soon')}>
        Online Payment
      </button>
    </div>
  );
}

const card = {
  background:'#fff',
  padding:20,
  borderRadius:10
};

const cod = {
  width:'100%',
  padding:12,
  marginTop:10,
  background:'#2563EB',
  color:'#fff',
  border:'none'
};

const online = {
  width:'100%',
  padding:12,
  marginTop:10,
  background:'#F59E0B',
  color:'#fff',
  border:'none'
};
