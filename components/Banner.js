import React from "react";
import { Image } from "@nextui-org/react";
import useWindowSize from "@/hooks/useWindowSize";

export default function Banner(props) {
  const { image } = props;
  const { width, height } = useWindowSize();

  return (
    <div className="px-12 md:px-48 lg:px-64 py-5 flex items-center justify-center">
      {width > 600 ? (
        <Image alt="Banner" height={height / 1.5} src={image} width={width} />
      ) : (
        <Image alt="Banner" height={width / 2} src={image} width={width} />
      )}
    </div>
  );
}
