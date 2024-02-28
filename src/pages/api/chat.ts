import { NextApiRequest, NextApiResponse } from 'next';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { prompt } = req.body;

  } catch (error) {
    res.status(500).json({ error: error });
  }
}
