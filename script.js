import { createRoot } from "react-dom/client";
import "./src/styles/App.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./src/components/Home/Home";
import Contact from "./src/pages/Contact";
import CountryDetails from "./src/components/CountryDetails/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/:country",
    element: <CountryDetails />
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
