import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";

import rehypePrettyCode from "rehype-pretty-code";
import { rehypePrettyCodeOptions } from "./lib/rehypePrettyCode";

const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  // Location of Post source files (relative to `contentDirPath`)
  filePathPattern: `posts/*.mdx`,
  fields: {
    publishedAt: {
      type: "string",
      description: "The date of the post",
      required: true,
    },
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    summary: {
      type: "string",
      description: "The summary of the post",
      required: true,
    },
    color: {
      type: "string",
      description: "Color of the post background",
      required: false,
    },
  },

  computedFields: {
    slug: {
      type: "string",
      resolve: (post) =>
        post._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ""),
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    wordCount: {
      type: "number",
      resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    },
  },
}));

export default makeSource({
  // Location of source files for all defined documentTypes
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});
