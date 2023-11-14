import { AxiosResponse, isAxiosError } from "axios";
import { Key, SWRResponse } from "swr";
import { SWRMutationResponse } from "swr/mutation";
export const formatResponse = <
  T,
  M extends "fetch" | "mutate",
  Data = undefined,
>(
  res: M extends "fetch"
    ? SWRResponse<AxiosResponse<T>, unknown>
    : SWRMutationResponse<AxiosResponse<T, Data>, unknown, Key>,
) => {
  if (res.error) {
    if (isAxiosError(res.error)) {
      const status =
        res.error.response?.status ??
        res.error.response?.data?.status ??
        res.error.status;
      if (![400, 403, 404].includes(status)) {
        return {
          ...res,
          data: undefined,
          error: {
            status: 500,
            messages: [{ message: "Internal Server Error." }],
          },
        };
      }
      return {
        ...res,
        data: undefined,
        error: {
          status: status ?? res.error.code,
          messages: res.error?.response?.data?.messages ?? [
            { message: res.error.message },
          ],
        },
      };
    } else {
      return {
        ...res,
        data: undefined,
        error: {
          status: 500,
          messages: [{ message: "Internal Server Error." }],
        },
      };
    }
  } else {
    return {
      ...res,
      data: res.data?.data,
      error: undefined,
    };
  }
};
