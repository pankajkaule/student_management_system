import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { HeaderSample1 } from "./HeaderSample1";

const meta: Meta<typeof HeaderSample1> = {
  title:"navigation/header/sample1",
  component: HeaderSample1,
};

export default meta;
type Story = StoryObj<typeof HeaderSample1>;

export const TabHeader11: Story = {
  render: () => (
    <HeaderSample1 brandname="brand"   />
  ),
};



