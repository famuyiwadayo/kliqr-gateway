import "dotenv/config";

export const config = {
  PORT: process.env.PORT as string | number,
  SERVICE_REGISTRY_URL: process.env.SERVICE_REGISTRY_URL as string,
  USER_SERVICE_URL: process.env.USER_SERVICE_URL as string,
  TRANSACTION_SERVICE_URL: process.env.TRANSACTION_SERVICE_URL as string,
};
