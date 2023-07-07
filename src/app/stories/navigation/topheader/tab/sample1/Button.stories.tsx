import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Tabheader } from "./Tabheader";

const meta: Meta<typeof Tabheader> = {
  title:"navigation/topheader/tablet",
  component: Tabheader,
};

export default meta;
type Story = StoryObj<typeof Tabheader>;

export const TabHeader: Story = {
  render: () => (
    <Tabheader brandname="brand"   />
  ),
};



