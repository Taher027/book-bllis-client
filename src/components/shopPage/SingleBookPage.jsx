import React from "react";
import { useParams } from "react-router";
import BookModel from "../../assets/data/BookModel";
import Container from "../shared/Container";
import BookDetails from "./BookDetails";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";
import MoreProducts from "./MoreProducts";

const SingleProduct = () => {
  const params = useParams();
  const id = params.id;
  const filterBook = BookModel.filter((book) => book.id === id);
  console.log(filterBook);

  return (
    <Container>
      <section className="flex flex-col justify-center md:flex-row md:justify-between gap-4 py-12 ">
        <div className="w-full md:w-2/3 flex flex-col gap-5">
          {/* product details setion  */}
          <div>
            {filterBook.length &&
              filterBook.map((book, index) => {
                return <BookDetails key={index} book={book} />;
              })}
          </div>
          {/* review section  */}
          <div className="w-fll">
            <ReviewForm />
            <Reviews />
          </div>
        </div>
        {/* right side products advertisement  */}
        <div className="w-full md:w-1/3">
          <MoreProducts />
        </div>
      </section>
    </Container>
  );
};

export default SingleProduct;
