'use client'
import React from 'react';
import RegisterForm from '@/components/RegisterForm';
// import './Register.css'; // Styles for Register component
import { useRouter } from 'next/navigation';
const Register = () => {
  const router = useRouter();
  return (
    <div className="register-container">
      <div className="register-form">
        <h2 className='register-title'>Sign up for Coding Assistance</h2>
        <p className='register-desc'>Enter your information to unlock features</p>
        <RegisterForm />
        <p onClick={() => router.push('/login')} className='p4' style={{textAlign: 'center', cursor: 'pointer'}}>Already a member? Log in</p>
      </div>
    </div>
  );
};

export default Register;
