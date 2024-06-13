import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8000/api/auth/signup', {
        username,
        email,
        password,
      });

      console.log(res.data); 
    } catch (err) {
      console.error('Error signing up:', err.response.data);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Username" name="username" value={username} onChange={onChange} required />
      <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} required />
      <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} required minLength="6" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
