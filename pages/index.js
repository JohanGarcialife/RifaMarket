import Layout from "@/layout/Layout";
import HeroSection from "@/components/HeroSection";
import SliderRifasDelDia from "@/components/Sliders/SliderRifasDelDia";

export default function Home() {
  return (
    <Layout className="min-h-screen">
      <div className="bg-bg md:min-h-screen">
        <HeroSection />
        <SliderRifasDelDia />
      </div>
    </Layout>
  );
}
