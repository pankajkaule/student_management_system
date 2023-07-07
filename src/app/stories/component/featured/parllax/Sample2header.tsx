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
<div className="wrapper">
    <header>
      <img src="https://cdn.imgpaste.net/2022/10/10/Kem93m.png" className="background"/>
      <img src="https://cdn.imgpaste.net/2022/10/10/KemO9N.png" className="foreground"/>
      <h1 className="title">Welcome!</h1>
    </header>
    <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis unde illo neque at hic quisquam, nulla consectetur, itaque maxime sit iusto aliquam culpa reiciendis eaque recusandae vitae modi, animi expedita perferendis inventore. Culpa incidunt odit dicta quibusdam ullam facilis eum magnam, consectetur voluptates praesentium, pariatur eos nihil! Natus in, autem aut facere repellat eveniet commodi illo ullam hic fugit deserunt explicabo esse atque reprehenderit optio, dicta suscipit sed! Porro fugiat numquam vel magni, iure provident consequuntur velit ut quia itaque repudiandae molestiae, nobis sequi incidunt autem! Cum impedit accusamus laboriosam eaque necessitatibus consectetur incidunt a exercitationem molestias doloribus tenetur amet, ullam at repudiandae, quos reprehenderit adipisci assumenda dolor enim voluptas natus! Assumenda praesentium voluptate culpa quidem quasi impedit unde incidunt odit velit, dolore officiis distinctio, fugit, optio sed. Quos nesciunt eius reprehenderit ipsa consectetur tempora, fugiat provident corporis perspiciatis veritatis totam temporibus voluptates soluta vitae mollitia molestias reiciendis expedita doloribus est. Maxime et fugit expedita id sed cumque harum dignissimos aperiam voluptatum quos obcaecati illo tempore consectetur, sunt perferendis eius aliquid soluta praesentium voluptatem assumenda ex fuga. Iusto, possimus? Dolores deleniti eaque, aperiam consequuntur odit culpa, architecto, quas veniam provident inventore eius. Laboriosam in reprehenderit quidem? Officiis illum molestiae, praesentium velit, illo debitis quasi fuga laborum veritatis necessitatibus fugiat cupiditate! Quia animi provident maxime numquam porro itaque! Provident, rerum. Aliquid cum quo ducimus ad? Repellat nihil, saepe beatae rerum sint eveniet voluptate officiis velit autem officia tempore deserunt sequi quod quae culpa sed. Reprehenderit eveniet ipsum nihil ipsam quam facilis, possimus modi placeat ratione soluta voluptate obcaecati error minima enim, fugiat quaerat architecto, iure dignissimos a eum quidem eos at fuga. Consectetur, quisquam at reprehenderit in exercitationem inventore incidunt dolorum quos adipisci labore? Fugiat facilis ipsum minus, officiis eos modi sequi distinctio pariatur reprehenderit accusantium labore obcaecati, recusandae saepe?</section>
  </div>
  
    );
};
