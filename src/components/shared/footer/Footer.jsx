import React from "react";
import Container from "../Container";
import siteLogo from "../../../assets/logo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 py-2">
      <Container>
        <div className="flex items-center justify-between">
          <div className="size-16 shrink-0 flex items-center justify-start">
            <Link to="/">
              <img
                className="w-[80px] h-auto object-contain"
                src={siteLogo}
                alt=""
              />
            </Link>
          </div>
          <div>
            <span className="text-sm font-semibold uppercase ">
              @All right reservs to Taher
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
