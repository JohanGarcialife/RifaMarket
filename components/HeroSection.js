import React, { useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import MenuVerticalCategorias from "./MenuVerticalCategorias";
import SliderBanners from "./Sliders/SliderBanners";

export default function HeroSection() {
  const { width } = useWindowSize();

  // useEffect(() => {
  //   (async () => {
  //     const response = await getTechnologiesApi();
  //     setTechArray(response);
  //   })();
  // }, []);

  return (
    <div className="px-20 py-10  flex items-center  space-x-5" id="home">
      <div className="w-1/4  flex flex-col ">
        <MenuVerticalCategorias />
      </div>
      <div className="w-3/4 ">
        <SliderBanners />
      </div>
    </div>
  );
}
