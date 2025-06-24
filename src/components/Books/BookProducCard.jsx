import React from "react";
import { Link } from "react-router";

const BookProducCard = ({ book }) => {
  const { image, title, author, price, sellPrice } = book;
  const discount = price - sellPrice;
  const discountPercentage = ((discount / price) * 100).toFixed(0);
  return (
    <div className="w-full">
      <Link to={`/books/category/book/${book.id}`}>
        <div className="w-full h-full md:min-h-[360px] mb-5 relative flex flex-col gap-1 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="relative z-40">
            <img src={image} alt="book image" className="w-full object-cover" />
            <div className="w-10 h-10 rounded-full absolute top-0 -left-4 z-50 discount-badge flex items-center justify-center">
              <span className="text-sm text-white">{discountPercentage}%</span>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-base font-medium card-text ">{title}</h3>
            <p className="text-sm font-normal card-text mt-1">{author}</p>
            <div className="flex items-center gap-3 mt-2 absolute bottom-0 left-0 p-2 ">
              <span className="line-through text-sm card-text-secondary font-normal">
                ${price}
              </span>
              <span className="text-sm font-medium text-primary">
                ${sellPrice}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookProducCard;
