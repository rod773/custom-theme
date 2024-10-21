import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "pages/Home";
import About from "pages/About";
import Contact from "pages/Contact";
import Layout from "components/Layout";

const Routes = () => {
  const routesForPublic = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ];

  const router = createBrowserRouter([...routesForPublic]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
