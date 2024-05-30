/* eslint-disable @next/next/no-img-element */
import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";
import { UserIcon } from "@heroicons/react/20/solid";

const people = [
  { id: 1, label: "Phoenix Baker", value: "Phoenix Baker" },
  { id: 2, label: "Olivia Rhye", value: "Olivia Rhye" },
  { id: 3, label: "Lana Steiner", value: "Lana Steiner" },
  { id: 4, label: "Demi Wilkinson", value: "Demi Wilkinson" },
  { id: 5, label: "Candice Wu", value: "Candice Wu" },
  { id: 6, label: "Natali Craig", value: "Natali Craig" },
  { id: 7, label: "Drew Cano", value: "Drew Cano" },
];

export default {
  title: "UI/Select",
  component: Select,
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
} as Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: "Team member",
    hint: "This is a hint text to help user",
    options: people,
  },
};

export const Error: Story = {
  args: {
    label: "Team member",
    error: "This is a error message.",
    options: people,
  },
};

export const WithIcon: Story = {
  args: {
    label: "Team member",
    icon: "/icons/user.svg",
    options: people,
  },
};

export const WithExternalIcon: Story = {
  args: {
    label: "Team member",
    icon: UserIcon,
    options: people,
  },
};

// export const Checked: Story = {
//   args: {
//     checked: true,
//   },
// };

// export const Labeled: Story = {
//   args: {
//     label: "Label",
//   },
// };

// export const Indeterminate: Story = {
//   args: {
//     label: "Label",
//     indeterminate: true,
//   },
// };
