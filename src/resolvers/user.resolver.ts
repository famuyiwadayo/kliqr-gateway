import { Query, Resolver } from "type-graphql";
import { UserRo } from "../interfaces";
import { UserService } from "../services";

@Resolver()
export default class UserResolver {
  private service = new UserService();

  @Query(() => [UserRo])
  async getUsers() {
    return await this.service.getUsers();
  }
}
