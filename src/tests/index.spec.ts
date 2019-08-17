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
});
