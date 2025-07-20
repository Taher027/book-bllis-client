import { useDispatch, useSelector } from "react-redux";
import {
  setAuthors,
  setPublications,
} from "../../redux/features/book/bookSlice";
import { useGetBooksQuery } from "../../redux/features/book/bookApi";
const BookAside = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetBooksQuery();
  const { bookGenre, authors, publications } = useSelector(
    (state) => state.book
  );
  const isAuthorChecked = (author) => authors.includes(author);
  const isPublicationChecked = (publication) =>
    publications.includes(publication);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  let booksData = data?.data || [];
  if (bookGenre) {
    booksData = booksData.filter(
      (book) => book.genre.toLowerCase() === bookGenre.toLowerCase()
    );
  }
  const uniqueAuthors = [...new Set(booksData.map((book) => book.author))];
  const uniquePublications = [
    ...new Set(booksData.map((book) => book.publication)),
  ];

  const handleAuthorChange = (author) => {
    dispatch(setAuthors(author));
  };
  const handlePublicationChange = (publication) => {
    dispatch(setPublications(publication));
  };

  return (
    <div className="flex flex-col space-y-6 ">
      {uniqueAuthors?.length > 0 && (
        <div className="flex flex-col space-y-2 bg-[#F5F4F4] p-4 ">
          <div>
            <h3 className="text-lg font-semibold  p-2 bg-[#F29434]  text-white cursor-pointer mb-5">
              Author
            </h3>
          </div>

          <div className="flex flex-col space-y-2 max-h-[200px] overflow-y-auto">
            {uniqueAuthors.map((author) => (
              <div
                key={author}
                className="flex items-center justify-baseline space-x-1"
              >
                <label className="text-sm font-medium  ">
                  <input
                    checked={isAuthorChecked(author)}
                    onChange={() => handleAuthorChange(author)}
                    type="checkbox"
                    className="mr-2 w-fit"
                  />
                  {author}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}

      {uniquePublications?.length > 0 && (
        <div className="flex flex-col space-y-2 bg-[#F5F4F4] p-4">
          <div>
            <h3 className="text-lg font-semibold  p-2 bg-[#F29434]  text-white cursor-pointer mb-5">
              Publications
            </h3>
          </div>

          <div className="flex flex-col space-y-2 max-h-[200px] overflow-y-auto">
            {uniquePublications.map((publication) => (
              <div key={publication} className="flex items-center space-x-1">
                <label className="text-sm font-medium order-1">
                  <input
                    checked={isPublicationChecked(publication)}
                    onChange={() => handlePublicationChange(publication)}
                    type="checkbox"
                    className="mr-2 w-fit"
                  />
                  {publication}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookAside;
