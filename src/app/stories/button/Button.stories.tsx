import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const SharpThemeButton: Story = {
  render: () => (
    <Button
      onClick={() => {
        document.body.setAttribute("data-theme", "sharp-theme");
      }}
      uppercase
      backgroundColor="#880808"
      size="large"
      label="sharp theme"
      varient="info"
    />
  ),
};

export const SeaThemeButton: Story = {
  render: () => (
    <Button
      size="medium"
      onClick={() => {
        document.body.setAttribute("data-theme", "sea-theme");
      }}
      label="sea theme"
      uppercase
      outline
      varient="danger"
    />
  ),
};

export const LightThemeButton: Story = {
  render: () => (
    <Button
      size="large"
      onClick={() => {
        document.body.setAttribute("data-theme", "light-theme");
      }}
      varient="success"
      rounded
    
      label="light theme"
      uppercase
    />
  ),
};

export const darkThemeButton: Story = {
  render: () => (
    <Button
      onClick={() => {
        document.body.setAttribute("data-theme", "dark-theme");
      }}
      rounded
      uppercase
      outline
      varient="primary"
      label="Dark theme"
    />
  ),
};
