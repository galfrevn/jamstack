import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { Fragment } from "react";
import Head from "next/head";

// Post & MDX
import { allPosts, type Post } from "contentlayer/generated";
import { createOgImage } from "lib/createOgImage";
import { useMDXComponent } from "next-contentlayer/hooks";

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
      <div>
        <h1>{post.title}</h1>
        <MDXContent />
      </div>
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
