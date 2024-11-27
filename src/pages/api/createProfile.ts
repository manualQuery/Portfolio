// src/pages/api/createProfile.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { UserProfile } from '../../utils/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { userId, photo, religion, sex, occupation, description } = req.body;
    try {
      const newProfile = await UserProfile.create({
        userId,
        photo,
        religion,
        sex,
        occupation,
        description,
      });
      res.status(201).json(newProfile);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create profile' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
