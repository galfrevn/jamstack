import type { Post } from 'contentlayer/generated';
import type { FC } from 'react';
import React from 'react';

import { useEnabledOnFirstIntersection } from 'hooks/useEnabledOnFirstIntersection';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { Metrics, Pill } from 'components/Postcard/metrics';
import { BookOpen } from 'react-feather';

interface PostCardProps extends Post {
  color?: string;
  index: number;
}

const Postcard: FC<PostCardProps> = ({
  index,
  title,
  slug,
  wordCount,
  readingTime,
  summary,
  publishedAt,
  color = '#F9F4DA',
}) => {
  const { enabled, intersectionRef } = useEnabledOnFirstIntersection();

  return (
    <motion.div
      key='card'
      ref={intersectionRef}
      className='rounded-lg p-6 md:p-8 text-[#231f20] border border-[#231f20]'
      style={{ backgroundColor: color }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: index === 0 ? 0.4 : 0.1 },
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <Link href={`/blog/${slug}`}>
        <a className='grid gap-2'>
          <header>
            <h2 className='font-black lg:text-lg uppercase'>{title}</h2>
            <p className='font-semibold text-xs lg:text-sm mt-1 lg:mt-2'>
              {publishedAt}
            </p>
            <div className='flex items-center gap-2 mt-1'>
              <Pill text={readingTime.text} icon={<BookOpen size={13} />} />
              <Pill text={`${wordCount} words`} />
              {enabled && <Metrics slug={slug} />}
            </div>
          </header>
          <p className='my-1 lg:my-2 text-sm leading-tight lg:text-md lg:leading-2 font-semibold'>
            {summary}
          </p>
        </a>
      </Link>
    </motion.div>
  );
};

export default Postcard;
