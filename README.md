# posthtml-noscript <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![NPM][npm]][npm-url]
[![Deps][deps]][deps-url]
[![Build][build]][build-badge]
[![Coverage][codecov-shield]][codecov]

`posthtml-noscript` is a [PostHTML](https://github.com/posthtml/posthtml) plugin to insert [noscript](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) content.

**Use Cases:**

- Display a "Enable JavaScript" message in a Single Page Application (SPA)
- Specify resource link elements (e.g. stylesheets) to load if JavaScript is disabled

---

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

## Options

By default, the plugin prepends noscript markup inside the body tag.

Optionally, specify "head" as the parent tag to insert noscript content inside the head tag.

**Before:**

In this example, custom fonts are loaded via [Adobe Typekit](https://fonts.adobe.com/) using JavaScript. Without a resource link fallback, custom fonts can't be loaded.

```html
<head>
  <script src="https://use.typekit.net/XYZ.js">
    try { Typekit.load({ async: true }); } catch(e) {}
  </script>
</head>
```

**Config:**

```js
const fs = require('fs');
const posthtml = require('posthtml');
const { noscript } = require('posthtml-noscript');

const html = fs.readFileSync('./index.html');

posthtml()
  .use(
    noscript({
      content: '<link rel="stylesheet" href="fonts.css" />',
      parent: 'head'
    })
  )
  .process(html)
  .then(result => fs.writeFileSync('./after.html', result.html));
```

**After:**

If JavaScript is disabled, custom fonts can still be loaded.

```html
<head>
  <noscript><link rel="stylesheet" href="fonts.css"/></noscript>
  <script src="https://use.typekit.net/XYZ.js">
    try { Typekit.load({ async: true }); } catch(e) {}
  </script>
</head>
```

## Contributing

See the [PostHTML Guidelines](https://github.com/posthtml/posthtml/tree/master/docs).

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/posthtml-noscript.svg?color=blue
[npm-url]: https://npmjs.com/package/posthtml-noscript
[deps]: https://david-dm.org/posthtml/posthtml-noscript.svg
[deps-url]: https://david-dm.org/posthtml/posthtml-noscript
[build]: https://travis-ci.com/posthtml/posthtml-noscript.svg?branch=master
[build-badge]: https://travis-ci.com/posthtml/posthtml-noscript
[codecov]: https://codecov.io/gh/posthtml/posthtml-noscript
[codecov-shield]: https://img.shields.io/codecov/c/github/posthtml/posthtml-noscript.svg
