import { apiHost } from "@/constants";
import { DefaultBodyType, PathParams, ResponseResolver, http } from "msw";

export type GetResolver<
  Params extends PathParams<string> = PathParams<string>,
  Response extends DefaultBodyType = Record<string, never>,
> = ResponseResolver<{ params: Params }, Record<string, never>, Response>;

export type PostResolver<
  Params extends PathParams<string> = PathParams<string>,
  RequestBody extends DefaultBodyType = DefaultBodyType,
  Response extends DefaultBodyType = string,
> = ResponseResolver<{ params: Params }, RequestBody, Response>;

// APIのエンドポイントURLを生成
const apiUrl = (path: string) => {
  return new URL(`/api${path}`, apiHost).toString();
};

// mocks/handlers.tsで使用するもの
export const createGetHandler = <
  Params extends PathParams<string>,
  Response extends DefaultBodyType,
>(
  path: string,
  resolver: GetResolver<Params, Response>,
) => http.get(apiUrl(path), resolver);

export const createPostHandler = <
  Params extends PathParams<string>,
  RequestBody extends DefaultBodyType,
  Response extends DefaultBodyType,
>(
  path: string,
  resolver: PostResolver<Params, RequestBody, Response>,
) => http.post(apiUrl(path), resolver);

export const createPutHandler = <
  Params extends PathParams<string>,
  RequestBody extends DefaultBodyType,
  Response extends DefaultBodyType,
>(
  path: string,
  resolver: PostResolver<Params, RequestBody, Response>,
) => http.put(apiUrl(path), resolver);
