import React from "react";
import Encabezado from "../Encabezado";
import Producto from "../Producto";
import Slider from "react-slick";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function SliderProducts(props) {
  const { title, subtitle, productos } = props;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    cssEase: "linear",
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
    <div className="px-12 md:px-48 lg:px-64 space-y-1 md:space-y-10 py-5">
      <Encabezado title={title} subtitle={subtitle} />
      <Slider {...settings}>
        {productos?.map((producto) => (
          <Link key={producto.id} href={`/${producto.id}`}>
            <div className="p-5">
              <Producto producto={producto} />
            </div>
          </Link>
        ))}
      </Slider>
      <div className="flex w-full justify-center">
        <Button className="bg-primary" variant="solid">
          <p className="text-white">Ver todos los productos</p>
        </Button>
      </div>
    </div>
  );
}
