import type { GetStaticProps, InferGetStaticPropsType } from "next";
// Posts
import { allPosts, type Post } from "contentlayer/generated";

// Components
import Postcard from "components/Postcard";

export default function PostListPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {

  console.log(posts)

  return (
    <main
      className="pt-48 relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 text-lg text-[#F9F4DA] xl:grid-cols-[1fr,minmax(auto,280px),min(640px,100%),minmax(auto,280px),1fr] 
       xl:gap-x-8 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3"
    >
      <div className="-mt-12 sm:mt-0">
        <div className="space-y-6 mt-8">
          <div className="flex space-x-2"></div>

          {posts.map((post: Post, index: number) => (
            <Postcard key={index} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}

// Get all posts
export const getStaticProps: GetStaticProps<{ posts: Post[] }> = () => {
  return { props: { posts: allPosts } };
};
