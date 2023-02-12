import { prisma } from 'lib/prisma';
import type { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const comments = await prisma.guestbookComment.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      user: true,
    },
  });

  console.log(comments)

  res.status(200).json(comments);
}
