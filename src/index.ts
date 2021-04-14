import "reflect-metadata";
import "dotenv/config";
import path from "path";
import cors from "cors";
import { buildSchemaSync } from "type-graphql";
import express, { Express } from "express";
import helmet from "helmet";
import { graphqlUploadExpress } from "graphql-upload";
import { ApolloServer } from "apollo-server-express";
import axios from "axios";
import {
  catchRequest,
  compressor,
  handleError,
  logRequests,
} from "./middlewares";
import resolvers from "./resolvers";

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(cors());
app.use(helmet());
app.use(compressor());
app.use(express.json());

app.use(logRequests);

app.get("/", (_, res) =>
  res.status(200).json({ name: "KliQr", type: "gateway", version: "1.0.0" })
);
app.use(
  "/graphql",
  graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 })
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    return Promise.reject(error.response.data);
  }
);

const schema = buildSchemaSync({
  resolvers,
  validate: true,
  emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  // pubSub: redisPubSub,
});

const apolloServer = new ApolloServer({
  schema,
  context: ({ req, res }) => ({ req, res }),
  playground: true,
  uploads: false,
  introspection: true,
});

apolloServer.applyMiddleware({
  app,
  cors: false,
});

// catch 404 and forward to error handler
app.use(catchRequest);
app.use(handleError);

app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
