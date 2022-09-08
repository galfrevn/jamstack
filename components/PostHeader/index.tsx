import type { Post } from "contentlayer/generated";
import type { FC } from "react";
import React from "react";

const PostHeader: FC<Post> = ({ title, publishedAt, readingTime, wordCount }) => {
  return (
    <div className="xl:!col-end-5">
      <h1 className="text-4xl leading-[1.2] font-semibold" >
        {title}
      </h1>
      <div className="mt-2 flex space-x-2 text-base text-[#F9F4DA] opacity-60">
        <div>{publishedAt}</div>
        <div className="text-[#F9F4DA] opacity-70">·</div>
        <div>
          <span className="-mx-0.5 animate-[mutation_2s_ease-in-out_1] rounded-md px-0.5 slashed-zero tabular-nums tracking-tight">
            {readingTime.text}
          </span>{" "}
        </div>
        <div className="text-[#F9F4DA] opacity-70">·</div>
        <div>
          <span className="-mx-0.5 animate-[mutation_2s_ease-in-out_1] rounded-md px-0.5 slashed-zero tabular-nums tracking-tight">
            {wordCount}
          </span>{" "}
          words
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
