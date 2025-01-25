import React, { useEffect, useState } from "react";
import Encabezado from "../Encabezado";
import Producto from "../Producto";
import Slider from "react-slick";
import { Button } from "@heroui/react";

export default function SliderMultiple(props) {
  const { title, subtitle, productos } = props;

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="px-12 md:px-48 lg:px-64 space-y-10">
      <Encabezado title={title} subtitle={subtitle} />
      <div className="slider-container ">
        <Slider {...settings}>
          {productos?.map((producto) => (
            <div className="p-5">
              <Producto producto={producto} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex w-full justify-center">
        <Button className="bg-primary" variant="solid">
          <p className="text-white">Ver todos los productos</p>
        </Button>
      </div>
    </div>
  );
}
