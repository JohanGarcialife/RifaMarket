import React, { useEffect, useState } from "react";
import Encabezado from "../Encabezado";
import Producto from "../Producto";
import Slider from "react-slick";
import { Button } from "@nextui-org/react";
import { getProductosApi } from "@/supabase/Supabase";

export default function SliderProducts(props) {
  const { title, subtitle } = props;
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getProductosApi();
      setProductos(response);
    })();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    cssEase: "linear",
  };

  return (
    <div className="px-20 py-10 space-y-10">
      <Encabezado title={title} subtitle={subtitle} />
      <Slider {...settings}>
        {productos?.map((producto) => (
          <Producto producto={producto} />
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
