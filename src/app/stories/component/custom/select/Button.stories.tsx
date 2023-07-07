import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { CustomSelect } from "./Sample2header";

const meta: Meta<typeof CustomSelect> = {
  title:"component/custom/Select",
  component: CustomSelect,
};

export default meta;
type Story = StoryObj<typeof CustomSelect>;

export const DesktopHeader: Story = {
  render: () => (
    <CustomSelect     />
  ),
};



