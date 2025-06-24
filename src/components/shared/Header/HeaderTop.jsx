import React from "react";
import Logo from "./Logo";
import Container from "../Container";
import SearchForm from "./SearchForm";

const HeaderTop = () => {
  return (
    <>
      <div className="w-full md:border-b  border-gray-100 md:pb-1">
        <Container>
          <div className="w-full flex  md:space-x-4 lg:space-x-10 items-center justify-between px-2 gap-4">
            <Logo></Logo>

            <div className=" hidden md:block w-full ">
              <SearchForm />
            </div>

            <div className="flex  items-center justify-between gap-4 ">
              <span>wishlist</span>
              <span>Login</span>
              <span>Register</span>
            </div>
          </div>
        </Container>
      </div>
      {/* mobile search form  */}
      <div className="block md:hidden  w-full mt-5 bg-gray-200 px-2 py-3">
        <SearchForm />
      </div>
    </>
  );
};

export default HeaderTop;
