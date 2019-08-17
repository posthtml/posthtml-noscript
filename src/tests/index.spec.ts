import posthtml from 'posthtml';
import { noscript } from '../';

describe('posthtmlNoscript plugin', () => {
  it('requires a value for content', () => {
    // @ts-ignore
    expect(() => {
      noscript();
    }).toThrowError('An object containing a value for "content" is required');
  });

  it('matches snapshot', () => {
    posthtml()
      .use(
        noscript({ content: 'You need to enable JavaScript to run this app.' })
      )
      .process(
        `<body>
          <div id="root"></div>
        </body>`
      )
      .then((result: { html: string }) => {
        expect(result.html).toMatchSnapshot();
      });
  });

  it('matches snapshot – "head" as parent', () => {
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
      .then((result: { html: string }) => {
        expect(result.html).toMatchSnapshot();
      });
  });
});
