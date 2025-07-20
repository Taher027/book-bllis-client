import Container from "../Container";
import { NavLink } from "react-router";
const HeaderBottom = () => {
  const bookGenres = [
    { label: "Home", href: "/" },
    { label: "All Books", href: "/books", exact: true },
    { label: "Fiction", href: "books/fiction" },
    { label: "Thriller", href: "books/thriller" },
    { label: "Mystery", href: "books/Mystery" },
    { label: "Fantasy", href: "books/fantasy" },
    { label: "Romance", href: "books/romance" },
    { label: "Biography", href: "books/biography" },
    { label: "Self-Help", href: "books/self-help" },
    { label: "Children's Books", href: "books/children" },
  ];
  const menuItems = bookGenres.map((genre) => (
    <NavLink
      key={genre.label}
      to={genre.href}
      end={genre.exact}
      className={({ isActive }) =>
        `h-full px-4 py-3 text-sm font-medium  flex items-center  whitespace-nowrap  ${
          isActive
            ? "bg-red-600 text-white"
            : "border border-gray-200 border-t-0 border-r-0 -mt-[1px]"
        }`
      }
    >
      {genre.label}
    </NavLink>
  ));
  return (
    <nav className="sticky transition duration-300 z-50 top-0  bg-white shadow-md hidden md:block overflow-visible">
      <Container>
        <div className="w-full h-auto  flex flex-wrap items-center justify-start">
          {menuItems}
        </div>
      </Container>
    </nav>
  );
};

export default HeaderBottom;
