import { Unflare } from 'unflare';

const app = new Unflare();

app.get('/', () => {
  const { res } = app;

  res.send('Hello World!');
});

export default app;
