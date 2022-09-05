import type { FC } from "react";
import React from "react";

interface PostHeaderProps {
  title: string;
}

const PostHeader: FC<PostHeaderProps> = ({ title }) => {
  return (
    <div className="xl:!col-end-5">
      <h1 className="text-2xl font-bold sm:text-4xl">{title}</h1>
      <div className="mt-2 flex space-x-2 text-base text-[#F9F4DA] opacity-60">
        <div>Aug 24</div>
        <div className="text-[#F9F4DA] opacity-70">·</div>
        <div>
          <span className="-mx-0.5 animate-[mutation_2s_ease-in-out_1] rounded-md px-0.5 slashed-zero tabular-nums tracking-tight">
            366
          </span>{" "}
          views
        </div>
        <div className="text-[#F9F4DA] opacity-70">·</div>
        <div>
          <span className="-mx-0.5 animate-[mutation_2s_ease-in-out_1] rounded-md px-0.5 slashed-zero tabular-nums tracking-tight">
            108
          </span>{" "}
          likes
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
