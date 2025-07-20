import React from "react";
import Footer from "../components/shared/footer/Footer";
import Logo from "../components/shared/Header/Logo";
import { Outlet } from "react-router";
import Container from "../components/shared/Container";
import AsideNav from "../components/Dashboard/DasboardNav/AsideNav";
import { Toaster } from "react-hot-toast";

const DashBoard = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <AsideNav />
      <div className="flex-1 md:ml-64 ">
        <div className="p-4">
          <Outlet />
        </div>
      </div>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
        }}
      />
    </div>
  );
};

export default DashBoard;
