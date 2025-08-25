import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from ".";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "button",
    onClick: fn(),
  },
};
