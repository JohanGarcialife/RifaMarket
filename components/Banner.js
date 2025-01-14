import React from "react";
import { Image } from "@nextui-org/react";

export default function Banner(props) {
  const { image } = props;

  return (
    <div className="flex items-center justify-center">
      <Image alt="Banner" height={500} src={image} width={1200} />
    </div>
  );
}
