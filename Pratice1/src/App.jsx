// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as ${loginData.email}`);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    alert(`Signed up as ${signupData.email}`);
  };

  return (
    <div className="container">
      <div className="form-container">
        {/* Login Form */}
        <div className="form-section">
          <h2>Login Form</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Password"
                required
              />
            </div>
            <a href="#" className="forgot-password">Forgot password?</a>
            <button type="submit" className="submit-btn">Login</button>
            <p className="toggle-form">
              Not a member? <a href="#" onClick={() => alert('Switch to Signup')}>Signup now</a>
            </p>
          </form>
        </div>

        {/* Gap */}
        <div className="gap"></div>

        {/* Signup Form */}
        <div className="form-section">
          <h2>Signup Form</h2>
          <form onSubmit={handleSignupSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={signupData.name}
                onChange={handleSignupChange}
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={signupData.email}
                onChange={handleSignupChange}
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                value={signupData.password}
                onChange={handleSignupChange}
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="submit-btn">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
