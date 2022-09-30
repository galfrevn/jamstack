import type { Post } from "contentlayer/generated";
import type { FC } from "react";
import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";

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
  color = "#F9F4DA",
}) => {
  return (
    <motion.div
      key="card"
      className="rounded-lg p-6 md:p-8 text-[#231f20] border border-[#231f20]"
      style={{ backgroundColor: color }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 + 0.08 * index } }}
      whileHover={{ scale: 1.02 }}
    >
      <Link href={`/blog/${slug}`}>
        <a className="grid gap-2">
          <header>
            <h2 className="font-bold lg:text-lg uppercase">{title}</h2>
            <p className="font-semibold text-xs mt-1 lg:mt-2 lg:text-sm">
              {publishedAt}
            </p>
            <p className="font-semibold text-xs lg:text-sm">
              {readingTime.text} - {wordCount} words.
            </p>
          </header>
          <p className="my-1 lg:my-2 text-sm leading-tight lg:text-md lg:leading-2 font-semibold">
            {summary}
          </p>
        </a>
      </Link>
    </motion.div>
  );
};

export default Postcard;
