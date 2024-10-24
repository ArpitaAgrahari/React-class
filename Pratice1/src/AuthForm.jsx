// AuthForm.js
import React, { useState } from 'react';
import './App.css'; // Make sure to import your CSS here

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${isLogin ? 'login' : 'signup'}`}>
          {isLogin ? 'Login' : 'Sign Up'}
        </div>
      </div>
      <div className="slide-controls">
        <input
          type="radio"
          name="slider"
          id="login"
          checked={isLogin}
          onChange={handleToggle}
        />
        <label htmlFor="login" className="slide login" onClick={handleToggle}>
          Login
        </label>
        <input
          type="radio"
          name="slider"
          id="signup"
          checked={!isLogin}
          onChange={handleToggle}
        />
        <label htmlFor="signup" className="slide signup" onClick={handleToggle}>
          Sign Up
        </label>
        <div className="slider-tab" style={{ left: isLogin ? '0' : '50%' }} />
      </div>
      <div className="form-container">
        <div className="form-inner" style={{ marginLeft: isLogin ? '0' : '-50%' }}>
          <form className="login">
            <div className="field">
              <input type="text" placeholder="Email" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
            <div className="btn">
              <div className="btn-layer" />
              <input type="submit" value="Login" />
            </div>
            <div className="signup-link">
              Not a member? <a href="#" onClick={handleToggle}>Sign up now</a>
            </div>
          </form>

          <form className="signup">
            <div className="field">
              <input type="text" placeholder="Username" required />
            </div>
            <div className="field">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Password" required />
            </div>
            <div className="btn">
              <div className="btn-layer" />
              <input type="submit" value="Sign Up" />
            </div>
            <div className="signup-link">
              Already a member? <a href="#" onClick={handleToggle}>Login now</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
