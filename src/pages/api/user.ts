import { NextApiRequest, NextApiResponse } from 'next';
import { getSessionData } from '@/lib/session'; // Function to get session data
import { getUserByEmail } from '@/lib/user'; // Function to fetch user data from the database

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Get session data to check if user is authenticated
    const sessionData = await getSessionData(req);

    if (!sessionData || !sessionData.isLoggedIn) {
      // User is not authenticated
      return res.status(401).json({ message: 'User not authenticated' });
    }

    // User is authenticated, fetch their data from the database
    const user = await getUserByEmail(sessionData.email);

    if (!user) {
      // User not found in the database
      return res.status(404).json({ message: 'User not found' });
    }

    // User data retrieved successfully, send it to the client
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Error fetching user data' });
  }
}
