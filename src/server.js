import "./env";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import { prisma } from "../generated/prisma-client";
import { authenticateJwt } from "./passport";
import { isAuthenticated } from "./middlewares";
// sendSecretMail("gatsby0391@naver.com", "123");

const PORT = process.env.PORT || 4000;
// context : resolver 사이에 정보를 공유할 떄 사용
const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, isAuthenticated })
});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);
// server.express.use(passport.authenticate("jwt"));
server.start({ port: PORT }, () =>
  console.log(`Server running on port ${PORT}`)
);
