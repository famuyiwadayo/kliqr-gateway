import axios from "axios";
import { composeURL, createError } from "../utils";
import { UserRo, UserTxCountRo } from "../interfaces";

export default class UserService {
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
}
