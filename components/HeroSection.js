import React, { useEffect, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import Frame560 from "@/public/Frame560.png";
import { Image, Skeleton } from "@nextui-org/react";
import MenuVerticalCategorias from "./MenuVerticalCategorias";

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
        {/* <Skeleton className="rounded-lg"> */}
        <Image
          alt="NextUI hero Image with delay"
          height={350}
          src="https://nextui.org/images/hero-card-complete.jpeg"
          width={900}
        />
        {/* </Skeleton> */}
      </div>
    </div>
  );
}
