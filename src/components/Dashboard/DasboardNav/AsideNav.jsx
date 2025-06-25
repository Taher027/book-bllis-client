import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import Logo from "../../shared/Header/Logo";
import { FcSettings } from "react-icons/fc";
import { Link } from "react-router";
import { BsGraphUp } from "react-icons/bs";
import AdminRoutes from "./AdminRoutes";

const AsideNav = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };
  console.log(isActive);

  return (
    <aside>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Logo />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      <div
        className={`z-10 w-64 md:flex flex flex-col justify-between overflow-x-hidden bg-gray-100 absolute inset-y-0 left-0 space-y-6 px-3 py-4 transform ${
          isActive && "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out `}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
              <Logo />
            </div>
          </div>

          {/* nav items  */}
          <div className="flex flex-col justify-between mt-6 flex-1">
            <AdminRoutes />
          </div>
        </div>
        <div>user setting items</div>
      </div>
    </aside>
  );
};

export default AsideNav;
