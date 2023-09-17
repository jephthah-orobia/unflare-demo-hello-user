import { Router } from 'unflare';

const router = new Router();

router.post('/sign-in', () => {
  const { body, res } = router;
  if (!body.name) return res.status(401).send('name');
  const id = crypto.randomUUID();
  console.log(id, body.name);
  res.cookie('user', JSON.stringify({ name: body.name, id }));
  res.status(302, 'Redirecting').headers.set('Location', '/');
  console.dir(res.headers);
  res.send();
});

router.get('/sign-out', () => {
  const { res } = router;
  res.cookie('user', '');
  res.status(302, 'Redirecting').headers.set('Location', '/');
  res.send();
});

export { router as SignInOutRouter };
