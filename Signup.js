import { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/signup', formData);
    alert("User registered!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={e => setFormData({...formData, name: e.target.value})} />
      <input type="email" placeholder="Email" onChange={e => setFormData({...formData, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setFormData({...formData, password: e.target.value})} />
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
