import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Signup } from "./Signup";

const meta: Meta<typeof Signup> = {
  title: "component/auth/Signup",
  component: Signup,
};

export default meta;
type Story = StoryObj<typeof Signup>;

export const DesktopHeader: Story = {
  render: () => <Signup />,
};
