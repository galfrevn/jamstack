import type { GetStaticProps, InferGetStaticPropsType } from "next";
// Posts
import { allPosts, type Post } from "contentlayer/generated";

// Components
import Postcard from "components/Postcard";
import Footer from "components/Footer";
import Container from "components/Container";

export default function PostListPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <div className="-mt-12 sm:mt-0 pb-10">
        <div className="space-y-6 mt-8">
          <div className="flex space-x-2"></div>
          {posts.map((post: Post, index: number) => (
            <Postcard key={index} index={index} {...post} />
          ))}
        </div>
      </div>
      <Footer />
    </Container>
  );
}

// Get all posts
export const getStaticProps: GetStaticProps<{ posts: Post[] }> = () => {
  return { props: { posts: allPosts } };
};
