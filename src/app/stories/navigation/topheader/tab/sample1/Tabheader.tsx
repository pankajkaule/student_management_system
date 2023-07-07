import React, { useState,useRef,useEffect } from "react";
import Image from "next/image";
import { DeskSearchbar } from "../../../../searchbar/DeskSearchbar";

import MenuIcon from "@mui/icons-material/Menu";

import "./button.scss";

interface TabheaderProps {
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
export const Tabheader = ({
  brandname = "Brand",

  onClick,
}: TabheaderProps) => {
  const [drawer, setDrawer] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
      setDrawer(false);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setDrawer(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      

      <div
        className={`fixed left-0 top-0 p-4 z-40 bg-opacity-100  h-full bg-black  w-[220px] primary text-white transition-all ease-in duration-200 transform ${
          drawer ?  "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex items-center flex-col">
          <li className="p-2 cursor-pointer">Option 1</li>
          <li className="p-2 cursor-pointer">Option 2</li>
          <li className="p-2 cursor-pointer">Option 3</li>
          <li className="p-2 cursor-pointer">Option 4</li>
          <li className="p-2 cursor-pointer">Option 5</li>
          <li className="p-2 cursor-pointer">Option 6</li>
 
    
        </ul>
      </div>
      <div className={`${drawer?"block":"hidden"} absolute top-0 left-0 h-full w-full bg-black bg-opacity-50`}></div>
      <div
        className={[
          "flex",
          "justify-around",
          "p-4",
          "items-center",
          "header",
          "primary",
      
    
        ].join(" ")}
      >
        <div className="flex  items-center">
          <div
          ref={drawerRef}
            className="px-4 cursor-pointer"
            onClick={() => setDrawer(!drawer)}
          >
            <MenuIcon />
          </div>

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

  
      </div>
    </>
  );
};
// ===============================================================================
