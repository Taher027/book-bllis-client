import React from "react";
import { useParams } from "react-router";
import BookModel from "../../assets/data/BookModel";
import Container from "../shared/Container";
import BookDetails from "./BookDetails";
import ReviewForm from "./ReviewForm";
import Reviews from "./Reviews";
import MoreProducts from "./MoreProducts";
import { useGetSingleBookQuery } from "../../redux/features/book/bookApi";

const SingleProduct = () => {
  const params = useParams();
  const id = params.bookId;

  const { data, isLoading } = useGetSingleBookQuery(id);
  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else {
    content = <BookDetails book={data.data} />;
  }
  return (
    <Container>
      <section className="flex flex-col justify-center md:flex-row md:justify-between gap-4 py-12 ">
        <div className="w-full md:w-2/3 flex flex-col gap-5">
          {/* product details setion  */}
          <div>{content}</div>
          {/* review section  */}
          <div className="w-fll">
            <ReviewForm />
            <Reviews />
          </div>
        </div>
        {/* right side products advertisement  */}
        <aside className="w-full md:w-1/3">
          <MoreProducts />
        </aside>
      </section>
    </Container>
  );
};

export default SingleProduct;
