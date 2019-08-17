import posthtml from 'posthtml';
import { noscript } from '../';

describe('posthtmlNoscript', () => {
  test('noscript matches snapshot', () => {
    posthtml()
      .use(noscript())
      .process(`<body></body>`)
      .then((result: { html: string }) => {
        expect(result.html).toMatchSnapshot();
      });
  });
});
