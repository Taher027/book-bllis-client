import React, { useEffect, useState } from "react";
import BookModel from "../../assets/data/BookModel";
import { Link } from "react-router";
import BookProducCard from "./BookProducCard";

const FilteredBooks = ({ category, checkedAuthors, checkedPublications }) => {
  console.log(checkedAuthors, "checkedAuthors");

  const categoryLower = category && category.toLowerCase();
  const [books, setBooks] = useState([]);
  const filterBooks = (books, categoryLower) => {
    return books.filter(
      (book) => book.category.toLowerCase() === categoryLower
    );
  };
  const applyFilter = () => {
    let filtered = filterBooks(BookModel, categoryLower);

    if (checkedAuthors.length > 0) {
      filtered = filtered.filter((book) =>
        checkedAuthors.includes(book.author)
      );
    }

    if (checkedPublications.length > 0) {
      filtered = filtered.filter((book) =>
        checkedPublications.includes(book.publication)
      );
    }

    setBooks(filtered);
  };

  useEffect(() => {
    applyFilter();
  }, [categoryLower, checkedAuthors, checkedPublications]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {books.length > 0 ? (
        books.map((book) => <BookProducCard key={book.id} book={book} />)
      ) : (
        <p>No books found in this category.</p>
      )}
    </div>
  );
};

export default FilteredBooks;
