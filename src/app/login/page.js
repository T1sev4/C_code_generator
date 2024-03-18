'use client'
import React from 'react';
import LoginForm from '@/components/LoginForm';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  return (
    <div className="login">
      <div className='login-wrap flex'>
        <div className="left-side">
          <img src="/images/logo-bg1.png" alt="login" />
          <h2 className='login-title'>Welcome Back!</h2>
          <p className='login-p'>Enter your credentials to access your account.</p>
        </div>
        <div className="right-side">
          <div>
            <h2 className='login-right-side-title'>Log in</h2>
            <LoginForm />
            <p style={{cursor: 'pointer', marginTop: '10px'}} onClick={() => {router.push('/register')}}>Don't have Account? Sign up!</p>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Login;
