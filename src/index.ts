import { Unflare } from 'unflare';
import { HomeRoute } from './handlers/home';
import { SigningRouter } from './handlers/signing';

const app = new Unflare();

app.use(HomeRoute, SigningRouter);

export default app;
