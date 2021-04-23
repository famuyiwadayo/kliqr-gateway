import axios from "axios";
import { composeURL, createError } from "../utils";
import {
  TransactionRo,
  TransactionSpentIncomeAndTotalRo,
  UserTopFiveCategories,
  similarUsersDto,
} from "../interfaces";

export default class TransactionService {
  async getTransactions(): Promise<TransactionRo[]> {
    try {
      const result = await axios.get<{ data: TransactionRo[] }>(
        composeURL("transactions", "")
      );

      console.log(result.data.data);
      return result.data.data;
    } catch (error) {
      throw createError(error.message, error.statusCode);
    }
  }

  async getSpentIncomeAndTotalTx(
    userId: number
  ): Promise<TransactionSpentIncomeAndTotalRo> {
    try {
      const result = await axios.get<{
        data: TransactionSpentIncomeAndTotalRo;
      }>(
        composeURL("transactions", `users/${userId}/spent-income-and-txCount`)
      );
      return { ...result.data.data, total: (result.data.data as any).count };
    } catch (error) {
      throw createError(error.message, error.statusCode);
    }
  }

  async getSimilarUsersId(input: similarUsersDto): Promise<number[]> {
    try {
      const result = await axios.post<{
        data: number[];
      }>(composeURL("transactions", `users/${input.userId}/similar-users`), {
        trends: input.trends,
      });

      return result.data.data;
    } catch (error) {
      throw createError(error.message, error.statusCode);
    }
  }

  async getUserTopFiveCategories(
    userId: number
  ): Promise<UserTopFiveCategories[]> {
    try {
      const result = await axios.get<{
        data: UserTopFiveCategories[];
      }>(composeURL("transactions", `users/${userId}/top-five-categories`));
      return result.data.data;
    } catch (error) {
      throw createError(error.message, error.statusCode);
    }
  }
}
