import { type Options } from "rehype-pretty-code";

export const rehypePrettyCodeOptions: Partial<Options> = {
  theme: "one-dark-pro",
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
};
