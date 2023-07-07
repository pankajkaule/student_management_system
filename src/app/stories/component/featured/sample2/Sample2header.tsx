import React, { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import "./button.scss";

interface Sample2Props {
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
export const Sample2header = ({
  brandname = "Brand",
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
    <div className="text-center ">
      <div className="bg-[#e13a5b] h-[1000px] text-[#fff] text-[140px] ">Another div</div>
      <div className="h-[2000px] bg-no-repeat bg-cover bg-[url('https://cdn.pixabay.com/photo/2019/08/06/00/46/black-and-white-4387130_1280.jpg')] relative">
        <div className="sticky flex justify-center items-center pt-[200px]  top-0 ">
          <div className=" capitalize  text-[#36454F] pb-[400px]" ><h1 className="text-[140px]">Book Your Ride now...</h1></div>
        </div>
      </div>
      <div className="bg-[#3d9e388d]  text-center h-[400px] text-[#fff] text-[140px] ">Another div</div>
    </div>


  );
};
