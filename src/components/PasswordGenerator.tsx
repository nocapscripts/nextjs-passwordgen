import React, { useState } from 'react';

const PasswordGenerator = ({isLoggedIn}) => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+';

    let characters = lowercaseLetters;
    if (includeUppercase) characters += uppercaseLetters;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      generatedPassword += characters[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const handleLogout = () => {
    logout(); // Call your logout function from the auth library
  };

  return (
    <>
      {isLoggedIn && (
            <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Password Generator</h2>
            <div className="mb-4">
                <label className="block mb-2">Password Length:</label>
                <input
                type="number"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                min={6}
                max={32}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="mb-4">
                <input
                type="checkbox"
                checked={includeUppercase}
                onChange={(e) => setIncludeUppercase(e.target.checked)}
                className="mr-2"
                />
                <label>Include Uppercase Letters</label>
            </div>
            <div className="mb-4">
                <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="mr-2"
                />
                <label>Include Numbers</label>
            </div>
            <div className="mb-4">
                <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="mr-2"
                />
                <label>Include Symbols</label>
            </div>
            <button
                onClick={generatePassword}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
                Generate Password
            </button>
            {password && (
                <div className="mt-4">
                <label className="block mb-2">Generated Password:</label>
                <input
                    type="text"
                    value={password}
                    readOnly
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
                </div>
            )}
            <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-red-700 focus:outline-none focus:bg-red-700"
          >
            Logout
          </button>
            </div>
           )}
    </>
  );
};

export default PasswordGenerator;
