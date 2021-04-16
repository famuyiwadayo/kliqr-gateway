import { Arg, FieldResolver, Query, Resolver, Root, Int } from "type-graphql";
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

  @Query(() => UserWithTxCountRo)
  async getUserWithTxCountById(@Arg("id", () => Int) id: number) {
    return await this.service.getUserById(id);
  }

  @Query(() => [UserWithTxCountRo])
  async getSimilarUsers(@Arg("id", () => Int) id: number) {
    return await this.service.getSimilarUsers(id);
  }

  @FieldResolver()
  async total_transactions(@Root() root: UserWithTxCountRo) {
    const result = await this.service.getUserTxCount(root.id);
    return result.count;
  }
}
