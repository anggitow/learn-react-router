// layouts
import CareersLayout from "layouts/CareersLayout";
import HelpLayout from "layouts/HelpLayout";
import RootLayout from "layouts/RootLayout";

// pages
import Home from "pages/Home";
import About from "pages/About";
import Faq from "pages/help/Faq";
import Contact, { contactAction } from "pages/help/Contact";
import CareerDetails, {
  careerDetailsLoader,
} from "pages/careers/CareerDetails";
import Careers, { careersLoader } from "pages/careers/Careers";
import CareerErrors from "pages/careers/CareerErrors";
import NotFound from "pages/NotFound";

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
            action: contactAction,
          },
        ],
      },
      {
        path: "careers",
        element: <CareersLayout />,
        errorElement: <CareerErrors />,
        children: [
          {
            index: true,
            element: <Careers />,
            loader: careersLoader,
          },
          {
            path: ":slug",
            element: <CareerDetails />,
            loader: careerDetailsLoader,
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
