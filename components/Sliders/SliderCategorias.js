import React, { useEffect, useState } from "react";
import Encabezado from "../Encabezado";
import Slider from "react-slick";
import Categoria from "../Categoria";
import { getCategoriasApi } from "@/supabase/Supabase";

export default function SliderCategorias(props) {
  const { title, subtitle } = props;
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getCategoriasApi();
      setCategorias(response);
    })();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    cssEase: "linear",
  };

  return (
    <div className="px-20 py-10 space-y-10">
      <Encabezado title={title} subtitle={subtitle} />
      <Slider {...settings}>
        {categorias?.map((categoria) => (
          <Categoria categoria={categoria} />
        ))}
      </Slider>
    </div>
  );
}
