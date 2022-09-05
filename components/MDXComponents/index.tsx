import React, { FC } from "react";
import Image, { ImageProps } from "next/image";

/* const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}; */

const PostImage: FC<ImageProps> = (props) => {
  return <Image alt={props.alt} {...props} />;
};

const MDXComponents = {
  PostImage: PostImage,
};

export default MDXComponents;
