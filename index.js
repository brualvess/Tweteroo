
import cors from "cors";
import express, { json } from "express";

const server = express();
server.use(json());
server.use(cors());

const tweets = [
  {
    username: "eualisa",
    tweet: "so sei que nada sei"
  },
  {
    username: "eualisa",
    tweet: "birinbau"
  },
  {
    username: "eualisa",
    tweet: "olá mundo"
  },
  {
    username: "eualisa",
    tweet: "quero um burgão"
  }
];
const usuario = [
  {
    username: "eualisa",
    avatar: "https://cea.vtexassets.com/arquivos/ids/53429310/Tshirt-mesalheira-K-Lisa-simpsons-cabecao-1019745-1019745_2.jpg?v=637814211547700000"
  }
];

server.post("/sign-up", (request, response) => {
  const user = request.body;
  usuario.push(user);
  response.send("Ok");
})
server.post("/tweets", (request, response) => {
  const twets = request.body;
  const { username, tweet } = twets;
  tweets.push({
    username,
    tweet
  })
  response.send("Ok");
})
server.get("/tweets", (request, response) => {
  const tweet = [...tweets].reverse().slice(0, 10)
  for (let i = 0; i < tweet.length; i++) {
    const tw = tweet[i]
    const { avatar } = usuario.find(user => user.username === tw.username);
    tw.avatar = avatar
  }
  response.send(tweet);

})

server.listen(5000)


