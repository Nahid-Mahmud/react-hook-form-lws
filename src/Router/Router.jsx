import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <p className="font-bold p-5  max-w-7xl  text-4xl mx-auto flex h-screen items-center justify-center">
            This is a react Template (React + React Router Dom + Tailwind Css + Axios + TANSTACK query + TANSTACK dev
            tool )
          </p>
        ),
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>,
      },
    ],
  },
]);
