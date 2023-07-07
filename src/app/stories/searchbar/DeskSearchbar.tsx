import React, { useEffect } from "react";
import Image from "next/image";
import SearchIcon from "@mui/icons-material/Search";

import "./button.scss";

interface DeskSearchbarProps {
  uppercase?: boolean;
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
export const DeskSearchbar = ({
  uppercase = false,
  outline = false,
  size = "medium",
  backgroundColor,
  color,
  padding,
  rounded = false,
  onClick,
}: DeskSearchbarProps) => {
  const roundedClass = rounded ? "rounded-[30px]" : "rounded-[5px]";
  const uppercaseClass = uppercase ? "uppercase" : "";
  const outlineClass = outline ? "outlineborder" : "";

  return (
    <div className={[].join(" ")}>
      <div className="flex  ">
  


        <input
          className="p-2 pl-5 rounded-s-lg bg-inherit  md:w-[300px] lg:w-[400px]  border-t border-b border-l  border-sky-500 text-[inherit]"
          placeholder="Search..."
          type="text"
        />
     <div dir="rtl" >
        <div className=" p-2  rounded-s-lg  border-t border-b border-r border-sky-500  text-[#000000] pt-[10px]  ">
          <SearchIcon className="text-[#000000]" fontSize="small" />
        </div>{" "}
        </div>
      </div>
    </div>
  );
};
