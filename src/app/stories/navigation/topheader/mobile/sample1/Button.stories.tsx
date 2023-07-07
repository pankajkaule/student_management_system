import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Mobheader } from "./Mobheader";

const meta: Meta<typeof Mobheader> = {
  title:"navigation/topheader/mobile",
  component: Mobheader,
};

export default meta;
type Story = StoryObj<typeof Mobheader>;

export const MobHeader: Story = {
  render: () => (
    <Mobheader brandname="brand"   />
  ),
};



