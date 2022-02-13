# posthtml-noscript <img align="right" width="220" height="200" title="PostHTML logo" src="http://posthtml.github.io/posthtml/logo.svg">

[![NPM][npm]][npm-url]

`posthtml-noscript` is a [PostHTML](https://github.com/posthtml/posthtml) plugin to insert [noscript](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript) content.

**Use Cases:**

- Display an "Enable JavaScript" message in a Single Page Application (SPA)
- Specify resourcs (e.g. StyleSheets) to load if JavaScript is disabled

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

## Installation

```bash
# Yarn
yarn add -D posthtml-noscript

# NPM
npm i -D posthtml-noscript

# pnpm
pnpm i -D posthtml-noscript
```

## Usage

```js
const fs = require("fs");
const posthtml = require("posthtml");
const { noscript } = require("posthtml-noscript");

const html = fs.readFileSync("./index.html");

posthtml()
  .use(
    noscript({
      content: "You need to enable JavaScript to run this app.",
    })
  )
  .process(html)
  .then((result) => fs.writeFileSync("./after.html", result.html));
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
const fs = require("fs");
const posthtml = require("posthtml");
const { noscript } = require("posthtml-noscript");

const html = fs.readFileSync("./index.html");

posthtml()
  .use(
    noscript({
      content: '<link rel="stylesheet" href="fonts.css" />',
      parent: "head",
    })
  )
  .process(html)
  .then((result) => fs.writeFileSync("./after.html", result.html));
```

**After:**

If JavaScript is disabled, custom fonts can still be loaded.

```html
<head>
  <noscript><link rel="stylesheet" href="fonts.css" /></noscript>
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
