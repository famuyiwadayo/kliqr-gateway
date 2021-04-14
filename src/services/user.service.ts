import axios from "axios";
import { composeURL } from "../utils";
import { UserRo, UserTxCountRo } from "../interfaces";

export default class UserService {
  async getUsers(): Promise<UserRo[]> {
    const result = await axios.get<{ data: UserRo[] }>(composeURL("users", ""));
    return result.data.data;
  }

  async getUserTxCount(userId: number): Promise<UserTxCountRo> {
    const result = await axios.get<{ data: UserTxCountRo }>(
      composeURL("transactions", `users/${userId}/count`)
    );
    return result.data.data;
  }
}
