import { prisma } from 'lib/prisma';
import type { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;
  const postViews = await prisma.post.update({
    where: {
      slug: slug as string,
    },
    data: {
      views: {
        increment: 1,
      },
    },
  });

  if (!postViews)
    throw new Error('I could not retreive blog views', {
      cause: postViews,
    });

  res.status(200).json({ message: 'OK' });
}
