// pages/login.tsx

import React from 'react';
import Link from 'next/link';
import LoginForm from '@/components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Login to Your Account</h1>
        <LoginForm />
        <div className="text-center mt-4">
          <Link href="/register">
            <button className="text-blue-500 hover:underline">Don't have an account? Register here</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
