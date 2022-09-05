import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { Fragment } from "react";
import Head from "next/head";

// Post & MDX
import { allPosts, type Post } from "contentlayer/generated";
import { createOgImage } from "lib/createOgImage";
import { useMDXComponent } from "next-contentlayer/hooks";

import MDXComponents from "components/MDXComponents";
import PostTracker from "components/PostTracker";
import PostHeader from "components/PostHeader";

export default function Post({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // Render code snippet from MDX
  const MDXContent = useMDXComponent(post.body.code);
  const ogImage = createOgImage({
    title: post.title,
    meta: ["galfrevn.dev", post.publishedAt].join(" · "),
  });

  return (
    <Fragment>
      <Head>
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1040" />
        <meta property="og:image:height" content="798" />
        <meta property="og:image:alt" content={post.title} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main
        className="text-[#F9F4DA] relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] 
        gap-y-8 px-4 pt-48 text-lg xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] 
          xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3"
      >
        <PostHeader title={post.title} />

        <PostTracker
          pages={[
            {
              id: "how-to-create-a-blog-with-mdx",
              label: "How to create a blog with MDX",
            },
          ]}
        />

        <MDXContent components={MDXComponents} />
      </main>
    </Fragment>
  );
}

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ post: Post }> = ({ params }) => {
  const post = allPosts.find((post) => post.slug === params?.slug);
  if (!post) return { notFound: true };

  return { props: { post } };
};
