import { Route } from 'unflare';

export const HomeRoute = new Route('/');

HomeRoute.get(() => {
  const { req, res } = HomeRoute;
  if (!req.cookies.user) {
    return res.html(`
        <!DOCTYPE html>
        <html>
          <head>
            <title> You are not logged in! </title>
          </head>
          <body>
            <h1> Sign In</h1>
            <form action="/users" method="POST">
              <input type="text" name="name" />
              <input type="submit" />
            </form>
          </body>
        </html>
      `);
  } else {
    const user = JSON.parse(req.cookies.user);
    return res.html(`
        <!DOCTYPE html>
        <html>
          <head>
            <title> You are logged in! </title>
          </head>
          <body>
            <h1> Welcome ${user.name}</h1>
            <form action="/signout" method="GET">
              <input type="submit" value="Sign Out" />
            </form>
          </body>
        </html>
      `);
  }
});
