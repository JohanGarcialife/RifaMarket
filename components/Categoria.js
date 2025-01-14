import React from "react";
import { CiMobile4 } from "react-icons/ci";

export default function Categoria(props) {
  const { categoria } = props;
  return (
    <div className="cursor-pointer hover:bg-primary/20 hover:opacity-50 flex flex-col items-center justify-center p-5 max-w-44 min-h-36 max-h-36 border border-black/30 space-y-3">
      <CiMobile4 className="text-black text-5xl" />

      <p className="text-black text-center font-semibold">{categoria.name}</p>
    </div>
  );
}
