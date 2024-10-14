// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: '',
    signupName: '',
    signupEmail: '',
    signupPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as ${formData.loginEmail}`);
  };
  

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    alert(`Signed up as ${formData.signupEmail}`);
  };

  return (
    <div className="container">
      <div className="form-container">
        {/* Login Form */}
        <div className="form-section login-section">
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="loginEmail"
                value={formData.loginEmail}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="loginPassword"
                value={formData.loginPassword}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="submit-btn">Login</button>
          </form>
        </div>

        {/* Signup Form */}
        <div className="form-section signup-section">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignupSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="signupName"
                value={formData.signupName}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="signupEmail"
                value={formData.signupEmail}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="signupPassword"
                value={formData.signupPassword}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="submit-btn">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
