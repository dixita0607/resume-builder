import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./paths/Home/Home.js";
import Resume from "./paths/Resume/Resume.js";
import NotFound from "./paths/404";
import ResumesContext from "./contexts/resumes";
import * as localStorage from "./contexts/resumes/localStorage.js";

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
    <ResumesContext.Provider value={localStorage}>
      <RouterProvider router={router} />
    </ResumesContext.Provider>
  );
}
