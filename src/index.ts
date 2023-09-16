import { Unflare } from 'unflare';
import { HomeRoute } from './handlers/home';
import { Users } from './handlers/users';
import { SignOutRouter } from './handlers/sign-out';

const app = new Unflare();

app.use(HomeRoute, Users, SignOutRouter);

export default app;
