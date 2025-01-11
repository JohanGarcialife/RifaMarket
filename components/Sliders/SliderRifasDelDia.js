import React from "react";
import Encabezado from "../Encabezado";
import Producto from "../Producto";

export default function SliderRifasDelDia() {
  return (
    <div className="px-20 py-10 space-y-10">
      <Encabezado title={"Para Hoy"} subtitle="Rifas Del Día" />
      <Producto />
    </div>
  );
}
