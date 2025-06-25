import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../layout/RootLayout";
import SingleBookPage from "../components/shopPage/SingleBookPage";
import Books from "../pages/Books";
import DashBoard from "../layout/DashBoard";
import ErrorPage from "../pages/ErrorPage";
import AddProduct from "../pages/Dashboard/Admin/AddProduct";
import Orders from "../pages/Dashboard/Admin/Orders";
import NewOrder from "../pages/Dashboard/Admin/NewOrder";
import AllProducts from "../pages/Dashboard/Admin/AllProducts";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
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
