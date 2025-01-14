import React from "react";

export default function Encabezado(props) {
  const { title, subtitle } = props;
  return (
    <div className="space-y-5">
      <div className="flex items-center space-x-2">
        <div className="w-5 h-10 bg-primary rounded-lg" />
        <h2 className="text-primary font-semibold">{subtitle}</h2>
      </div>
      <h3 className="text-title text-4xl font-semibold">{title}</h3>
    </div>
  );
}
