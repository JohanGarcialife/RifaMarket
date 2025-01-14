import React, { useEffect, useState } from "react";
import { getBannersApi } from "@/supabase/Supabase";
import Slider from "react-slick";
import { Image } from "@nextui-org/react";

export default function SliderBanners() {
  const [banners, setBanners] = useState([]);

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
  };

  return (
    <Slider {...settings}>
      {banners?.map((banner) => (
        <Image alt="Banner" height={400} src={banner.image} width={1000} />
      ))}
    </Slider>
  );
}
