import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";
import Homepage from "../Pages/Homepage";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import UserProfile from "../Pages/UserProfile";
import CardDetails from "../Components/Homepage/Cards/CardDetails";
import BookedEvents from "../Pages/BookedEvents";

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
        loader: () => fetch("/events.json"),
        element: <CardDetails></CardDetails>,
      },
      {
        path: "/user/booked-events",
        element: <BookedEvents></BookedEvents>,
      },
    ],
  },
]);

export default customRoutes;
