import React from "react";
import BookModel from "../../assets/data/BookModel";
import MoreProductCard from "./MoreProductCard";

const MoreProducts = () => {
  return (
    <aside>
      <div className="flex flex-col  border-1 border-t-2 border-t-amber-500 border-gray-300">
        {BookModel.slice(0, 10).map((book) => (
          <MoreProductCard key={book.id} book={book} />
        ))}
      </div>
    </aside>
  );
};

export default MoreProducts;
