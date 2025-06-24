import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchForm = () => {
  return (
    <form>
      <div className="relative w-full overflow-hidden">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Here"
          className="w-full h-10  px-4 border bg-white rounded-r-lg border-gray-300 search-input-border focus:outline-none  placeholder:text-gray-500 "
        />
        <button
          type="submit"
          aria-label="submit search"
          className=" button-bg w-10 h-10 absolute inset-y-0 flex items-center justify-center rounded-r-lg cursor-pointer right-0"
        >
          <FiSearch color="white" size="20px" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
