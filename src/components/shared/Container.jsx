import React from "react";

const Container = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto xl:px-20 md:px-10 sm:px-2">
      {children}
    </div>
  );
};

export default Container;
