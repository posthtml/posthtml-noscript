import { ITree } from 'posthtml';

function noscript() {
  return function plugin(tree: ITree) {
    return tree;
  };
}

export { noscript };
