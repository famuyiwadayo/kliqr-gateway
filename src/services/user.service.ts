import axios from "axios";
import { composeURL } from "../utils";
import { UserRo } from "../interfaces";

export default class UserService {
  async getUsers(): Promise<UserRo[]> {
    const result = await axios.get<{ data: UserRo[] }>(
      composeURL("users", "users")
    );
    return result.data.data;
  }
}
