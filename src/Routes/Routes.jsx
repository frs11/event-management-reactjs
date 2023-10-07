import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";
import Homepage from "../Pages/Homepage";
import Cards from "../Components/cards";

const customRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/services/:id",
        element: <Cards></Cards>,
      },
    ],
  },
]);

export default customRoutes;
