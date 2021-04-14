import { BuildSchemaOptions } from "type-graphql";
import UserResolver from "./user.resolver";
import TransactionResolver from "./transaction.resolver";

const resolvers = [
  UserResolver,
  TransactionResolver,
] as BuildSchemaOptions["resolvers"];

export default resolvers;
