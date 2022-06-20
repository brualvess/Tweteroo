
import cors from "cors";
import express, {json} from "express";

const server = express();
server.use(json());
server.use(cors());

const tweets = [];
const usuario = [];

server.post("/sign-up", (request, response) => {
    const body = request.body;
    usuario.push(body);
    response.send("Ok");
})
server.post("/tweets", (request, response) => {
    const body = request.body;
    const {username, tweet} = body;
    const {avatar} = usuario.find(user => user.username === username);
    tweets.push({
        username,
        avatar,
        tweet
    })
    response.send("Ok");
})
server.get("/tweets", (request, response) => {
  response.send([...tweets].reverse().splice(0, 10));
})

server.listen(5000)

