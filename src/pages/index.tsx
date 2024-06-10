// pages/index.tsx

import React from 'react';
import Link from 'next/link';
import RegisterForm from '@/components/RegisterForm';
import LoginForm from '@/components/LoginForm';

const HomePage:React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Welcome to Your Password Manager</h1>
      {/*   <RegisterForm />
        <LoginForm /> */}
        <div className="text-center mt-4">
          <Link href="/login">
            <button className="text-blue-500 hover:underline">Already have an account? Login here</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
