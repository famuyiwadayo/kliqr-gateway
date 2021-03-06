import { Arg, FieldResolver, Int, Query, Resolver, Root } from "type-graphql";
import { TransactionService, UserService } from "../services";
import {
  TransactionRo,
  TransactionSpentIncomeAndTotalRo,
  TransactionWithUserRo,
} from "../interfaces";
import { UserTopFiveCategories } from "../interfaces/ros/transaction.ro";

@Resolver(() => TransactionWithUserRo)
export default class TransactionResolver {
  private txservice = new TransactionService();
  private usrService = new UserService();

  @Query(() => [TransactionRo])
  async getTransactions() {
    return await this.txservice.getTransactions();
  }

  @Query(() => TransactionSpentIncomeAndTotalRo)
  async getSpentIncomeAndTotalTx(@Arg("userId", () => Int) id: number) {
    return await this.txservice.getSpentIncomeAndTotalTx(id);
  }

  @Query(() => [TransactionWithUserRo])
  async getTransactionsWithUser() {
    return await this.txservice.getTransactions();
  }

  @Query(() => [UserTopFiveCategories])
  async getUserTopFiveCategories(@Arg("userId", () => Int) id: number) {
    return await this.txservice.getUserTopFiveCategories(id);
  }

  @FieldResolver()
  async user(@Root() root: TransactionWithUserRo) {
    const result = await this.usrService.getUserById(root.user_id);
    return result;
  }
}
