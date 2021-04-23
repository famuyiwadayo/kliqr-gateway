import axios from "axios";
import { composeURL, createError } from "../utils";
import {
  TransactionRo,
  TransactionSpentIncomeAndTotalRo,
  UserTopFiveCategories,
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

  async getSimilarUsersId(userId: number): Promise<number[]> {
    try {
      const _trends = await this.getUserTopFiveCategories(userId);
      const trends = (_trends as any).reduce((acc: string[], val: any) => {
        acc.push(val.category);
        return acc;
      }, []);

      const result = await axios.post<{
        data: number[];
      }>(composeURL("transactions", `users/${userId}/similar-users`), {
        trends,
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
