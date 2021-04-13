
import { BuildSchemaOptions } from 'type-graphql';
import UserResolver from './user.resolver'

const resolvers = [UserResolver] as BuildSchemaOptions['resolvers'];

export default resolvers;