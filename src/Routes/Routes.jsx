import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";
import Homepage from "../Pages/Homepage";
import Cards from "../Components/cards";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import UserProfile from "../Pages/UserProfile";

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
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/services/:id",
        element: <Cards></Cards>,
      },
    ],
  },
]);

export default customRoutes;
