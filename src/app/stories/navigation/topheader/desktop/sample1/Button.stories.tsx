import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { DeskHeader } from "./DeskHeader";

const meta: Meta<typeof DeskHeader> = {
  title:"navigation/topheader/desktop",
  component: DeskHeader,
};

export default meta;
type Story = StoryObj<typeof DeskHeader>;

export const DesktopHeader: Story = {
  render: () => (
    <DeskHeader   brandname="Brand"  />
  ),
};



