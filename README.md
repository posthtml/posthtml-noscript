# posthtml-noscript <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Build][build]][build-badge]
[![Coverage][codecov-shield]][codecov]

`posthtml-noscript` is a [PostHTML](https://github.com/posthtml/posthtml) plugin to insert [noscript](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) content.

**Before:**

```html
<body>
  <div id="root"></div>
</body>
```

**After:**

```html
<body>
  <noscript>You need to enable JavaScript to run this app.</noscript>
  <div id="root"></div>
</body>
```

## Install

```bash
yarn add -D posthtml-noscript
# OR
npm i posthtml-noscript
```

## Usage

```js
const fs = require('fs');
const posthtml = require('posthtml');
const { noscript } = require('posthtml-noscript');

const html = fs.readFileSync('./index.html');

posthtml()
  .use(noscript({ content: 'You need to enable JavaScript to run this app.' }))
  .process(html)
  .then(result => fs.writeFileSync('./after.html', result.html));
```

### Options

| Name      | Kind                                | Description                                                 |
| --------- | ----------------------------------- | ----------------------------------------------------------- |
| `content` | **required** `string`               | Markup to insert in the "noscript" tag                      |
| `parent`  | optional "head" (default is "body") | Specifiy the parent element to insert the noscript content. |

### Contributing

See the [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs).

## [Changelog](CHANGELOG.md)

### License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/posthtml-noscript.svg?color=blue
[npm-url]: https://npmjs.com/package/posthtml-noscript
[deps]: https://david-dm.org/metonym/posthtml-noscript.svg
[deps-url]: https://david-dm.org/metonym/posthtml-noscript
[build]: https://travis-ci.com/metonym/posthtml-noscript.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/posthtml-noscript
[codecov]: https://codecov.io/gh/metonym/posthtml-noscript
[codecov-shield]: https://img.shields.io/codecov/c/github/metonym/posthtml-noscript.svg
