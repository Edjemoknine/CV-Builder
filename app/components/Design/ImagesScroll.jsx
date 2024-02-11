"use client";
import { imagesCv } from "../../../public";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 1000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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

const ImagesScroll = () => {
  return (
    <div className="pb-6 max-w-5xl mx-auto">
      <Slider {...settings}>
        {imagesCv.map((img) => (
          <div key={img}>
            <Image
              className="object-contain hover:border cursor-pointer border-sky-600 duration-300 shadow-xl"
              src={img}
              alt="image"
              width={200}
              height={200}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImagesScroll;
