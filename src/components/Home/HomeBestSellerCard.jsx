import React from "react";
import { Link } from "react-router";

const HomeBestSellerCard = ({ book }) => {
  const { title, imageUrl, author, publication, _id: id } = book;
  return (
    <Link to={`/books/genre/${id}`}>
      <div className="flex gap-3 p-4 border-b-1 border-gray-300  ">
        <div className="w-1/3">
          <img
            src={imageUrl}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/3">
          <h3 className="text-sm font-normal">{title}</h3>
          <p className="card-text font-semibold text-[13px] mt-2">{author}</p>
          <p className="card-text font-semibold text-[13px] mt-1">
            {publication}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomeBestSellerCard;
