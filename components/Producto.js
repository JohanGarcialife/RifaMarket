import React from "react";
import { Image, Slider } from "@nextui-org/react";
import { FaRegHeart } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";

export default function Producto() {
  return (
    <div className="w-fit space-y-3 cursor-pointer">
      <div className="relative w-fit h-fit">
        <div className="bg-primary rounded-lg py-1 px-2 absolute z-10 top-3 left-3">
          <p className="text-white text-sm">HOY</p>
        </div>
        <div className="absolute z-10 top-3 right-3">
          <div className="bg-bg p-1 rounded-full text-title cursor-pointer hover:opacity-50">
            <FaRegHeart />
          </div>
        </div>
        <Image
          isZoomed
          alt="NextUI hero Image with delay"
          height={250}
          width={250}
          src="https://nextui.org/images/hero-card-complete.jpeg"
          className=" z-0"
        />
      </div>
      <div className=" space-y-3">
        <p className="text-title text-xl font-semibold">Nombre del Producto</p>
        <div className="flex items-center space-x-3 text-primary ">
          <IoTicketOutline />
          <p className="font-semibold text-lg">$1</p>
        </div>
        <Slider
          className="max-w-md text-primary font-semibold"
          getValue={(porcentaje) => `${porcentaje}%`}
          //   formatOptions={{ style: "percent" }}
          label="Tickets Vendidos"
          size="md"
          maxValue={100}
          minValue={0}
          step={1}
        />
      </div>
    </div>
  );
}
