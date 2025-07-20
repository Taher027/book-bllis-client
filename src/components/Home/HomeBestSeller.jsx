import React from "react";
import BookModel from "../../assets/data/BookModel";
import HomeBestSellerCard from "./HomeBestSellerCard";
import { useGetBooksQuery } from "../../redux/features/book/bookApi";
const HomeBestSeller = () => {
  const { data, isLoading } = useGetBooksQuery("");
  let content = null;
  if (isLoading) {
    content = <div className="text-center text-gray-500">Loading...</div>;
  } else if (data?.data?.length > 0) {
    content = data.data.map((book, index) => (
      <HomeBestSellerCard key={index} book={book} />
    ));
  } else {
    content = (
      <div className="text-center text-gray-500">No bestsellers found</div>
    );
  }

  return (
    <div className="my-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {content}
      </div>
    </div>
  );
};

export default HomeBestSeller;
