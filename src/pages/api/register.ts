// src/pages/api/register.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { RegisteredUser } from '../../utils/db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, firstName, phoneNumber, email, userName, password, confirmPassword } = req.body;
    try {
      const newUser = await RegisteredUser.create({
        name,
        firstName,
        phoneNumber,
        email,
        userName,
        password,
        confirmPassword,
      });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to register user' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
