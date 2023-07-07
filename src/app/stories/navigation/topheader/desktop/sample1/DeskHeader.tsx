import React, { useEffect } from "react";
import Image from "next/image";
import { DeskSearchbar } from "../../../../searchbar/DeskSearchbar";
import PersonIcon from "@mui/icons-material/Person";
import LoginIcon from "@mui/icons-material/Login";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "./button.scss";

interface DeskHeaderProps {
  brandname: string;
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
export const DeskHeader = ({
  brandname = "Brand",
  outline = false,
  size = "medium",
  backgroundColor,
  color,
  padding,
  rounded = false,
  onClick,
}: DeskHeaderProps) => {
  const roundedClass = rounded ? "rounded-[30px]" : "rounded-[5px]";

  const outlineClass = outline ? "outlineborder" : "";

  return (
    <div
      className={[
        "flex",
        "justify-around",
        "p-4",
        "items-center",
        "header",
        "primary"
      ].join(" ")}
    >
      <div className="flex  ">
        <div>
          <Image
            src="https://cdn.pixabay.com/photo/2017/02/18/19/20/logo-2078018_640.png"
            alt="logo image"
            width={20}
            height={20}
          />
        </div>
        <div className="pl-2">{brandname} </div>
      </div>
      <div>
        <DeskSearchbar />
      </div>
 
      <div className="flex   ">
        <div className="pr-5">
          <PersonIcon className="cursor-pointer" />
        </div>
        <div className="pr-5">
          <LoginIcon className="cursor-pointer" />
        </div>
        <div className="pr-5">
          <AddShoppingCartIcon className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
