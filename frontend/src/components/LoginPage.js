import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('imprashik29@gmail.com'); // Default email
  const [password, setPassword] = useState('pass123'); // Default password

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/auth/login', { email, password });
      alert('Login successful!');
      // Optionally, you can redirect the user or perform other actions upon successful login
    } catch (error) {
      console.error('Error logging in:', error.response.data);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
