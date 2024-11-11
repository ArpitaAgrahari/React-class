import React, { useState } from 'react';

function PersonalInfoForm() {
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Validate Date of Birth
    const birthDate = new Date(dob);
    const today = new Date();
    if (birthDate > today) {
      newErrors.dob = 'Date of birth cannot be in the future';
    }

    // Validate Phone Number
    const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phone.match(phonePattern)) {
      newErrors.phone = 'Phone number must be in format (123) 456-7890';
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      newErrors.email = 'Invalid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div style={{ width: '300px', margin: 'auto', textAlign: 'center' }}>
      <h2>Personal Information Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          placeholder="Date of Birth"
        />
        {errors.dob && <p style={{ color: 'red' }}>{errors.dob}</p>}

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number (e.g., (123) 456-7890)"
        />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PersonalInfoForm;
