import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from  "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Contacts from "./Pages/Contacts";
import Projects from "./Pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "*", element: <NotFound /> },
      { path: "/contact", element: <Contacts /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]); 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
