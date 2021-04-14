import { config } from "../config/config";

export default function composeURL(
  service: "users" | "transactions",
  endpoint: string,
  query?: string
): string {
  return `${
    service === "users"
      ? config.USER_SERVICE_URL
      : config.TRANSACTION_SERVICE_URL
  }/${endpoint}${query ? `?${query}` : ""}`;
}
