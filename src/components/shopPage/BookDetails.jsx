import React from "react";
import { calculateDiscount } from "../../uitls/calculateBookDiscount";

const BookDetails = ({ book }) => {
  const {
    title,
    author,
    price,
    sellPrice,
    imageUrl,
    publication,
    subject,
    languages,
    shortDescription,
  } = book;
  console.log(book);

  const discount = calculateDiscount(price, sellPrice);
  return (
    <div className="w-full flex flex-col md:flex-row gap-6 ">
      <div className="w-full flex justify-center md:w-[250px] ">
        <img
          src={imageUrl}
          alt="book image"
          className="w-[250px] h-full object-cover"
        />
      </div>
      <div className="w-full pl-5 md:pl-0  md:w-2/3 flex flex-col">
        <h1 className="text-xl font-medium mb-4 card-text">{title}</h1>
        <span className="text-sm mb-2 card-text-secondary">
          Author : <span className="text-primary ml-1">{author}</span>
        </span>
        <span className="text-sm mb-2 card-text-secondary">
          Publication : <span className="text-primary ml-1">{publication}</span>
        </span>
        <span className="text-sm mb-2 card-text-secondary">
          Subject: <span className="text-primary ml-1">{subject}</span>
        </span>
        <span className="text-sm mb-2 card-text-secondary">
          Languages: {languages}
        </span>
        <p className="text-sm card-text-secondary mb-6">{shortDescription}</p>
        <div className="flex gap-2 text-xl font-semibold">
          <span className=" text-primary mb-4">${sellPrice}</span>
          <span className=" card-text-secondary font-thin mb-4 line-through">
            ${price}
          </span>
          <span className=" text-primary mb-4">({discount}% Discount)</span>
        </div>
        <div className="flex">
          <button className="button-bg inline text-black/90 px-4 py-2 rounded hover:bg-red-600 hover:text-white transition duration-300">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
