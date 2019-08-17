import posthtml from 'posthtml';
import { noscript } from '../';

describe('posthtmlNoscript', () => {
  test('noscript matches snapshot', () => {
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
