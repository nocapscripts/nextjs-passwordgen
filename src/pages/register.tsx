// pages/login.tsx

import React from 'react';
import Link from 'next/link';
import RegisterForm from '@/components/RegisterForm';

const RegisterPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Register Your Account</h1>
        <RegisterForm />
        <div className="text-center mt-4">
          <Link href="/login">
            <button className="text-blue-500 hover:underline">Have account? Login here</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
