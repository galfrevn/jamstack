import { hasOneDayPassed } from 'lib/dates';
import { prisma } from 'lib/prisma';
import type { NextApiResponse, NextApiRequest } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { content, user } = req.body;

  const hasAResentComment = await prisma.guestbookComment.findMany({
    where: {
      user: {
        id: user.id,
      },
    },
  });

  if (hasAResentComment.some((comment) => !hasOneDayPassed(comment.createdAt)))
    return res.status(400).json({ message: 'You need to wait at least one day to leave another comment' })

  const comment = await prisma.guestbookComment.create({
    data: {
      content,
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  if (!comment) throw new Error('Something went wrong');

  res.status(200).json({ comment });
}
