import { useSelector } from "react-redux";
import BookProducCard from "./BookProducCard";

const FilteredBooks = ({ booksData }) => {
  const { authors, publications } = useSelector((state) => state.book);

  let filteredBooks;

  if (authors.length > 0 || publications.length > 0) {
    const authorSet = new Set(authors);
    const publicationSet = new Set(publications);
    filteredBooks = booksData.filter(
      (book) =>
        (authors.length > 0) & authorSet.has(book.author) ||
        (publications.length > 0 && publicationSet.has(book.publication))
    );
  } else {
    filteredBooks = booksData;
  }

  let content;
  if (filteredBooks.length > 0) {
    content = (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredBooks.map((book) => (
          <BookProducCard key={book._id} book={book} />
        ))}
      </div>
    );
  } else {
    content = (
      <div>
        <p className="flex flex-col mt-36 text-xl font-medium">
          No Books found in this Genry
        </p>
      </div>
    );
  }
  return <>{content}</>;
};

export default FilteredBooks;
