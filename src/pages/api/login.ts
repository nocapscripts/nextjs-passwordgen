import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { dbConnect } from '@/lib/mongo';
import User from '../../models/user'; 

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const db = await dbConnect();
  cachedDb = db;
  return db;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Input validation
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
      // Connect to MongoDB
      await connectToDatabase();

      // Fetch user data from MongoDB using the User model
      const existingUser = await User.findOne({ email });

      if (!existingUser) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Compare passwords
      const passwordMatch = await bcrypt.compare(password, existingUser.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Error logging in' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
