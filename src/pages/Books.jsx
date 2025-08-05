import Container from "../components/shared/Container";
import FilteredBooks from "../components/Books/FilteredBooks";
import BookAside from "../components/Books/BookAside";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import { useLocation, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setGenre } from "../redux/features/book/bookSlice";
import { useEffect } from "react";

const Books = () => {
  const dispatch = useDispatch();
  const { genre } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const searchTerm = queryParams.get("searchTerm");

  const { data, isLoading } = useGetBooksQuery({ searchTerm });

  const { bookGenre } = useSelector((state) => state.book);

  useEffect(() => {
    if (genre) {
      dispatch(setGenre(genre));
    } else {
      dispatch(setGenre(""));
    }
  }, [genre, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  let booksData = data?.data || [];
  if (bookGenre) {
    booksData = booksData.filter(
      (book) => book.genre.toLowerCase() === bookGenre.toLowerCase()
    );
  }
  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-5 p-5 pt-12">
        <aside className="w-full  md:w-1/3">
          <BookAside booksData={booksData} />
        </aside>
        <section className="w-full md:w-2/3">
          <FilteredBooks booksData={booksData} />
        </section>
      </div>
    </Container>
  );
};

export default Books;
