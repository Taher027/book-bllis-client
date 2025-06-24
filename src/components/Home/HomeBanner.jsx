import React from "react";
import bannerBg from "../../assets/bg-banner.jpg";
import { Link } from "react-router";

const HomeBanner = () => {
  return (
    <div className="relative w-full mt-5 mb-5">
      {/* Responsive image with blur */}
      <img src={bannerBg} alt="Banner" className="w-full object-cover " />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Text content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-xl md:text-3xl font-bold mb-4">
          Discover Your Next Great Read.
        </h1>
        <p className="px-4 md:w-5/6 mx-atuo text-center text-base mb-6 ">
          From heart-stirring fiction to mind-opening reads, explore a
          handpicked collection made to captivate, inspire, and delight. Your
          next unforgettable book awaits—dive in and let the pages pull you in.
        </p>
        <Link to={"/books"}>
          <button className="px-5 py-2 button-bg rounded-md cursor-pointer hover:bg-red-600 duration-300 transition-colors  text-black font-medium ">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner;
