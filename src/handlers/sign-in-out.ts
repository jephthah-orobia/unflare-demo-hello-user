import { Router } from 'unflare';

const router = new Router();

router.post('/sign-in', () => {
  const { req, res } = router;
  if (!req.body.name) return res.status(401).send('name');
  const id = crypto.randomUUID();
  console.log(id, req.body.name);
  res.cookie('user', JSON.stringify({ name: req.body.name, id }));
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
