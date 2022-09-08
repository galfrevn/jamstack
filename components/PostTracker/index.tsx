import React, { FC } from "react";
import Link from "next/link";

interface PostTrackerPageProps {
  label: string; // What is shown
  id: string; // To what id should move on click,
  semipage?: PostTrackerPageProps[];
}

interface PostTrackerProps {
  pages: PostTrackerPageProps[];
}

const PostTracker: FC<PostTrackerProps> = ({ pages }) => {
  return (
    <div className="sticky top-6 hidden h-0 xl:!col-start-4 xl:row-start-2 xl:block">
      <div className="space-y-6">
        <div className="space-y-2 text-sm">
          <div className="uppercase text-rose-100/30 mb-2 ">On this page</div>

          {pages.map((page, index) => (
            <div className="flex flex-col gap-1" key={index}>
              <Link href={`#${page.id}`} >
                <p className="block text-[#F9F4DA] opacity-70 underline-offset-2 transition-all hover:opacity-90
                  hover:underline hover:decoration-[#F9F4DA] cursor-pointer">
                  {page.label}
                </p>
              </Link>
              {page.semipage &&
                page.semipage.map((semipage, index) => (
                  <Link
                    key={index}
                    href={`#${semipage.id}`}
                  >
                    <p className="block text-[#F9F4DA] opacity-70 underline-offset-2 transition-all hover:opacity-90 
                    hover:underline hover:decoration-[#F9F4DA] ml-2 cursor-pointer" >
                      {semipage.label}
                    </p>
                  </Link>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostTracker;
