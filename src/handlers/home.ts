import { Route } from 'unflare';

export const HomeRoute = new Route('/');

HomeRoute.get(() => {
  const { req, res } = HomeRoute;
  if (!req.cookies.user) {
    return res.html(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>I don't know you! </title>
          </head>
          <body style="
            background-color: #333333;
            ">
            <div style="
              background-color: rgba(240, 240, 240, 0.8);
              width: 400px;
              padding: 30px 20px;
              border-radius: 20px;
              margin: 50px auto;
              text-align: center;
            ">
              <h1>I don't know you!</h1>
              <form action="/users" method="POST">
                <p><label for="name">What is your name?</label></p>
                <p><input type="text" id="name" name="name" /></p>
                <p><input type="submit" /></p>
              </form>
            </div>
          </body>
        </html>
      `);
  } else {
    const user = JSON.parse(req.cookies.user);
    return res.html(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Hello ${user.name}! </title>
          </head>
          <body style="
            background-color: #333333;
            ">
            <div style="
              background-color: rgba(240, 240, 240, 0.8);
              width: 400px;
              padding: 30px 20px;
              border-radius: 20px;
              margin: 50px auto;
              text-align: center;
            ">
              <h1>Hello ${user.name}! </h1>
              <p> You are also known as:</p>
              <h3>user#${user.id}</h3>
              <form action="/signout" method="GET">
                <p><input type="submit" value="I'm someone else!" /></p>
              </form>
            </div>
          </body>
        </html>
      `);
  }
});
