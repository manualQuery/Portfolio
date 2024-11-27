// src/pages/api/getProfiles.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { UserProfile } from '../../utils/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const profiles = await UserProfile.findAll();
      res.status(200).json(profiles);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch profiles' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
