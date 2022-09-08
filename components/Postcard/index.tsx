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
      style={{
        filter: "drop-shadow(8px 8px 0px #231f20)",
        backgroundColor: color,
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 + 0.08 * index } }}
    >
      <Link href={`/blog/${slug}`}>
        <a className="grid gap-2">
          <header>
            <h5 className="font-bold lg:text-2xl leading-6 ">
              {title}
            </h5>
            <p className="font-semibold text-xs mt-1 lg:mt-2 lg:text-sm">
              {publishedAt}
            </p>
            <p className="font-semibold text-xs lg:text-sm">
              {readingTime.text} - {wordCount} words.
            </p>
          </header>
          <p className="my-1 lg:my-2 text-sm leading-tight lg:text-lg lg:leading-6 lg:font-medium">
            {summary}
          </p>
        </a>
      </Link>
    </motion.div>
  );
};

export default Postcard;
