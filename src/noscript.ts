import { INode, ITree } from 'posthtml';
import parser from 'posthtml-parser';

function noscript(options?: IOptions) {
  if (!options || !options.content) {
    throw new Error('An object containing a value for "content" is required');
  }

  return function plugin(tree: ITree) {
    let tag = 'body';

    if (options.parent && options.parent === 'head') {
      tag = 'head';
    }

    tree.match({ tag }, node => {
      let content: INode[] = [];

      if (node.content) {
        content = [...node.content];
      }

      content = [
        { tag: 'noscript', content: parser(options.content) },
        ...content
      ];

      return { ...node, content };
    });
  };
}

interface IOptions {
  content?: string;
  parent?: 'head';
}

export { noscript };
