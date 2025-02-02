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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-12 md:px-48 lg:px-64 space-y-10 py-5">
      <Encabezado title={title} subtitle={subtitle} />
      <Slider {...settings}>
        {categorias?.map((categoria) => (
          <Categoria categoria={categoria} />
        ))}
      </Slider>
    </div>
  );
}
