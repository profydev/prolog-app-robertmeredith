/* eslint-disable @next/next/no-img-element */
import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxSize } from "./checkbox";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
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
} as Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    sz: CheckboxSize.sm,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Labeled: Story = {
  args: {
    label: "Label",
  },
};

export const Indeterminate: Story = {
  args: {
    label: "Label",
    indeterminate: true,
  },
};
