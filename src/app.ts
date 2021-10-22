import "dotenv/config";
import express from 'express';

import { router } from "./routes";

const app = express();

app.use(router);

app.get('/github', (request, response) => { //criando uma rota get
  response.redirect(
    `https://github.com/login/oauth/authorize_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.get("signin/callback",(request, response) => {
  const { code } = request.query; 
  return response.json(code);
});

app.listen(4000, 'localhost', () => console.log('server is running! :)'));
