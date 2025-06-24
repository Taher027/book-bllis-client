import React from "react";
import featureBgimg from "../../assets/shaw_dow_product.webp";
import { Link } from "react-router";

const FeatureTititle = ({ title, buttonText, link }) => {
  return (
    <div className="mt-8 px-3 md:px-0">
      <div className="relative h-14 flex items-center justify-between py-2 px-4  md:px-5 md:py-3 border border-gray-200">
        <div
          style={{ backgroundImage: `url(${featureBgimg})` }}
          className="w-full h-[5px] absolute lef-0 right-0 -bottom-[5px]  bg-repeat bg-top-left"
        ></div>
        <div className="flex items-center">
          <h3 className="text-lg text-primary font-semibold p-2">{title}</h3>
        </div>
        {buttonText && (
          <button className="button-bg rounded-md text-black/80 hover:bg-red-600 hover:text-white transition duration-300 px-5 py-2 hidden md:block cursor-pointer">
            <Link to={link}>
              <span className="text-sm font-semibold  ">{buttonText}</span>
            </Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default FeatureTititle;
