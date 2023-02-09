import { prisma } from 'lib/prisma';
import type { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;

  const postViews = await prisma.post.findUnique({
    where: {
      slug: slug as string,
    },
  });

  if (!postViews)
    throw new Error('I could not retreive blog views', {
      cause: postViews,
    });

  res.status(200).json(postViews.views);
}
