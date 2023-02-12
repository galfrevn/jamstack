import React from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { SWRConfig } from 'swr';
import { motion } from 'framer-motion';
import { GuestbookComment } from '@prisma/client';
import { SessionProvider } from 'next-auth/react';

import Container from 'components/Container';
import Footer from 'components/Footer';
import GuestbookActions from 'components/Guestbook/actions';
import GuestbookComments from 'components/Guestbook/comments';

const Guestbook = ({
  comments,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <SWRConfig value={{ fallback: { '/api/guestbook': comments } }}>
      <Container>
        <div className='-mt-12 sm:mt-0'>
          <motion.h1
            key='guestbook-title'
            className='text-3xl font-black sm:text-4xl'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
          >
            Guestbook
          </motion.h1>
          <motion.h2
            key='subtitle'
            className='text-base sm:text-lg my-5'
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
          >
            <span className='opacity-70'>
              Hi there! I&apos;d love to hear your thoughts on my blog. Please leave
              a comment in my guestbook and let me know what you think. Your
              feedback is important and appreciated. Thanks for reading!
            </span>
          </motion.h2>

          <SessionProvider>
            <GuestbookActions />
          </SessionProvider>
        </div>
        <GuestbookComments />
        <Footer />
      </Container>
    </SWRConfig>
  );
};

export default Guestbook;

export const getStaticProps: GetStaticProps<{
  comments: GuestbookComment[];
}> = async () => {
  /* const host =
    process.env.NODE_ENV === 'production'
      ? 'https://blog.galfrevn.com'
      : 'http://localhost:3000'; */

  const comments = await fetch('/api/guestbook').then((res) =>
    res.json()
  );

  return {
    props: { comments },
    revalidate: 30,
  };
};
