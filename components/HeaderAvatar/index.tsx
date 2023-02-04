import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Avatar from header
// Need to add profile picture
const HeaderAvatar = () => {
  return (
    <Link
      href='/'
      passHref
      title='View home page'
      className='rounded-full focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCBA28] '
    >
      <motion.div
        key='image'
        className='rounded-full shadow-lg p-[2px] ring-[2px] ring-white cursor-pointer'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.07 }}
      >
        <div className='rounded-full p-px h-[36px] w-[36px] transition duration-300 group-hover:scale-105'>
          <Image
            alt='A Valentin picture'
            src='/images/avatar.png'
            width='64'
            height='64'
            decoding='async'
            data-nimg='future'
            className='rounded-full'
          />
        </div>
      </motion.div>
    </Link>
  );
};

export default HeaderAvatar;
