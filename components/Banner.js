import React from "react";
import { Image } from "@nextui-org/react";
import useWindowSize from "@/hooks/useWindowSize";

export default function Banner(props) {
  const { image } = props;
  const { width } = useWindowSize();

  return (
    <div className="px-12 md:px-48 lg:px-64 py-5 flex items-center justify-center">
      <Image
        alt="Banner"
        height={width / 2}
        src={image}
        width={width}
        className="cursor-pointer"
      />
    </div>
  );
}
