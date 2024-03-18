// components/RegisterForm.js
import React from 'react';

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" placeholder="Enter your name" required />
      <label>Email</label>
      <input type="email" placeholder="Enter your email" required />
      <label>Password</label>
      <input type="password" placeholder="Enter your password" required />
      <label>Confirm Password</label>
      <input type="password" placeholder="Enter confirm password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
