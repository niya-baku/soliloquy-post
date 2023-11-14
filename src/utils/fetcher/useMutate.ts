import { SWRMutationResponse } from "swr/mutation";
import { formatResponse } from "./formatResponse";
import { useClient } from "./useClient";
import { useSWRMutation } from "@/services/libs";
import { AxiosResponse } from "axios";
type MutationArgs = {
  path: string;
  method?: "post" | "put" | "patch" | "delete";
  headers?: {
    "Content-Type": string;
  };
};
export const useMutate = <T, Data>({
  path,
  method = "post",
  headers,
}: MutationArgs) => {
  const { createHttpClient } = useClient();
  const res = useSWRMutation(
    path,
    async (key: string, options: { arg: never }) => {
      const httpClient = await createHttpClient();
      return httpClient[method](key, options.arg, { headers });
    },
    { throwOnError: false },
  );
  const response = formatResponse<T, "mutate", Data>(
    res as SWRMutationResponse<
      AxiosResponse<T, Data>,
      unknown,
      import("swr").Key
    >,
  );
  return response;
};
