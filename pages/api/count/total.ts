import { prisma } from 'lib/prisma';
import type { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const totalViews = await prisma.post.aggregate({
    _sum: {
      views: true,
    },
  });

  if (!totalViews)
    throw new Error('I could not retreive blog total views');

  res.status(200).json(totalViews._sum.views);
}
