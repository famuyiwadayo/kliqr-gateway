"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const type_graphql_1 = require("type-graphql");
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const graphql_upload_1 = require("graphql-upload");
const apollo_server_express_1 = require("apollo-server-express");
const axios_1 = __importDefault(require("axios"));
const middlewares_1 = require("./middlewares");
const resolvers_1 = __importDefault(require("./resolvers"));
const PORT = process.env.PORT || 3000;
const app = express_1.default();
app.use(cors_1.default());
app.use(helmet_1.default());
app.use(middlewares_1.compressor());
app.use(express_1.default.json());
app.use(middlewares_1.logRequests);
app.get("/", (_, res) => res.status(200).json({ name: "KliQr", type: "gateway", version: "1.0.0" }));
app.use("/graphql", graphql_upload_1.graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
axios_1.default.interceptors.response.use((response) => {
    return response;
}, function (error) {
    return Promise.reject(error.response.data);
});
const schema = type_graphql_1.buildSchemaSync({
    resolvers: resolvers_1.default,
    validate: true,
    emitSchemaFile: path_1.default.resolve(__dirname, "schema.gql"),
});
const apolloServer = new apollo_server_express_1.ApolloServer({
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
app.use(middlewares_1.catchRequest);
app.use(middlewares_1.handleError);
app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`));
//# sourceMappingURL=index.js.map