/* eslint-disable @next/next/no-img-element */
import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonColor } from "./button";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "50px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    color: ButtonColor.primary,
    children: "Button CTA",
  },
};

export const Secondary: Story = {
  args: {
    color: ButtonColor.secondary,
    children: "Button CTA",
  },
};

export const Gray: Story = {
  args: {
    color: ButtonColor.gray,
    children: "Button CTA",
  },
};

export const Error: Story = {
  args: {
    color: ButtonColor.error,
    children: "Button CTA",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Button CTA",
  },
};

export const IconBefore: Story = {
  args: {
    children: (
      <>
        <img src={"./icons/circle.svg"} alt="circle" />
        Button CTA
      </>
    ),
  },
};
export const IconAfter: Story = {
  args: {
    children: (
      <>
        Button CTA
        <img src={"./icons/circle.svg"} alt="circle" />
      </>
    ),
  },
};

export const IconOnly: Story = {
  args: {
    children: <img src={"./icons/circle.svg"} alt="circle" />,
    iconOnly: true,
  },
};
