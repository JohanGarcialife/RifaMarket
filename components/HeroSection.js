import React from "react";

import MenuVerticalCategorias from "./MenuVerticalCategorias";
import SliderBanners from "./Sliders/SliderBanners";

export default function HeroSection() {
  return (
    <div
      className="px-12 md:px-48 lg:px-64 py-10 md:py-0 md:flex items-center space-y-5 md:space-y-0 md:space-x-5"
      id="home"
    >
      <div className="md:w-1/4 ">
        <MenuVerticalCategorias />
      </div>
      <div className="md:w-3/4 ">
        <SliderBanners />
      </div>
    </div>
  );
}
