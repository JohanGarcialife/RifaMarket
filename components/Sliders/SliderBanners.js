import React, { useEffect, useState } from "react";
import { getBannersApi } from "@/supabase/Supabase";
import { Image } from "@nextui-org/react";
import Slider from "react-slick";
import useWindowSize from "@/hooks/useWindowSize";

export default function SliderBanners() {
  const [banners, setBanners] = useState([]);
  const { width } = useWindowSize();

  useEffect(() => {
    (async () => {
      const response = await getBannersApi();
      setBanners(response);
    })();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {banners?.map((banner) => (
        <Image
          alt="Banner"
          height={width / 2}
          src={banner.image}
          width={width}
        />
      ))}
    </Slider>
  );
}
