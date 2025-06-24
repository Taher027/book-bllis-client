import React, { useState } from "react";
import BookAside from "../components/Books/BookAside";
import { useParams } from "react-router";
import BookModel from "../assets/data/BookModel";
import Container from "../components/shared/Container";
import FilteredBooks from "../components/Books/FilteredBooks";

const Books = () => {
  const params = useParams();
  const { category } = params;
  const [checkedAuthors, setCheckedAuthors] = useState([]);
  const [checkedPublications, setCheckedPublications] = useState([]);
  const handleAuthorCheck = (e) => {
    const { value, checked } = e.target;

    setCheckedAuthors((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((author) => author !== value);
      }
    });
  };
  const handlePublicationCheck = (e) => {
    const { checked, value } = e.target;
    setCheckedPublications((prev) => {
      if (checked) {
        return [...prev, value];
      } else {
        return prev.filter((publication) => publication !== value);
      }
    });
  };

  return (
    <Container>
      <div className="flex flex-col md:flex-row gap-5 p-5 pt-12">
        <aside className="w-full  md:w-1/3">
          <BookAside
            category={category}
            checkedAuthors={checkedAuthors}
            handleAuthorCheck={handleAuthorCheck}
            checkedPublications={checkedPublications}
            handlePublicationCheck={handlePublicationCheck}
          />
        </aside>
        <section className="w-full md:w-2/3">
          <FilteredBooks
            category={category}
            checkedAuthors={checkedAuthors}
            checkedPublications={checkedPublications}
          />
        </section>
      </div>
    </Container>
  );
};

export default Books;
