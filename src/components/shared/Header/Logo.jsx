import React from "react";
import siteLogo from "../../../assets/logo.png";
import { Link } from "react-router";
const Logo = () => {
  return (
    <div className="size-16 shrink-0 flex items-center justify-start">
      <Link to="/">
        <img className="w-[80px] h-auto object-contain" src={siteLogo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
