import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import HomePage from "./HomePage";
import UsefulResources from "./otherResources/UsefulResources";
import NotFoundPage from "./NotFoundPage";

// React router to route all the pages for a seamless experience
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/UsefulResources",
    element: <UsefulResources />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
