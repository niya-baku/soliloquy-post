import {
  DefaultBodyType,
  PathParams,
  ResponseResolver,
  RestContext,
  RestRequest,
  rest,
} from "msw";

import { apiHost } from "@/constants";

export type GetResolver<
  Params extends PathParams<string> = PathParams<string>,
  Response extends DefaultBodyType = Record<string, never>,
> = ResponseResolver<RestRequest<never, Params>, RestContext, Response>;

export type PostResolver<
  Params extends PathParams<string> = PathParams<string>,
  RequestBody extends DefaultBodyType = DefaultBodyType,
  Response extends DefaultBodyType = string,
> = ResponseResolver<RestRequest<RequestBody, Params>, RestContext, Response>;

// APIのエンドポイントURLを生成
const apiUrl = (path: string) => {
  return new URL(`/api${path}`, apiHost).toString();
};

// mocks/handlers.tsで使用するもの
export const createGetHandler = <
  P extends PathParams<string>,
  BodyType extends DefaultBodyType = undefined,
>(
  path: string,
  resolver: ResponseResolver<RestRequest<never, P>, RestContext, BodyType>,
) => rest.get(apiUrl(path), resolver);

export const createPostHandler = <
  P extends PathParams<string>,
  RequestBody extends DefaultBodyType = DefaultBodyType,
  BodyType extends DefaultBodyType = undefined,
>(
  path: string,
  resolver: ResponseResolver<
    RestRequest<RequestBody, P>,
    RestContext,
    BodyType
  >,
) => rest.post(apiUrl(path), resolver);
export const createPutHandler = <
  P extends PathParams<string>,
  RequestBody extends DefaultBodyType = DefaultBodyType,
  BodyType extends DefaultBodyType = undefined,
>(
  path: string,
  resolver: ResponseResolver<
    RestRequest<RequestBody, P>,
    RestContext,
    BodyType
  >,
) => rest.put(apiUrl(path), resolver);
