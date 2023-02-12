import Image from 'next/image';
import { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

import { fetcher, postFetcher } from 'lib/swr';
import useSWRMutation from 'swr/mutation';
import useSWR from 'swr';
import toast from 'react-hot-toast';

import { motion } from 'framer-motion';
import { GitHub, Send } from 'react-feather';

import Dots from 'components/Dots';

const SignInButton = () => {
  const handleSignIn = () => signIn('github', { redirect: false });
  return (
    <motion.button
      key='github-button'
      onClick={handleSignIn}
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      className='flex items-center px-6 py-3 gap-2 bg-black rounded-lg text-white focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-[#151214] '
    >
      <GitHub size={18} />
      <p className='text-sm font-semibold'>Sign in with GitHub</p>
    </motion.button>
  );
};

const GuestbookActions = () => {
  const { data } = useSession();
  const [content, setContent] = useState('');

  const { mutate, isLoading } = useSWR('/api/guestbook', fetcher);
  const { trigger, error, isMutating } = useSWRMutation(
    `/api/guestbook/create`,
    postFetcher,
    { revalidate: false, onSuccess: () => mutate(), throwOnError: true }
  );

  const submittingComment = isLoading || isMutating;

  const handleSubmitComment = () => {
    toast.promise(
      trigger({ content, user: data?.user }),
      {
        loading: 'Uploading...',
        success: (
          <div>
            <p className='text-sm font-semibold'>Comment successfully saved</p>
            <p className='text-xs opacity-60'>
              Thanks for helping with your feedback!
            </p>
          </div>
        ),
        error: (
          <div>
            <p className='text-sm font-semibold'>
              Could not saved your comment
            </p>
            <p className='text-xs opacity-60'>{error?.info?.message}</p>
          </div>
        ),
      },
      {
        style: {
          borderRadius: '10px',
          background: '#000',
          border: '1px solid white',
          color: '#fff',
        },
      }
    );
    setContent('');
  };

  if (!data) return <SignInButton />;

  return (
    <div>
      <div className='flex items-center gap-2'>
        <motion.span
          key='user-image'
          className='h-[22px]'
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
        >
          <Image
            src={data.user?.image ?? '/images/avatar.png'}
            alt={`${data.user?.name} profile picture`}
            width={22}
            height={22}
            placeholder='blur'
            blurDataURL='/images/avatar-blured.webp'
          />
        </motion.span>
        <motion.h2
          key='user-information'
          className='text-base'
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        >
          {data.user?.name}
        </motion.h2>
      </div>
      <motion.textarea
        rows={3}
        maxLength={100}
        value={content}
        key='comment-input'
        className='text-sm bg-black p-4 rounded-lg resize-none w-full mt-3 mb-0.5'
        placeholder='Write your thoughts'
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}
        onChange={(e) => setContent(e.target.value)}
        disabled={submittingComment}
      />

      <div className='flex items-center gap-2'>
        <motion.button
          key='github-button'
          onClick={handleSubmitComment}
          disabled={content.length <= 20 || submittingComment}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
          className='disabled:text-opacity-30 disabled:bg-opacity-40 disabled:cursor-not-allowed flex items-center px-6 py-3 gap-2 bg-black rounded-lg text-white focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-[#151214] '
        >
          <Send size={15} />
          <p className='text-sm font-semibold'>Submit comment</p>
        </motion.button>
        {submittingComment && <Dots />}
      </div>
    </div>
  );
};

export default GuestbookActions;
