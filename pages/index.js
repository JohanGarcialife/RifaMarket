import Layout from "@/layout/Layout";
import HeroSection from "@/components/HeroSection";
import SliderProducts from "@/components/Sliders/SliderProducts";
import SliderCategorias from "@/components/Sliders/SliderCategorias";
import Banner from "@/components/Banner";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Home() {
  return (
    <Layout className="min-h-screen">
      <div className="bg-bg md:min-h-screen">
        <HeroSection />
        <SliderProducts title={"Rifas del Día"} subtitle={"Para Hoy"} />
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
      </div>
    </Layout>
  );
}
