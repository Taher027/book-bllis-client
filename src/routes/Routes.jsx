import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import BookShopPage from "../components/shopPage/BookShopPage";
import Books from "../pages/Books";
import DashBoard from "../layout/DashBoard";
import ErrorPage from "../pages/ErrorPage";
import AddProduct from "../pages/Dashboard/Admin/AddProduct";
import Orders from "../pages/Dashboard/Admin/Orders";
import NewOrder from "../pages/Dashboard/Admin/NewOrder";
import AllProducts from "../pages/Dashboard/Admin/AllProducts";
import App from "../App";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <App />,
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
        path: "/books/:genre",
        element: <Books />,
      },
      {
        path: "/books/genre/:bookId",
        element: <BookShopPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
        index: true,
        path: "/dashboard/",
        element: <NewOrder />,
      },
      {
        index: true,
        path: "/dashboard/new-order",
        element: <NewOrder />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/all-products",
        element: <AllProducts />,
      },

      {
        path: "/dashboard/orders",
        element: <Orders />,
      },
    ],
  },
]);
export default routes;
