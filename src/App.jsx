import React from "react";
import { RouterProvider } from "react-router";
import { DiVim } from "react-icons/di";
import RootLayout from "./layout/RootLayout";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/scrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <div className="mx-auto">
        <RootLayout />
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: "green",
              },
            },
            error: {
              style: {
                background: "red",
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default App;
