import type { GetStaticProps, InferGetStaticPropsType } from 'next';
// Posts
import { allPosts, type Post } from 'contentlayer/generated';

// Social
import { socials } from 'constants/networks';
import { Link } from 'react-feather';

// Components
import Postcard from 'components/Postcard';
import Footer from 'components/Footer';
import Container from 'components/Container';
import Hero from 'components/Hero';
import TotalViews from 'components/TotalViews';
import Update from 'components/Update';
import Tag from 'components/Tag';

export default function PostListPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Hero />

      <div className='flex justify-start items-center gap-3 flex-wrap'>
        <TotalViews />

        {socials.map((network, index) => (
          <Tag {...network} key={network.label} index={index} icon={<Link size={13} />} />
        ))}
      </div>

      <Update />

      <div className='-mt-4 pb-10'>
        <div className='space-y-6 '>
          <div className='flex space-x-2'></div>
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
