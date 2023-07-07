import React, { useEffect } from "react";
import { DeskHeader } from "../../desktop/sample1/DeskHeader";
import { Tabheader } from "../../tab/sample1/Tabheader";
import "./button.scss";
import { Mobheader } from "../../mobile/sample1/Mobheader";
interface HeaderSample1Props {
  brandname: string;
}

export const HeaderSample1 = ({ brandname = "Brand" }: HeaderSample1Props) => {
  return (
    <div>
      <div className="hidden lg:block ">
        <DeskHeader brandname="Brand" />
      </div>
      <div className="hidden sm:block lg:hidden">
        <Tabheader brandname="Brand" />
      </div>
      <div className=" sm:hidden">
        <Mobheader brandname="Brand" />
      </div>
    </div>
  );
};
