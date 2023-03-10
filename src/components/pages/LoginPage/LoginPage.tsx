import React from 'react';
import { useTitle } from 'react-use';
import { Login } from '@/components/common/Login/Login';

const LoginPage = () => {
  useTitle('Login Page');
  return (
    <div className='container'>
      <h1 className='title'>Login</h1>
      <Login />
    </div>
  );
};

export default LoginPage;
