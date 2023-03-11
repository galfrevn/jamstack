import React, { FC } from 'react';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import PostTracker from 'components/PostTracker';

const CustomLink = (props: any) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return (
    <a
      target='_blank'
      id='external-link'
      rel='noopener noreferrer'
      {...props}
    />
  );
};

const PostImage: FC<ImageProps> = (props) => {
  return <Image alt={props.alt} {...props} />;
};

interface PostSubtitleProps {
  id: string;
  label: string;
}

const PostSubtitle: FC<PostSubtitleProps> = (props) => (
  <h2
    className='relative mt-3 border-t-2 border-rose-200/5 pt-9 text-xl font-extrabold text-[#FCBA28] sm:text-3xl'
    id={props.id}
  >
    <a
      href={`#${props.id}`}
      className="before:content-['#'] before:absolute before:-ml-[1em] before:text-rose-100/0 lg:hover:before:text-[rgba(251,245,220,0.05)]  pl-[1em] -ml-[1em]"
    >
      {props.label}
    </a>
  </h2>
);

const PostMiniTitle: FC<PostSubtitleProps> = (props) => (
  <h2
    className='relative mt-3 text-lg font-extrabold text-[#FCBA28] sm:text-xl'
    id={props.id}
  >
    <a
      href={`#${props.id}`}
      className="before:content-['#'] before:absolute before:-ml-[1em] before:text-rose-100/0 lg:hover:before:text-[rgba(251,245,220,0.05)]  pl-[1em] -ml-[1em]"
    >
      {props.label}
    </a>
  </h2>
);

const MDXComponents = {
  PostImage: PostImage,
  PostTracker: PostTracker,
  PostSubtitle: PostSubtitle,
  PostMiniTitle: PostMiniTitle,
  CustomLink: CustomLink,
};

export default MDXComponents;
