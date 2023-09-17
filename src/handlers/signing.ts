import { Router } from 'unflare';

const router = new Router();

router.post('/sign-in', () => {
  const { body, res } = router;
  if (!body.name)
    return res.status(400).html(`<!DOCTYPE html>
<html>
  <head>
    <title>I did not hear you say your name.</title>
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
      <h1>I did not hear you say your name.</h1>
      <h2>Let's try it again in <span style="color: red" id="counter">3</span> seconds.</h2>
      <h3>If you're in a hurry or this doesn't automatically redirects, <a href="/">click here</a></h3>
    </div>
    <script>
      window.onload = ()=>{
        let counter = 2;
        const countdownElement = document.getElementById('counter');

        const countdown = setInterval(() => {
          countdownElement.textContent = counter;
          counter--;
          
          if (counter < 0) {
            clearInterval(countdown);
            window.location.href = '/';
          }
        }, 1000);
      }
    </script>
  </body>
</html>
`);
  const id = crypto.randomUUID();
  res.cookie('user', JSON.stringify({ name: body.name, id }));
  res.status(302, 'Redirecting').headers.set('Location', '/');
  return res.send();
});

router.get('/sign-out', () => {
  const { res } = router;
  res.cookie('user', '');
  res.status(302, 'Redirecting').headers.set('Location', '/');
  return res.send();
});

export { router as SigningRouter };
