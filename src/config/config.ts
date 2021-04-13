import "dotenv/config";

export const config = {
  PORT: process.env.PORT as string | number,
  SERVICE_REGISTRY_URL: process.env.SERVICE_REGISTRY_URL as string,
};
