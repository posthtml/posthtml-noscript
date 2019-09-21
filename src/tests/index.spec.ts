import posthtml from 'posthtml';
import { noscript } from '../';

describe('posthtml-noscript', () => {
  it('throws an error if no argument is present', () => {
    // @ts-ignore
    expect(() => {
      noscript();
    }).toThrowError('An object containing a value for "content" is required');
  });

  it('matches the snapshot', () => {
    posthtml()
      .use(
        noscript({ content: 'You need to enable JavaScript to run this app.' })
      )
      .process(
        `<body>
          <div id="root"></div>
        </body>`
      )
      .then(result => {
        expect(result.html).toMatchSnapshot();
      });
  });

  it('matches the snapshot – "head" as parent', () => {
    posthtml()
      .use(
        noscript({
          content: '<link rel="stylesheet" href="fonts.css" />',
          parent: 'head'
        })
      )
      .process(
        `<head>
          <script src="https://use.typekit.net/XYZ.js">try { Typekit.load({ async: true }); } catch(e) {}</script>
        </head>`
      )
      .then(result => {
        expect(result.html).toMatchSnapshot();
      });
  });
});
