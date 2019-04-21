import express from "express";
import cors from "cors";
import http from "http";
import { ApolloServer } from "apollo-server-express";
import schema from "../schema";
import resolvers from "../resolvers";
import { getUser } from "../utils/auth";

const startServer = (options, models) => {
  return new Promise((resolve, reject) => {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
      typeDefs: schema,
      resolvers: resolvers,
      formatError: error => {
        const message = error.message
          .replace("SequelizeValidationError: ", "")
          .replace("Validation error: ", "");
        return {
          ...error,
          message
        };
      },
      context: async ({ req, connection }) => {
        const context = { models };
        if (connection) {
          return context;
        }
        if (req) {
          const secret = options.secret;
          const currentUser = await getUser(req, secret);
          return {
            ...context,
            currentUser,
            secret
          };
        }
      }
    });
    app.use(cors());
    server.applyMiddleware({ app, path: "/graphql" });
    server.installSubscriptionHandlers(httpServer);
    httpServer.listen({ port: options.port }, () => {
      return resolve({
        ...options
      });
    });
  });
};

export { startServer };
