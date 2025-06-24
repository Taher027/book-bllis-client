import { useEffect, useRef, useState } from "react";
import BookModel from "../../assets/data/BookModel";
import Container from "../shared/Container";
import HomeProductCard from "./HomeProductCard";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const HomeProduct = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowNav(window.innerWidth > 767);
    };

    handleResize(); // set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="relative w-full">
      {/* swiper custom button for product navigation */}
      {showNav && (
        <>
          <button
            ref={prevRef}
            className="absolute w-8 h-14 cursor-pointer rounded-sm top-1/2 -left-4 z-10 -translate-y-1/2 bg-white p-2  shadow-md hover:bg-gray-200"
          >
            <MdArrowBackIos size={25} />
          </button>
          <button
            ref={nextRef}
            className="absolute w-8 h-14 cursor-pointer rounded-sm top-1/2 -right-4 z-10 -translate-y-1/2 bg-white p-2 shadow-md hover:bg-gray-200"
          >
            <MdArrowForwardIos size={25} />
          </button>
        </>
      )}
      <Swiper
        spaceBetween={40}
        slidesPerView={6}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2.5,
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 3.2,
            spaceBetween: 16,
          },
          670: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          870: {
            slidesPerView: 5,
            spaceBetween: 35,
          },
          1080: {
            slidesPerView: 6,
            spaceBetween: 35,
          },
        }}
        onBeforeInit={(swiper) => {
          // Bind navigation elements to Swiper instance
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        className="mt-8 "
      >
        {BookModel.map((book, index) => (
          <SwiperSlide key={index}>
            <HomeProductCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeProduct;
