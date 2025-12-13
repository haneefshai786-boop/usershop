import { Link } from 'react-router-dom';

export default function CheckoutSuccess() {
  return (
    <div>
      <h2>Order Successful!</h2>
      <p>Thank you for your purchase.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}
