import { Unflare } from 'unflare';
import { HomeRoute } from './handlers/home';
import { SignInOutRouter } from './handlers/sign-in-out';

const app = new Unflare();

app.use(HomeRoute, SignInOutRouter);

export default app;
