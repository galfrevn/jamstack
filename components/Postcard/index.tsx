import type { Post } from "contentlayer/generated";
import type { FC } from "react";
import React from "react";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface PostCardProps extends Post {
  color?: string;
}

const Postcard: FC<PostCardProps> = ({
  title,
  slug,
  wordCount,
  readingTime,
  summary,
  publishedAt,
  color = "#F9F4DA",
}) => {
  return (
    <motion.div
      key="card"
      className="rounded-lg p-6 md:p-8 text-[#231f20] border border-[#231f20]"
      style={{
        filter: "drop-shadow(8px 8px 0px #231f20)",
        backgroundColor: color,
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
    >
      <Link href={`/blog/${slug}`}>
        <a className="grid gap-2">
          <header>
            <h5 className="font-bold">{title}</h5>
            <div className="inline-flex gap-1 mt-2">
              <Image
                alt="star"
                src="https://res.cloudinary.com/qwertytesting123/image/upload/v1662340452/star.svg"
                width="18"
                height="18"
                decoding="async"
                data-nimg="future"
              />
              <Image
                alt="star"
                src="https://res.cloudinary.com/qwertytesting123/image/upload/v1662340452/star.svg"
                width="18"
                height="18"
                decoding="async"
                data-nimg="future"
              />
              <Image
                alt="star"
                src="https://res.cloudinary.com/qwertytesting123/image/upload/v1662340452/star.svg"
                width="18"
                height="18"
                decoding="async"
                data-nimg="future"
              />
              <Image
                alt="star"
                src="https://res.cloudinary.com/qwertytesting123/image/upload/v1662340452/star.svg"
                width="18"
                height="18"
                decoding="async"
                data-nimg="future"
              />
              <Image
                alt="star"
                src="https://res.cloudinary.com/qwertytesting123/image/upload/v1662340452/star.svg"
                width="18"
                height="18"
                decoding="async"
                data-nimg="future"
              />
            </div>
            <p className="font-black text-xs mt-1 ">{publishedAt} </p>
            <p className="font-black text-xs ">
              {readingTime.text} - {wordCount} words.
            </p>
          </header>
          <p className="my-1 text-sm leading-tight ">{summary}</p>
        </a>
      </Link>
    </motion.div>
  );
};

export default Postcard;
