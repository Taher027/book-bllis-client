import { useState } from "react";
import BookModel from "../../assets/data/BookModel";
const BookAside = ({
  category,
  checkedAuthors,
  handleAuthorCheck,
  checkedPublications,
  handlePublicationCheck,
}) => {
  const categoryLower = category && category.toLowerCase();
  const [toggleAuthor, setToggleAuthor] = useState(true);
  const [togglePublicationState, setTogglePublicationState] = useState(true);

  const { authors, publications } = BookModel.reduce(
    (acc, book) => {
      if (book.category.toLowerCase() === categoryLower) {
        acc.authors.add(book.author);
        acc.publications.add(book.publication);
      }
      return acc;
    },
    {
      authors: new Set(),
      publications: new Set(),
    }
  );

  const uniqueAuthors = [...authors];
  const uniquePublications = [...publications];

  const handleToggleAuthorState = () => {
    setToggleAuthor((prev) => !prev);
  };
  const handleTogglePublicationState = () => {
    setTogglePublicationState((prev) => !prev);
  };

  return (
    <div className="flex flex-col space-y-6 ">
      <div className="flex flex-col space-y-2 bg-[#F5F4F4] p-4 ">
        <div>
          <h3
            onClick={handleToggleAuthorState}
            className="text-lg font-semibold  p-2 bg-[#F29434]  text-white cursor-pointer mb-5"
          >
            Author
          </h3>
        </div>
        <div className="flex flex-col space-y-2 max-h-[200px] overflow-y-auto">
          {toggleAuthor &&
            uniqueAuthors.length > 0 &&
            uniqueAuthors.map((author, index) => {
              return (
                <div key={index} className="flex items-center space-x-1">
                  <label className="text-sm font-medium order-1">
                    {author}
                  </label>
                  <input
                    key={index}
                    type="checkbox"
                    className="mr-2"
                    value={author}
                    onChange={handleAuthorCheck}
                    checked={checkedAuthors.includes(author)}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex flex-col space-y-2 bg-[#F5F4F4] p-4">
        <div>
          <h3
            onClick={handleTogglePublicationState}
            className="text-lg font-semibold  p-2 bg-[#F29434]  text-white cursor-pointer mb-5"
          >
            Publications
          </h3>
        </div>
        <div className="flex flex-col space-y-2 max-h-[200px] overflow-y-auto">
          {togglePublicationState &&
            uniquePublications.length > 0 &&
            uniquePublications.map((pulication, index) => {
              return (
                <div key={index} className="flex items-center space-x-1 ">
                  <label className="text-sm font-medium order-1">
                    {pulication}
                  </label>
                  <input
                    key={index}
                    type="checkbox"
                    className="mr-2"
                    value={pulication}
                    onChange={handlePublicationCheck}
                    checked={checkedPublications.includes(pulication)}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BookAside;
