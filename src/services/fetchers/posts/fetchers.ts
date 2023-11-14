import { useFetch } from "@/utils";
import { ResponseBody } from ".";

export const pathToPosts = "/posts";
export const useGetPosts = () => useFetch<ResponseBody>({ path: pathToPosts });
