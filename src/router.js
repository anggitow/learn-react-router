import HelpLayout from "components/HelpLayout";
import RootLayout from "components/RootLayout";
import About from "pages/About";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Contact from "pages/help/Contact";
import Faq from "pages/help/Faq";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "help",
        element: <HelpLayout />,
        children: [
          {
            path: "faq",
            element: <Faq />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
