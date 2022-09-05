import React, { FC, Fragment } from "react";
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
          <div className="uppercase text-rose-100/30">On this page</div>

          {pages.map((page, index) => (
            <Fragment key={index}>
              <Link
                href={`#${page.id}`}
                className="block text-[#F9F4DA] opacity-70 underline-offset-2 transition-all hover:opacity-90
                 hover:underline hover:decoration-[#F9F4DA]"
              >
                {page.label}
              </Link>
              {page.semipage &&
                page.semipage.map((semipage, index) => (
                  <Link
                    key={index}
                    href={`#${semipage.id}`}
                    className="block text-[#F9F4DA] opacity-70 underline-offset-2 transition-all hover:opacity-90 
                    hover:underline hover:decoration-[#F9F4DA] pl-2"
                  >
                    {semipage.label}
                  </Link>
                ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostTracker;
