import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <Link to="/vendors?type=restaurant">
        <h3>Restaurant</h3>
      </Link>

      <Link to="/vendors?type=grocery">
        <h3>Grocery</h3>
      </Link>
    </div>
  );
}
