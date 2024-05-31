/* eslint-disable @next/next/no-img-element */
import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { UserIcon } from "@heroicons/react/24/outline";

export default {
  title: "UI/Input",
  component: Input,
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
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    label: "Team member",
    hint: "This is a hint text to help user.",
  },
};

export const Placeholder: Story = {
  args: {
    label: "Team member",
    hint: "This is a hint text to help user.",
    placeholder: "olivia@untitledui.com",
  },
};
export const FullWidth: Story = {
  args: {
    label: "Team member",
    hint: "This is a hint text to help user.",
    placeholder: "olivia@untitledui.com",
    fullWidth: true,
  },
};

export const ErrorWithMessage: Story = {
  args: {
    label: "Team member",
    hint: "This is a hint text to help user.",
    placeholder: "olivia@untitledui.com",
    error: "This is a error message.",
  },
};

export const ErrorNoMessage: Story = {
  args: {
    label: "Team member",
    hint: "This is a hint text to help user.",
    placeholder: "olivia@untitledui.com",
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Team member",
    hint: "This is a hint text to help user.",
    placeholder: "olivia@untitledui.com",
    disabled: true,
  },
};

export const DisabledWithError: Story = {
  args: {
    hint: "This is a hint text to help user.",
    placeholder: "olivia@untitledui.com",
    disabled: true,
    error: "This is an error message.",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Team member",
    hint: "This is a hint text to help user.",
    placeholder: "olivia@untitledui.com",
    icon: "/icons/user.svg",
  },
};

export const WithIconAndError: Story = {
  args: {
    label: "Team member",
    placeholder: "olivia@untitledui.com",
    icon: "/icons/user.svg",
    error: true,
  },
};

export const WithIconAndErrorMessage: Story = {
  args: {
    label: "Team member",
    placeholder: "olivia@untitledui.com",
    icon: "/icons/user.svg",
    error: "This is a error message.",
  },
};

export const WithExternalIcon: Story = {
  args: {
    label: "Team member",
    hint: "This is a hint text to help user.",
    placeholder: "olivia@untitledui.com",
    icon: UserIcon,
  },
};
