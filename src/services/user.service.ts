import axios from "axios";
import { composeURL, createError } from "../utils";
import { UserRo, UserTxCountRo } from "../interfaces";
import { TransactionService } from ".";

export default class UserService {
  private txService = new TransactionService();

  async getUsers(): Promise<UserRo[]> {
    try {
      const result = await axios.get<{ data: UserRo[] }>(
        composeURL("users", "")
      );
      return result.data.data;
    } catch (error) {
      throw createError(error.message, error.statusCode);
    }
  }

  async getUserTxCount(userId: number): Promise<UserTxCountRo> {
    try {
      const result = await axios.get<{ data: UserTxCountRo }>(
        composeURL("transactions", `users/${userId}/count`)
      );
      return result.data.data;
    } catch (error) {
      throw createError(error.message, error.statusCode);
    }
  }

  async getUserById(userId: number): Promise<UserRo> {
    try {
      const result = await axios.get<{ data: UserRo }>(
        composeURL("users", String(userId))
      );
      return result.data.data;
    } catch (error) {
      throw createError(error.message, error.statusCode);
    }
  }

  async getSimilarUsers(userId: number): Promise<UserRo[]> {
    // console.log(input);
    try {
      const userIds = await this.txService.getSimilarUsersId(userId);
      const toRunInParallel: any[] = [];
      userIds.forEach((id) => toRunInParallel.push(this.getUserById(id)));
      const result = await Promise.all(toRunInParallel);
      return result;
    } catch (error) {
      throw createError(error.message, error.statusCode);
    }
  }
}
