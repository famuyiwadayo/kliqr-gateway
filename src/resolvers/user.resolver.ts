import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { UserRo, UserWithTxCountRo } from "../interfaces";
import { UserService } from "../services";

@Resolver(() => UserWithTxCountRo)
export default class UserResolver {
  private service = new UserService();

  @Query(() => [UserRo])
  async getUsers() {
    return await this.service.getUsers();
  }

  @Query(() => [UserWithTxCountRo])
  async getUsersWithTxCount() {
    return await this.service.getUsers();
  }

  @FieldResolver()
  async total_transactions(@Root() root: UserWithTxCountRo) {
    const result = await this.service.getUserTxCount(root.id);
    return result.count;
  }
}
