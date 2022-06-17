import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());

const usuariosServidor = []
const tweetsServidor = []

server.post('/sign-up', (request, response) => {
    const name = request.params.username;
    const avatar = request.params.avatar;

    usuariosServidor.push({
        username: name,
            avatar: avatar
    })
    response.send('OK');
  });

  server.post('/tweets', (request, response) => {
    const name = request.params.username
    const tweet = request.params.tweet
    tweetsServidor.push({
         username: name,
        tweet: tweet})
    response.send('OK');
  });
  server.listen(5000);

  
