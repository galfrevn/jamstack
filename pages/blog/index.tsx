import { allPosts, type Post } from "contentlayer/generated";
import { type GetStaticProps, type InferGetStaticPropsType } from "next";
import Link from "next/link";

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = () => {
  return { props: { posts: allPosts } };
};

export default function PostListPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>Blog</h1>

      {posts.map((post) => (
        <div key={post.slug}>
          <h2>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </h2>
        </div>
      ))}
    </div>
  );
}
