import React from "react";
import customRoutes from "./Routes/Routes.jsx";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Contexts/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={customRoutes} />
    </AuthProvider>
  </React.StrictMode>
);
