import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import banner1 from "../../assets/banner/banner1.webp";
import banner2 from "../../assets/banner/banner2.jpg";
import banner3 from "../../assets/banner/banner3.jpg";
import banner4 from "../../assets/banner/banner4.webp";
import { Link } from "react-router";

const slideImages = [
  {
    id: 1,
    url: banner1,
    alt: "Ocean Beach",
    link: "books/thriller",
  },
  {
    id: 2,
    url: banner2,
    alt: "Mountain Landscape",
    link: "books/romance",
  },
  {
    id: 3,
    url: banner3,
    alt: "Green Forest",
    link: "books/fantasy",
  },
  {
    id: 4,
    url: banner4,
    alt: "City Skyline",
    link: "books/fiction",
  },
];

const Carousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        className="w-full  custom-swiper"
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        modules={[EffectFade, Pagination, Autoplay]}
      >
        {slideImages.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Link to={slide.link}>
              <img
                src={slide.url}
                alt={slide.alt}
                className="max-w-full h-full object-cover cursor-pointer mt-2 md:mt-5"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
