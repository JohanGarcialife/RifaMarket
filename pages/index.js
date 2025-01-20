import React, { useEffect, useState } from "react";
import Layout from "@/layout/Layout";
import HeroSection from "@/components/HeroSection";
import SliderProducts from "@/components/Sliders/SliderProducts";
import SliderCategorias from "@/components/Sliders/SliderCategorias";
import Banner from "@/components/Banner";
import SliderMultiple from "@/components/Sliders/SliderMultiple";
import Faq from "@/components/Faq";
import { getProductosApi } from "@/supabase/Supabase";
import useWindowSize from "@/hooks/useWindowSize";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Home() {
  const { width } = useWindowSize();
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await getProductosApi();
      setProductos(response);
    })();
  }, []);
  return (
    <Layout className="min-h-screen">
      <div className="bg-bg md:min-h-screen">
        <HeroSection />
        <SliderProducts
          title={"Rifas del Día"}
          subtitle={"Para Hoy"}
          productos={productos}
        />
        <SliderCategorias
          title={"Busca por Categoría"}
          subtitle={"Categorías"}
        />
        <SliderProducts
          title={"Productos Populares"}
          subtitle={"En Tendencia"}
        />
        <Banner
          image={
            "https://fnqpaoabomsyxpojrdvg.supabase.co/storage/v1/object/public/banners/Banner.png"
          }
        />
        {width < 600 ? (
          <SliderProducts
            title={"Explora nuestros productos"}
            subtitle={"Nuestros Productos"}
            productos={productos}
          />
        ) : (
          <SliderMultiple
            title={"Explora nuestros productos"}
            subtitle={"Nuestros Productos"}
            productos={productos}
          />
        )}
        <Faq
          title={"Preguntas frecuentes"}
          subtitle={"Aclara Cualquier Duda"}
        />
      </div>
    </Layout>
  );
}
