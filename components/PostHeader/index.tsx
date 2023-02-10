import type { Post } from 'contentlayer/generated';
import type { FC } from 'react';

import { Metrics, Pill } from 'components/Postcard/metrics';

const PostHeader: FC<Post> = ({
  slug,
  title,
  publishedAt,
  readingTime,
  wordCount,
}) => {
  return (
    <div className='xl:!col-end-5'>
      <h1 className='text-4xl leading-[1.2] font-extrabold'>{title}</h1>
      <div className='mt-2 flex space-x-2 text-base text-[#F9F4DA] opacity-60'>
        <p>{publishedAt}</p>
        <div className='text-[#F9F4DA] opacity-70'>·</div>

        <Pill text={readingTime.text} />
        <div className='text-[#F9F4DA] opacity-70'>·</div>
        <Pill text={`${wordCount} words`} />
        <div className='text-[#F9F4DA] opacity-70'>·</div>

        <Metrics slug={slug} />
      </div>
    </div>
  );
};

export default PostHeader;
