import { ITree } from 'posthtml';
import parser from 'posthtml-parser';

function noscript(options: IOptions = { parent: 'body' }) {
  if (!options.content) {
    throw new Error('An object containing a value for "content" is required');
  }

  return function plugin(tree: ITree) {
    const tag = options.parent === 'head' ? 'head' : 'body';

    tree.match({ tag }, node => {
      let content = node.content ? node.content : [];

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
  parent?: 'head' | 'body';
}

export { noscript };
