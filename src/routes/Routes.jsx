import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import SingleBookPage from "../components/shopPage/SingleBookPage";
import Books from "../pages/Books";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/books/categories/:category",
        element: <Books />,
      },
      {
        path: "/books/category/book/:id",
        element: <SingleBookPage />,
      },
    ],
  },
]);
export default routes;
