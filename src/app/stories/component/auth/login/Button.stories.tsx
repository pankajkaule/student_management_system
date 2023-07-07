import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Login } from "./Login";

const meta: Meta<typeof Login> = {
  title: "component/auth/Login",
  component: Login,
};

export default meta;
type Story = StoryObj<typeof Login>;

export const DesktopHeader: Story = {
  render: () => <Login brandname="dads" />,
};
