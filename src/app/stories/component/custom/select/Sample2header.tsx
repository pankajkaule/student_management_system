import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import "./button.scss";

interface Sample2Props {

  outline?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";

  color?: string;
  padding?: string;
  rounded?: boolean;
  onClick?: React.MouseEventHandler;
}

/**
 * Primary UI component for user interaction
 */
export const CustomSelect = ({

  outline = false,
  size = "medium",
  backgroundColor,
  color,
  padding,
  rounded = false,
  onClick,
}: Sample2Props) => {
  const roundedClass = rounded ? "rounded-[30px]" : "rounded-[5px]";

  const outlineClass = outline ? "outlineborder" : "";

  const menuItems = [
    { title: "Home", url: "https://themeptation.net" },
    { title: "Products", url: "https://themeptation.net" },
    { title: "Contact", url: "https://themeptation.net" },
  ];
  const [animateHeader, setAnimateHeader] = useState(false);

  return (
    <div className="relative w-full lg:max-w-sm">
      <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
        <option>Principle</option>
        <option>Vice Principle</option>
        <option>Teacher</option>
      </select>
    </div>
  );
};
