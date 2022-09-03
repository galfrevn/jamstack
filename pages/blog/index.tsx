import type { GetStaticProps, InferGetStaticPropsType } from "next";
// Posts
import { allPosts, type Post } from "contentlayer/generated";

// Components
import Postcard from "components/Postcard";

export default function PostListPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="space-y-10 mt-8">
      <div className="flex space-x-2"></div>

      {posts.map((post: Post, index: number) => (
        <Postcard key={index} {...post} />
      ))}
    </div>
  );
}

// Get all posts
export const getStaticProps: GetStaticProps<{ posts: Post[] }> = () => {
  return { props: { posts: allPosts } };
};
