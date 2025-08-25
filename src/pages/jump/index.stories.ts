import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { getRouter } from "@storybook/nextjs/router.mock";
import Jump from ".";

export default {
  title: "pages/Jump",
  component: Jump,
  tags: ["autodocs"],
} satisfies Meta<typeof Jump>;

type Story = StoryObj<typeof Jump>;

export const Default: Story = {
  async play({ canvasElement }) {
    const canvas = within(canvasElement);
    const transitionBtn = await canvas.findByText("ページ遷移");
    await userEvent.click(transitionBtn);
    await expect(getRouter().push).toHaveBeenCalledWith("/posts");
  },
};
