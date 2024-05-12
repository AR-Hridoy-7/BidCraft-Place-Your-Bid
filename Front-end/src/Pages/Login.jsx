import React, { useState } from 'react';
import axios from 'axios';
import './CSS/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    user_id: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/signin', formData);
      console.log(response.data); // Handle success response, e.g., save token to state or localStorage
    } catch (error) {
      console.error('Login failed:', error.response.data.detail);
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-fields">
            <input
              type="text"
              name="user_id"
              placeholder="User ID (Email or Phone)"
              value={formData.user_id}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="login-login">
        Don't have an account? <Link to="/signup"><span>Sign Up</span></Link>
      </div>
      </div>
    </div>
  );
};

export default Login;
