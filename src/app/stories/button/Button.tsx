import React, { useEffect } from "react";
import "./button.scss";

interface ButtonProps {
  varient: "primary" | "sec" | "success" | "danger" | "warning" | "info";
  uppercase?: boolean;
  outline?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  color?: string;
  padding?: string;
  rounded?: boolean;
  onClick?: React.MouseEventHandler;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  varient = "primary",
  uppercase = false,
  outline = false,
  size = "medium",
  backgroundColor,
  color,
  padding,
  rounded = false,
  onClick,
  label,
}: ButtonProps) => {
  const roundedClass = rounded ? "rounded-[30px]" : "rounded-[5px]";
  const uppercaseClass = uppercase ? "uppercase" : "";
  const outlineClass =outline?"outlineborder":"";
  const primaryClass =
  
    varient === "primary" 
      ? "button_primary"
      : varient === "sec"
      ? "button_sec"
      : varient === "success"
      ? "button_success"
      : varient === "danger"
      ? "button_danger"
      : varient === "warning"
      ? "button_warning"
      : varient === "info"
      ? "button_info"
      : "";

  return (
    <button
      onClick={onClick}
      type="button"
      className={[uppercaseClass, roundedClass, primaryClass,outlineClass].join(" ")}
    >
      {label}
    </button>
  );
};
