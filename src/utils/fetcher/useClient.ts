import { httpClient } from "@/services/libs";

export const useClient = () => {
  const createHttpClient = async () => {
    return httpClient;
  };
  return { createHttpClient };
};
