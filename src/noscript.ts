import { PostHTML } from 'posthtml';
import parser from 'posthtml-parser';

function noscript(options: IOptions = { parent: 'body' }) {
  if (!options.content) {
    throw new Error('An object containing a value for "content" is required');
  }

  return function plugin(tree: PostHTML.Node) {
    const tag = options.parent === 'head' ? 'head' : 'body';

    tree.match({ tag }, node => {
      if (node.content) {
        const content = { tag: 'noscript', content: parser(options.content) };
        node.content.unshift(content as PostHTML.Node);
      }

      return node;
    });
  };
}

interface IOptions {
  content?: string;
  parent?: 'head' | 'body';
}

export { noscript };
