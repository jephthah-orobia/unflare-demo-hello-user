import { Router } from 'unflare';

export const Users = new Router();

Users.post('/users', () => {
  const { req, res } = Users;
  if (!req.body.name) return res.status(401).send('name');
  const id = crypto.randomUUID();
  res.cookie('user', JSON.stringify({ name: req.body.name, id }));
  res.status(302, 'Redirecting').headers.set('Location', '/');
  res.send();
});
