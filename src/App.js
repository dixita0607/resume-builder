import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./paths/Home";
import Resume from "./paths/Resume";
import NotFound from "./paths/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/:id",
    element: <Resume />,
    errorElement: <NotFound />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
