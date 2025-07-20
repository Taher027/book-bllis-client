import React from "react";
import { Link } from "react-router";

const MoreProductCard = ({ book }) => {
  const {
    _id: id,
    title,
    author,
    imageUrl,
    price,
    sellPrice,
    publication,
  } = book;
  return (
    <Link to={`/books/genre/${id}`}>
      <div className="flex gap-3 border-b-1 border-gray-400 p-4">
        <div className="max-w-16 h-auto flex-shrink-0">
          <img
            className="w-full object-cover"
            src={imageUrl}
            alt="product image"
          />
        </div>
        <div>
          <h3 className="text-[15px] card-text font-medium">{title}</h3>
          <span className="text-[12px] block card-text font-normal mb-1">
            {author}
          </span>
          <span className="text-[12px] block card-text font-normal mb-1">
            {publication}
          </span>
          <div className="flex gap-2 items-center ">
            <span className="line-through text-[12px] card-secondary-text font-medium">
              ${price}
            </span>
            <span className="text-[13px] text-primary font-semibold">
              ${sellPrice}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MoreProductCard;
