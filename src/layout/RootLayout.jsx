import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/Header/Header";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
