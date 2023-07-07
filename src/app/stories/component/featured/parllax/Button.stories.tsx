import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Sample2header } from "./Sample2header";

const meta: Meta<typeof Sample2header> = {
  title:"component/featured/Parllax",
  component: Sample2header,
};

export default meta;
type Story = StoryObj<typeof Sample2header>;

export const DesktopHeader: Story = {
  render: () => (
    <Sample2header   brandname="dads"  />
  ),
};



