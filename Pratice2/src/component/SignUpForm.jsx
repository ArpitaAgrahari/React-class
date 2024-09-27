import React, { useState } from 'react';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form className="signup-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="abc@gmail.com"
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default SignUpForm;
