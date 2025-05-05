import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/book"><button>Book Appointment</button></Link>
    </div>
  );
}

export default Home;
