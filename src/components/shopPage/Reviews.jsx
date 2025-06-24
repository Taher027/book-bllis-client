import React from "react";
import reviews from "../../assets/data/reviewData";
const Reviews = () => {
  return (
    <div className="w-full p-5 flex flex-col space-y-5">
      {reviews.slice(0, 4).map((review) => {
        return (
          <div
            key={review.id}
            className="p-5 shadow-lg mb-4 border-1 border-gray-100"
          >
            <p className="text-sm text-gray-500 font-normal ">
              {review.message}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
