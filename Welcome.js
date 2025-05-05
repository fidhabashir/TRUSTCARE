import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
      <header>Contact: clinic@example.com | +1234567890</header>
      <h1>Welcome to HealthCare Booking</h1>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/signup"><button>Signup</button></Link>
    </div>
  );
}

export default Welcome;
