import type { Node } from "posthtml";
import { parser } from "posthtml-parser";

interface IOptions {
  content?: string;
  parent?: "head" | "body";
}

export const noscript = (options: IOptions = { parent: "body" }) => {
  if (!options.content) {
    throw new Error('An object containing a value for "content" is required');
  }

  return (tree: Node) => {
    const tag = options.parent === "head" ? "head" : "body";

    tree.match({ tag }, (node) => {
      if (node.content) {
        const content = {
          tag: "noscript",
          content: parser(options.content!),
        } as Node;

        node.content.unshift(content);
      }

      return node;
    });
  };
};
