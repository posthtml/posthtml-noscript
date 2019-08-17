import { INode, ITree } from 'posthtml';
import parser from 'posthtml-parser';

function noscript(options: IOptions) {
  return function plugin(tree: ITree) {
    tree.match({ tag: 'body' }, node => {
      let content: INode[] = [];

      if (node.content) {
        content = [...node.content];
      }

      content.push({ tag: 'noscript', content: parser(options.content) });

      return { ...node, content };
    });
  };
}

interface IOptions {
  content: string;
}

export { noscript };
