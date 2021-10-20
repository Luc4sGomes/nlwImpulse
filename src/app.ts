import express from 'express';

const app = express();

app.get('/github', (request, response) => { //criando uma rota get
  response.redirect(
    `https://github.com/login/oauth/authorize_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.listen(4000, 'localhost', () => console.log('server is running! :)'));
