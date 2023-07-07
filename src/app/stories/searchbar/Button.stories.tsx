import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { DeskSearchbar } from "./DeskSearchbar";

const meta: Meta<typeof DeskSearchbar> = {
  title:"components/desktop/searchbar",
  component: DeskSearchbar,
};

export default meta;
type Story = StoryObj<typeof DeskSearchbar>;

export const DesktopHeader: Story = {
  render: () => (
    <DeskSearchbar
      onClick={() => {
        document.body.setAttribute("data-theme", "sharp-theme");
      }}
  
    />
  ),
};



