'use client'
// components/LoginForm.js
import React from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='form-label'>Email</label>
      <input type="email" placeholder="Enter your email" />
      <label className='form-label'>Password</label>
      <input type="password" placeholder="Enter your password" />
      <button onClick={() => {router.push('/profile')}} type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
