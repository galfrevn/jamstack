import React, { Fragment } from 'react';
import { GuestbookComment } from '@prisma/client';

import moment from 'moment';

import useSWR from 'swr';
import { fetcher } from 'lib/swr';
import { motion } from 'framer-motion';

const GuestbookComments = () => {
  const { data: comments } = useSWR<GuestbookComment[]>(
    '/api/guestbook',
    fetcher
  );

  return (
    <Fragment>
      {comments?.map((comment) => (
        <Comment {...comment} key={comment.id} />
      ))}
    </Fragment>
  );
};

const Comment = ({ user, content, createdAt, id }: any) => {
  return (
    <motion.div
      key={`comment-${id}`}
      initial={{ opacity: 0, y: 4 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      viewport={{ once: true }}
    >
      <div className='flex items-center justify-between'>
        <p className='text-base'>{user.name}</p>
        <span className='text-base opacity-50'>
          {moment(createdAt).fromNow()}
        </span>
      </div>
      <p className='text-base mt-1 opacity-60 '>{content}</p>
    </motion.div>
  );
};

export default GuestbookComments;
