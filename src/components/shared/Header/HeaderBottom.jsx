import Container from "../Container";
import { NavLink } from "react-router";
const HeaderBottom = () => {
  const bookCategories = [
    { label: "Home", href: "/" },
    { label: "Fiction", href: "books/categories/fiction" },
    { label: "Thriller", href: "books/categories/thriller" },
    { label: "Mystery", href: "books/categories/Mystery" },
    { label: "Fantasy", href: "books/categories/fantasy" },
    { label: "Romance", href: "books/categories/romance" },
    { label: "Biography", href: "books/categories/biography" },
    { label: "Self-Help", href: "books/categories/self-help" },
    { label: "Children's Books", href: "books/categories/children" },
  ];
  const menuItems = bookCategories.map((category) => (
    <NavLink
      key={category.label}
      to={category.href}
      className={({ isActive }) =>
        `h-full px-4 py-3 text-sm font-medium  flex items-center  whitespace-nowrap  ${
          isActive
            ? "bg-red-600 text-white"
            : "border border-gray-200 border-t-0 border-r-0 -mt-[1px]"
        }`
      }
    >
      {category.label}
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
