import React from "react";
import BookModel from "../../assets/data/BookModel";
import HomeBestSellerCard from "./HomeBestSellerCard";
const HomeBestSeller = () => {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {BookModel.slice(0, 12).map((book, index) => (
          <HomeBestSellerCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default HomeBestSeller;
