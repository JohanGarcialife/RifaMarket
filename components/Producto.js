import React from "react";
import { Image } from "@heroui/react";
import { FaRegHeart } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";

export default function Producto(props) {
  const { producto } = props;
  const {
    name,
    description,
    totalTickets,
    image,
    categoria,
    ticketPrice,
    ticketsVendidos,
  } = producto;
  const progress = (ticketsVendidos / totalTickets) * 100;

  return (
    <div className="w-fit space-y-3 cursor-pointer my-10">
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
          alt="Producto"
          height={250}
          width={250}
          src={image}
          className=" z-0"
        />
      </div>
      <div className=" space-y-3">
        <p className="text-title text-base md:text-xl font-semibold">{name}</p>
        <div className="flex items-center space-x-2 text-primary ">
          <IoTicketOutline className="font-semibold text-lg" />
          <p className="font-semibold text-lg">${ticketPrice}</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
          <div
            className="bg-primary text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${progress}%` }}
          >
            <p className="font-semibold text-white">{Math.trunc(progress)}% </p>
          </div>
        </div>
      </div>
    </div>
  );
}
