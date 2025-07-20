import React from "react";
import { useGetBooksQuery } from "../../redux/features/book/bookApi";
import MoreProductCard from "./MoreProductCard";

const MoreProducts = () => {
  const { data, isLoading } = useGetBooksQuery();
  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (data?.data) {
    const relatedProducts = data.data;
    content = relatedProducts
      .slice(0, 10)
      .map((book) => <MoreProductCard key={book._id} book={book} />);
  }
  return (
    <aside>
      <div className="flex flex-col  border-1 border-t-2 border-t-amber-500 border-gray-300">
        {content}
      </div>
    </aside>
  );
};

export default MoreProducts;
