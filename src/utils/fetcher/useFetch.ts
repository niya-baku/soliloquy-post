import { formatResponse } from "./formatResponse";
import { useClient } from "./useClient";
import { useSWR } from "@/services/libs";
import { AxiosRequestConfig } from "axios";
type FetchArgs = {
  path: string;
  config?: AxiosRequestConfig;
  key?: string;
};
export const useFetch = <T>({ path, config, key }: FetchArgs) => {
  const { createHttpClient } = useClient();
  const res = useSWR(
    key ?? path,
    async () => {
      const httpClient = await createHttpClient();

      return httpClient.get(path, config);
    },
    { revalidateOnFocus: false },
  );

  const response = formatResponse<T, "fetch">(res);
  return response;
};
