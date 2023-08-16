import { Router } from 'unflare';

export const SignOutRouter = new Router();

SignOutRouter.get('/signout', () => {
  const { res } = SignOutRouter;
  res.cookie('user', '');
  res.status(302, 'Redirecting').headers.set('Location', '/');
  res.send();
});
