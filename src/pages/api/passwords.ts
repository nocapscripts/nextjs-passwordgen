import { NextApiRequest, NextApiResponse } from 'next';
import { dbConnect } from '@/lib/mongo';
import Password from '@/models/Password';
import { getSession } from 'next-auth/client'; // Assuming you're using next-auth

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  await dbConnect();

  if (req.method === 'POST') {
    const { password, description } = req.body;

    try {
      const newPassword = new Password({
        user: session.user.id,
        password,
        description,
      });
      await newPassword.save();
      res.status(201).json({ message: 'Password saved' });
    } catch (error) {
      console.error('Error saving password:', error);
      res.status(500).json({ message: 'Error saving password' });
    }
  } else if (req.method === 'GET') {
    try {
      const passwords = await Password.find({ user: session.user.id });
      res.status(200).json(passwords);
    } catch (error) {
      console.error('Error fetching passwords:', error
        console.error('Error fetching passwords:', error);
        res.status(500).json({ message: 'Error fetching passwords' });
      }
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  