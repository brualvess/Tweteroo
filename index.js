
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


server.listen(5000)

