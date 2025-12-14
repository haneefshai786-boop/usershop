import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>Choose Category</h2>

      <div style={grid}>
        <Link to="/vendors?type=restaurant" style={card}>
          🍽️ Restaurants
        </Link>

        <Link to="/vendors?type=grocery" style={card}>
          🛒 Grocery
        </Link>
      </div>
    </div>
  );
}

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px,1fr))',
  gap: 15,
  marginTop: 20
};

const card = {
  padding: 30,
  background: '#F97316',
  color: '#fff',
  textAlign: 'center',
  borderRadius: 12,
  textDecoration: 'none',
  fontSize: 18
};
