import React, { useEffect, useState } from "react";
import { getBannersApi } from "@/supabase/Supabase";
import { Image } from "@nextui-org/react";
import Slider from "react-slick";
import useWindowSize from "@/hooks/useWindowSize";

export default function SliderBanners() {
  const [banners, setBanners] = useState([]);
  const { width, height } = useWindowSize();

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
        <>
          {width > 600 ? (
            <div className="p-5">
              <Image
                alt="Banner"
                height={height / 2}
                src={banner.image}
                width={width}
              />
            </div>
          ) : (
            <div className="p-1">
              <Image
                alt="Banner"
                height={width / 2}
                src={banner.image}
                width={width}
              />
            </div>
          )}
        </>
      ))}
    </Slider>
  );
}
