// pages/dashboard.tsx

import React, { useState } from 'react';
import PasswordGenerator from '@/components/PasswordGenerator';

const DashboardPage: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <PasswordGenerator />
    </div>
  );
};

export default DashboardPage;
