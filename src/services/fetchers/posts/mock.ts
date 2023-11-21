import { ResponseBody } from ".";
import { GetResolver } from "@/services/libs";
import { FetchError } from "@/types/fetch";
import { PathParams, HttpResponse } from "msw";

export const getPosts: GetResolver<
  PathParams<string>,
  ResponseBody | FetchError
> = () => {
  return HttpResponse.json(
    {
      posts: [
        {
          id: 1,
          name: "mswもん",
          note: "これは投稿",
        },
      ],
    },
    { status: 200 },
  );
  // return res(
  //   ctx.status(400),
  //   ctx.json({
  //     status: 400,
  //     messages: [
  //       {
  //         key: "a",
  //         message: "b",
  //       },
  //     ],
  //   })
  // );
};
