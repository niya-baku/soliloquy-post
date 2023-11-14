import { ResponseBody } from ".";
import { GetResolver } from "@/services/libs";
import { FetchError } from "@/types/fetch";
import { PathParams } from "msw";

// アップデート後の記述
// export const getPosts: ResponseResolver = () => {
//   return HttpResponse.json(
//     {
//       posts: [
//         {
//           id: 1,
//           name: "mswもん",
//           note: "これは投稿",
//         },
//       ],
//     },
//     { status: 200 },
//   );

export const getPosts: GetResolver<
  PathParams<string>,
  ResponseBody | FetchError
> = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      posts: [
        {
          id: 1,
          name: "mswもん",
          note: "これは投稿",
        },
      ],
    }),
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
