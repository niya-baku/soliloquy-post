import { Meta, StoryObj } from "@storybook/react";

import Posts from ".";

export default {
  title: "pages/Posts",
  component: Posts,
  tags: ["autodocs"],
} satisfies Meta<typeof Posts>;

type Story = StoryObj<typeof Posts>;

export const Default: Story = {
  // parameters: {
  //   msw: {
  //     handlers: [
  //       http.get("/posts", () => {
  //         return HttpResponse.json({
  //           posts: [
  //             {
  //               id: 1,
  //               name: "storybookからだよー",
  //               note: "これはテスト投稿です。",
  //             },
  //           ],
  //         });
  //       }),
  //     ],
  //   },
  // },
};
