import { RequestHandler } from "msw";
import {
  createGetHandler,
  // createPostHandler,
  // createPutHandler,
} from "@/services/libs";
import { getPosts, pathToPosts } from "@/services/fetchers/posts";

export const handlers: RequestHandler[] = [
  createGetHandler(pathToPosts, getPosts),
];
